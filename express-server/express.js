var express = require('express');
var app = express();

app.get("/",function(req,res){
  res.send("hello");
});

app.get("/contact",function(req,res){
  res.send("contact me at - manushikapoor@gmail.com");
});

app.get("/about",function(req,res){
  res.send("My name is Manushi Kapoor and I am learning express.js !!");
});

app.listen(3000,function(){
  console.log("server started at port 3000");
});
