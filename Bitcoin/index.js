//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
var request = require('request');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var bt=req.body.crypto;
  var f=req.body.fiat;

  var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/"+bt+f;
  request(url, function (error, response, body) {
    var data=JSON.parse(body);
    var price = data.last;
    var currentDate=data.display_timestamp;

    res.write("The current date is "+currentDate);
    res.write("<h1>The current price of "+bt+" is "+price+" "+f+"</h1>");
    res.send();

});
});

app.listen("3000",function(){
  console.log("server running");
});
