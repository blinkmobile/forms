define(['views/jqm/elements/text'], function (TextElementView) {
  'use strict';

  var TextAreaElementView = TextElementView.extend({
    render: function () {
      var $input,
        name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<textarea></textarea>');
      $input.attr({
        name: name,
        'rv-value': 'm:value',
        'rv-placeholder': 'm:placeholderText'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return TextAreaElementView;
});
