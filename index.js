var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
var a=10;
var b=20;



app.get("/", function(req,res){
  res.send(a+b);
  });
  
  app.listen(port);
