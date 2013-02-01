define(['underscore', 'backbone', 'models/elements/text'],
      function(_, Backbone, TextElement) {
  'use strict';

  var EmailElement = TextElement.extend({
    initialize: function() {
      TextElement.prototype.initialize.call(this);
    }
  });

  return EmailElement;
});



