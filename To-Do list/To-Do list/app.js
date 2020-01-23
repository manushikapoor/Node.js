//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var items=["Buy Food","Cook Food", "Eat Food"];

app.get("/", function(req,res){


var today= new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day=today.toLocaleDateString("en-US", options);
res.render('list', {kindOfDay: day, newItem:items});


});

app.post("/",function(req,res){
  item =req.body.textBox;
  items.push(item);
  res.redirect("/");
});


app.listen("3000",function(){
  console.log("server running");
});
