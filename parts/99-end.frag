
  require(['models/expression'], function (Expression) {
    BMP.Expression = Expression;
  });

  require(['main'], function(Forms) {
    try {
      Forms._views = require('views/forms3jqm');
    } catch (err) {}
  });

  return BMP.Forms;
}));
