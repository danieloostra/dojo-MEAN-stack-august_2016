var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  birthdate: Date,
},{timestamps: true})

var User = mongoose.model('User', UserSchema);