//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true,useUnifiedTopology: true} );

const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number,
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
// Fruit.insertMany([apple,orange,kiwi],function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("3 fruits inserted");
//   }
// });

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
