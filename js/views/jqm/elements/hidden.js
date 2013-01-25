define(['underscore', 'backbone', 'views/jqm/element'],
      function(_, Backbone, ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    tagName: 'input',
    attributes: {
      type: 'hidden'
    },
    render: function() {
      var name = this.model.get('name');

      this.$el.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.rivet.unbind();
      this.rivet = rivets.bind(this.el, {m: this.model});
    }
  });

  return TextElementView;
});

