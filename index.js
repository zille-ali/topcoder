var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
var param1=10;
var param2=20;




app.get('/calculator/add', function (req, res) {
    response = {
      result: req.query.param1 + req.query.param2,
   };
   res.end(JSON.stringify(response));
});
  app.listen(port);
