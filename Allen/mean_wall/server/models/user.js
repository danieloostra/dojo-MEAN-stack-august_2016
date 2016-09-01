
var mongoose = require('mongoose')

console.log('inside user.js');

var UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: [true, 'username is required'],
    maxlength: [20, 'username cant be longer than 20 characters']
  }

}, {timestamps: true})

var user = mongoose.model('user', UserSchema)
