//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true,useUnifiedTopology: true} );

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating :{
    type: Number,
    min: 1,
    max: 10
  } ,
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating : 5,
  review:"Nice fruit"
});

const orange = new Fruit({
  name: "Orange",
  rating : 7,
  review:"Juicy fruit"
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating : 8,
  review:"Best fruit"
});

//inserting fruits to database
Fruit.insertMany([apple,orange,kiwi],function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("3 fruits inserted");
  }
});

//reading all fruits' names
Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }
  else{
    fruits.forEach(function(fruit){
      console.log(fruit.name);
      mongoose.connection.close();
    });
  }

});

//updation
Fruit.updateOne({_id:"5e2d9eaa35e6bd3dec611df8"},{rating:8.5},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("value updated");
  }
});

//deletion
Fruit.deleteOne({name :"Apple"},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("record deleted");
  }
});
