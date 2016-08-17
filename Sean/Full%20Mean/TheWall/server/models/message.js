var mongoose = require('mongoose')
var Schema = mongoose.Schema

var MessageSchema = new mongoose.Schema({
	username: {
		type:String
	},
	message: {
		type:String
	},
	_comments: [{
		type: Schema.Types.ObjectId, ref: 'Comment'
	}]
}, {timestamps:true})
var Message =  mongoose.model('Message', MessageSchema)