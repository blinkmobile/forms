define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var SubFormElementView;

  SubFormElementView = ElementView.extend({
    tagName: 'section',
    remove: function() {
      this.$el.children('.ui-btn').children('button').off('click');
      return ElementView.prototype.remove.call(this);
    },
    render: function() {
      var name = this.model.attributes.subForm,
          $button = $('<button></button>').attr({
            type: 'button',
            'data-icon': 'plus',
            'data-action': 'add'
          }).text(name);

      $button.on('click', this.onAddClick);

      this.$el.attr('data-form', name);
      this.$el.prepend($button);
    },
    onAddClick: function() {
      var element = BlinkForms.getElement(this);
      element.add();
    }
  });

  return SubFormElementView;
});
