define(['jquery', 'underscore', 'backbone', 'views/jqm/elements/text'],
      function($, _, Backbone, TextElementView) {
  'use strict';

  var TextAreaElementView = TextElementView.extend({
    render: function() {
      var $input,
          name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<textarea />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return TextAreaElementView;
});


