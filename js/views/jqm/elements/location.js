define(['views/jqm/element',
'text!views/jqm/templates/location.html'
], function (ElementView, html) {
  'use strict';
  var LocationElementView = ElementView.extend({
    render: function () {
      var $locateButton, $clearButton, $div, $button;
      var i18n = window.i18n['BMP/Forms/elements'];
      var self = this;

      //load google maps
      BMP.Forms.loadMapScript();
      this.$el.empty();
      this.renderLabel();

      $button = $('<div class="ui-grid-a"></div>');
      $locateButton = $('<div class="ui-block-a"><button type="button" data-theme="c"></button></div>');
      $locateButton.find('button').text(i18n.LOCATION_BUTTON);
      $clearButton = $('<div class="ui-block-b"><button data-action="clear" type="button" data-theme="c">Clear</button></div>');
      $button.append($locateButton);
      $button.append($clearButton);

      $div = $('<div class="ui-input-text"></div>');
      $div.append($button);

      this.$el.append($div);

      $locateButton.find('button').on('click', $.proxy(LocationElementView.onButtonClick, this));
      $clearButton.find('button').on('click', $.proxy(LocationElementView.onClear, this));

      this.bindRivets();
      this.model.on('change:value', this.renderFigure, this);

      BMP.Forms.once('formInjected', function () {
        self.model.on('change:value', self.setClearButton, self);
        self.setClearButton();
      });
    },
    setClearButton: function() {
      var value = this.model.get('value'),
        $clearButton = this.$el.find('[data-action=clear]');
      if (value) {
        $clearButton.button('enable');
      } else {
        $clearButton.button('disable');
      }
    },
    renderFigure: function () {
      var $figure,
        $figcaption,
        loc,
        $img,
        caption,
        staticMap,
        self = this;

      if (typeof self.model.attributes.value === 'string') {
        loc = JSON.parse(self.model.attributes.value);
      } else {
        loc = self.model.attributes.value;
      }

      self.$el.children('figure').remove();
      if (!loc || !loc.latitude || !loc.longitude) {
        return;
      }
      $figure = $('<figure></figure>');
      $figcaption = $('<figcaption></figcaption>').appendTo($figure);
      caption = 'lat: ' + loc.latitude + '; long: ' + loc.longitude;
      if (loc.accuracy) {
        caption += '; &plusmn;' + loc.accuracy + 'M';
      }
      $figcaption.html(caption);
      $img = $('<img />');
      staticMap = 'http://maps.google.com/maps/api/staticmap?markers=';
      staticMap += loc.latitude + ',' + loc.longitude;
      staticMap += '&size=300x200&zoom=20&maptype=hybrid&sensor=true';
      $img.attr('src', staticMap);
      $img.css({
        'max-height': '7em',
        'max-width': '100%'
      });
      $figure.append($img);
      self.$el.append($figure);
    },
    remove: function () {
      this.$el.children('button').off('click');
      this.model.off('change:value', this.renderFigure, this);
      return ElementView.prototype.remove.call(this);
    }
  }, {
    // static properties and methods
    onDone: function (event) {
      var value = $('#bmp-forms-location').find('input').val();

      if (value) {
        value = JSON.parse(value);
        this.model.set('value', value);
      }
      $('#bmp-forms-location').popup('close');
      event.preventDefault();
      return false;
    },
    onClear: function (event) {
      this.model.unset('value');
      event.preventDefault();
      return false;
    },
    onCancel: function (event) {
      $('#bmp-forms-location').popup('close');
      event.preventDefault();
      return false;
    },
    onButtonClick: function (event) {
      var i18n = window.i18n['BMP/Forms/elements'],
        view = this,
        model = this.model,
        $div = $(html),
        options = {
          dismissible: true,
          history: false,
          afterclose: function (e, ui) {
            if (e && ui) {
              $div.remove();
            }
          }
        },
        $window = $(window),
        $form,
        windowX = $window.innerWidth(),
        windowY = $window.innerHeight(),
        value;

      $(document.body).append($div);
      $div.find('#map-canvas').height(windowY - 100);
      $div.find('#map-canvas').width(windowX - 60);

      $form = $div.children('form');
      $form.on('submit', $.proxy(LocationElementView.onDone, this));

      //disable button till location located
      view.$el.find('button').first().button('disable');
      view.$el.find('.ui-btn-text').first().text(i18n.LOCATING_SHORT);

      value = model.get('value');
      if (_.isEmpty(value) || !value.latitude || !value.longitude) {
        model.getGeoLocation().then(function () { // onSuccess
          value = model.get('currentlocation');
          //set value for first time
          $div.find('input').val(JSON.stringify(value));
          LocationElementView.initializeMap(value, $div);
          //enable location button
          view.$el.find('button').first().button('enable');
          view.$el.find('.ui-btn-text').first().text(i18n.LOCATION_BUTTON);
        }, function () { // onError (err)
          //enable location button
          view.$el.find('button').first().button('enable');
          view.$el.find('.ui-btn-text').first().text(i18n.LOCATION_BUTTON);
        });
      } else {
        LocationElementView.initializeMap(value, $div);
        //enable location button
        view.$el.find('button').first().button('enable');
        view.$el.find('.ui-btn-text').first().text(i18n.LOCATION_BUTTON);
      }

      //finally creating and poping up map
      $form.trigger('create');
      $div.popup(options);
      $div.popup('open');
      $form.on('click', '[data-action=cancel]',
        $.proxy(LocationElementView.onCancel, this));
      event.preventDefault();
      return false;
    },
    initializeMap: function (value, $div) {
      var warning = window.i18n['BMP/Forms/warning'],
        map,
        myLatlng,
        mapOptions,
        marker,
        position;

      //creating map
      myLatlng = new google.maps.LatLng(value.latitude, value.longitude);
      mapOptions = {
          zoom: 8,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      try {
        map = new google.maps.Map($div.find('#map-canvas')[0], mapOptions);
      } catch (err) {
        $div.find('#map-canvas').text(warning.ERROR_GOOGLE_MAP);
      }

      //creating draggable marker
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable: true
      });
      //adding listener to marker dragend event
      google.maps.event.addListener(marker, 'dragend', function(){
        position = {
          latitude: marker.getPosition().lat(),
          longitude: marker.getPosition().lng(),
          altitude: null,
          accuracy: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        };
        $div.find('input').val(JSON.stringify(position));
      });
    }
  });

  return LocationElementView;
});
