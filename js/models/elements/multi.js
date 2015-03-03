define(['models/elements/select'], function (SelectElement) {
  'use strict';

  var MultiElement = SelectElement.extend({
    initialize: function () {
      SelectElement.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
      view,
      View,
      mode,
      attrs = this.attributes;

      if (attrs.readonly) {
        this.removeView();
        View = Forms._views.MultiReadOnlyElement;
      } else {
        mode = attrs.mode || 'collapsed';
        mode = mode[0].toUpperCase() + mode.substring(1);
        View = Forms._views['Choice' + mode + 'Element'];
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    },
    validate: function (attrs) {
      var errors = {},
        other = false;
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      if (attrs.other || attrs.canSpecifyOther) {
        other = true;
      }

      // if `other` is true
      // and required is true
      // and attr.lenghth === 1 && _.contains(attr.value, 'other')
      // and other is not in options
      // then fail
      if (attrs.required && (_.isEmpty(attrs.value) || (other && (attrs.value.length === 1 && attrs.value[0] === "other") && !_.contains(attrs.options, 'other')))) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});
      }

      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  return MultiElement;
});
