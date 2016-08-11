var mongoose = require('mongoose');

var MongooseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  nickname: String,
  zipcode: Number
})

var Mongoose = mongoose.model('Mongoose', MongooseSchema);