

var mongoose = require('mongoose');

console.log('inside the user.js');
var userSchema = new mongoose.Schema({

  first: {type: String, required: true},
  last: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  birthday: {type: Date, required: true}

});

var User = mongoose.model('User', userSchema)
