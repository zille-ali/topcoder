var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
var a=10;
var b=20;




app.get("/", function(req,res){
 response = {
      result: req.query.a + req.query.b,
   };
   res.end(JSON.stringify(response));
  });
  
  app.listen(port);
