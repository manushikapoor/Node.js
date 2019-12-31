var express = require('express');
var app = express();

app.get("/",function(req,res){
  response.send("hello");
});
app.listen(3000,function(){
  console.log("server started at port 3000");
});
