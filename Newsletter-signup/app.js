//jshint esversion:6

const express=require("express");
const bodyParser=require("body-parser");
const request = require('request');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req,res){


  res.sendFile(__dirname+"/signup.html");

});

app.post("/", function(req,res){
  var fname=req.body.firstname;
  var lname=req.body.lastname;
  var email=req.body.email;

var data={
  members: [{
    email_address:email,
    status:"subscribed",
    merge_fields:{
      FNAME:fname,
      LNAME:lname
    }
  }]
};
var jsondata=JSON.stringify(data);
var options={
  url:"https://us4.api.mailchimp.com/3.0/lists/4dc349e1f3",
  method:"POST",
headers:{
  "Authorization":"manushi c02e6e7573e06da337ed8d9bc527b11b-us4"
},
body: jsondata
};
  request(options, function(error,response,body){
    if(error){
    res.sendFile(__dirname+"/failure.html");
    }
    else{
      if(response.statusCode===200){
        res.sendFile(__dirname+"/success.html");
      }else{
        res.sendFile(__dirname+"/failure.html");
      }
    }
  });
});

app.post("/failure", function(req,res){
  res.redirect("/");
});
//c02e6e7573e06da337ed8d9bc527b11b-us4

//4dc349e1f3
app.listen("3000",function(){
  console.log("server running");
});
