/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['underscore', 'q', 'BlinkForms', 'BIC'], function (_, Q, Forms) {

  suite('6: automated behaviours', function () {
    var obj,
      $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      $content.empty();
      delete Forms.currentFormObject;
    });

    suite('Form', function () {

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('form1', 'add').fail(function () {
          assert.fail(true, false, 'getDefinition failed!');
        }).done(function (def) {
          Forms.initialize(def);
          form = Forms.currentFormObject;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
        });

      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.currentFormObject;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

    }); // END: suite('Form', ...)

    suite('Message', function () {

      test('no label gives full width output', function () {});

      test('label set displays like an input formElement', function () {});

      test('defaults to persist=false (no storage)', function () {});

      test('persist=true submits message HTML', function () {});

    }); // END: suite('Form', ...)

    suite('Behaviours', function () {

      test('per-definition, Email is initially hidden', function () {});

      test('per-definition, Number is initially hidden', function () {});

      test('per-definition, calc1exp is empty', function () {});

      test('per-definition, calc2exp is empty', function () {});

      suite('after Text=abc', function () {

        suiteSetup(function () {});

        test('Email is visible', function () {});

        test('Number is still hidden', function () {});

        test('calc1exp is still empty', function () {});

        test('calc2exp is still empty', function () {});

        suite('after Email=abc@abc.com', function () {

          suiteSetup(function () {});

          test('Number is default value (zero)', function () {});

          test('calc1exp is zero', function () {});

          test('calc2exp is zero', function () {});

          suite('after Number=123', function () {

            suiteSetup(function () {});

            test('Number is 123', function () {});

            test('calc1exp is 123', function () {});

            test('calc2exp is 123', function () {});

          }); // END: after Number=123

        }); // END: after Email=abc@abc.com

      }); // END: after Text=abc

    }); // END: suite('Form', ...)

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function () {
//      delete Forms.currentFormObject;
    });

  }); // END: suite('1', ...)

});