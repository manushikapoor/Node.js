var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var n3=n1+n2;
  res.send("the result of calculation is " + n3);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var n1=parseFloat(req.body.w);
  var n2=parseFloat(req.body.h);
  var result=n1/(n2*n2);

  res.send("Result is "+result);
});

app.listen("3000",function(){
  console.log("started at port 3000");
});
