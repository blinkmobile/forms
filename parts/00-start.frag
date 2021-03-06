// AMD-detection borrowed from Kris Kowal's Q
// https://github.com/kriskowal/q/blob/master/q.js#L29
(function (definition) {
  if (typeof define === "function" && define.amd) {
    // Require.JS
    define([
      'feature!promises',
      'jquery',
      'underscore',
      'backbone',
      'expression',
      'jquerymobile',
      'feature!es5',
      'signaturepad'
    ], definition);

  } else {
    // no Require.JS, no AMD modules
    definition(Promise, $, _, Backbone, Expression);
  }
}(function(Promise, $, _, Backbone, Expression) {
  // establish globals
  var BMP = window['BMP'] = window['BMP'] || {};
  BMP.Forms = BMP.Forms || {};
  BMP.Expression = Expression;
