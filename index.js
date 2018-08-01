var express = require ("express");
var app = express();
var port = process.env.PORT || 3000;
var a=25;
var b=30;
var c=a+b;

app.get("/", function(req,res){
  res.send(c);
  });
  
  app.listen(port);
