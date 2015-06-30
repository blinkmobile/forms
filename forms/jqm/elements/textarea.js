define(function (require) {
  'use strict';

  var HTMLElementView = require('forms/jqm/elements/html');

  return HTMLElementView.extend({
    createElement: function () {
      var name = this.model.get('name');
      var input$ = $('<textarea></textarea>');
      input$.attr({
        name: name,
        'rv-value': 'm:value',
        'rv-input': 'm:value',
        'rv-placeholder': 'm:placeholderText'
      });
      return input$;
    }
  });
});
