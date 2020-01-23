//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");

const app=express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

var items=["Buy Food","Cook Food", "Eat Food"];
var workItems=[];

app.get("/", function(req,res){


var today= new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var day=today.toLocaleDateString("en-US", options);
res.render('list', {ListTitle: day, newItem:items});


});

app.get("/work",function(req,res){
  res.render('list', {ListTitle: "Work", newItem:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/",function(req,res){
  item =req.body.textBox;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});





app.listen("3000",function(){
  console.log("server running");
});
