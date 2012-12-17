
define(['jquery', 'models/form'], function($, Form) {
  'use strict';
  var Forms = window.BlinkForms || {};

  /**
   * @param {Object} def definition of form to initialise.
   */
  Forms.initialize = function(def) {
    var form;
    if ($.isPlainObject(def)) {
      form = new Form(def);
    }
    if (!Forms.currentFormObject) {
      // TODO: this is insufficient, needs a more thorough test
      Forms.currentFormObject = form;
    }
  };

  // global exports
  window.BlinkForms = Forms;
});

