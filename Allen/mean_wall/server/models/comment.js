
var mongoose = require('mongoose')
var Schema = mongoose.Schema

console.log('inside comment.js');

var commentSchema = new mongoose.Schema({
  comment: {
    type: String
  },

  username: {
    type: String
  },

  _message: {
    type: Schema.Types.ObjectId, ref: 'message'
  }

}, {timestamps: true})
var comment = mongoose.model('comment', commentSchema)
