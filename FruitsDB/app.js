//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true,useUnifiedTopology: true} );

const fruitSchema = new mongoose.Schema({
  name: String,
  rating : Number,
  review: String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating : 5,
  review:"Nice fruit"
});

fruit.save();
