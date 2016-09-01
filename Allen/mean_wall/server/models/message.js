var mongoose = require('mongoose')
var Schema = mongoose.Schema

console.log('inside message.js');

var MessageSchema = new mongoose.Schema({
  username:{
    type: String
  },

  message: {
    type: String,
    require: [true, 'can not be empty'],
    maxlength: [200, 'can not be longer than 200 characters']
  },

  _comment: [{
        type: Schema.Types.ObjectId, ref: 'comment'
      }]

}, {timestamps: true})

var message = mongoose.model('message', MessageSchema)
