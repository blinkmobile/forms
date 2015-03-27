define(['views/jqm/elements/choice'], function (ChoiceElementView) {
  'use strict';

  var ChoiceExpandedElementView = ChoiceElementView.extend({
    remove: function () {
      var type = this.attributes.type;
      if (type !== 'select') {
        this.$el.find('input').off('click');
      }
      return ChoiceElementView.prototype.remove.call(this);
    },

    render: function () {
      var $fieldset,
        $legend,
        attrs = this.model.attributes,
        type = attrs.type;

      this.$el.empty();

      $fieldset = $('<fieldset></fieldset>').attr({
        'data-role': 'controlgroup'
      });
      if (attrs.layout === 'horizontal') {
        $fieldset.attr({
          'data-type': 'horizontal'
        });
      }
      $legend = $('<legend></legend>').text(attrs.label);
      $fieldset.prepend($legend);

      this.$el.append($fieldset);

      this.renderOptions();

      if (type === 'select') {
        this.bindRivets();
        this.model.on('change:value', this.onSelectValueChange, this);
      } else { // type === 'multi'
        // bind custom handler for checkboxes <- array
        this.model.on('change:value', this.onMultiValueChange, this);
      }
    },

    renderOptions: function () {
      var self = this;
      var $fieldset = this.$el.children('fieldset');
      var attrs = this.model.attributes;
      var type = attrs.type;
      var options = attrs.options;
      var name = attrs.name;
      var iType = type === 'select' ? 'radio' : 'checkbox';
      var iName = type === 'select' ? name + '_' + self.cid : name + '[]';

      $fieldset.remove('label');

      _.forEach(options, function (label, value) {
        var $label = $('<label>' + label + '</label>'),
          $input = $('<input type="' + iType + '" />');

        $input.attr({
          name: iName,
          value: value
        });
        $label.prepend($input);
        $fieldset.append($label);
      });

      if (this.model.attributes.other || this.model.attributes.canSpecifyOther) {
        $fieldset.append('<label><input name="' + iName + '" type="' + iType + '" value="other" />other</label>');
      }

      if (type === 'select') {
        $fieldset.find('input').on('click', function () {
          self.model.set('value', self.prepModelValue());
        });
      } else { // type === 'multi'
        // bind custom handler for checkboxes -> array
        // Note: jQM uses triggerHandler, so this has to be a direct event
        $fieldset.find('input').on('click', {
          view: this,
          model: this.model
        }, this.onMultiInputClick);
      }

    },

    onMultiInputClick: function (event) {
      var view = event.data.view,
        model = event.data.model;
      model.set('value', view.prepModelValue());
    },

    onMultiValueChange: function () {
      var view = this,
        model = this.model,
        $inputs = view.$el.find('input[type=radio],input[type=checkbox]'),
        value = model.attributes.value,
        renderOther = false;

      if (!_.isArray(value)) {
        value = [];
      }

      $inputs.each(function (index, input) {
        var $input = $(input);
        $input.prop('checked', _.indexOf(value, $input.val()) !== -1);
      });

      if (_.contains(value, 'other') || _.difference(value, _.keys(model.attributes.options)).length > 0) {
        renderOther = true;
        view.$el.find('input[value = other]').prop('checked', true);
      }

      $inputs.checkboxradio().checkboxradio('refresh');

      ChoiceElementView.prototype.renderOtherText.call(this, renderOther);

      if (_.difference(value, _.keys(model.attributes.options)).length > 0) {
        view.$el.find('input[type = text]').val(_.difference(value, _.keys(model.attributes.options)));
      }
    },

    onSelectValueChange: function () {
      var $values, values, view = this;
      var $inputs = view.$el.find('input[type=radio],input[type=checkbox]');

      if (_.contains(_.keys(this.model.get('options')), this.model.get('value'))) {
        this.$el.find('[value = ' + this.model.get('value') + ']').prop('checked', true);
      } else {
        if (this.model.get('value') === '') {
          this.$el.find('input:checked').prop('checked', false);
        } else {
          this.$el.find('[value = other]').prop('checked', true);
        }
      }

      $inputs.checkboxradio().checkboxradio('refresh');

      $values = this.$el.find('label[data-icon=radio-on]');
      values = $.map($values, function (val) {
        return $(val).text().trim();
      });

      ChoiceElementView.prototype.renderOtherText.call(this, _.contains(values, 'other'));

      if (!_.contains(_.keys(this.model.get('options')), this.model.get('value')) && this.model.get('value') !== 'other') {
        // Also need to fill the text box back in, in addition to selecting radio
        this.$el.find('input[type = text]').val(this.model.get('value'));
      }
    },

    fetchValue: function () {
      var attr = this.model.attributes;
      var values;
      var $inputs;

      switch (attr.type) {
        case "select":
          values = this.$el.find('input:checked').val();
          break;
        default: // multi
          $inputs = this.$el.find('input:checked');
          values = _.map($inputs, function (input) {
            return $(input).val();
          });
          if(values.length <= 0) {
            values = "";
          }
          break;
      }

      return values;
    }
  });

  return ChoiceExpandedElementView;
});
