define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var BooleanElementView = ElementView.extend({
    render: function () {
      var $input;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select></select>');
      $input.attr({
        'rv-value': 'm:value',
        'data-role': 'slider'
      });

      _.forEach(this.model.attributes.options, function (label, value) {
        var $option = $('<option value="' + value + '">' + label + '</option>');
        $input.append($option);
      });

      this.$el.append($input);
      this.bindRivets();
      this.model.on('change:value', this.onValueChange, this);
    },
    onValueChange: function () {
      this.$el.children('select').slider('refresh');
    }
  });

  return BooleanElementView;
});


