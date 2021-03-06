define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var HTMLElementView = require('forms/jqm/elements/html');

  // this module

  return HTMLElementView.extend({
    createElement: function () {
      var name = this.model.attributes.name;
      var input$ = $('<input type="email" />');
      input$.attr('name', name);
      return input$;
    }
  });
});
