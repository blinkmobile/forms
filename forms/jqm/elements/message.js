define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  return ElementView.extend({
    tagName: 'div',

    // explicitly override super's modelEvents
    modelEvents: {
      'change:html': 'renderHTML',
      'change:class': 'onChangeClass',
      'change:hidden': 'onChangeHidden',
      'change:label': 'renderLabel'
    },

    renderHTML: function () {
      if (!this.$html) {
        if (this.model.attributes.label) {
          this.$html = $('<div class="ui-input-text"></div>');
          this.$el.append(this.$html);
        } else {
          this.$html = this.$el;
        }
      }
      this.$html.html(this.model.attributes.html || '');
    },

    render: function () {
      if (this.model.attributes.label) {
        this.$el.attr({
          'data-role': 'fieldcontain'
        });
        this.$el.empty();
        this.renderLabel();
        this.renderHTML();

        this.$el.fieldcontain();
      } else {
        this.renderHTML();
      }
    }
  });
});
