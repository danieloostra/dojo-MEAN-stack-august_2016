var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = new mongoose.Schema({
	username: {
		type:String
	},
	comment: {
		type:String
	},
	_message: {
		type: Schema.Types.ObjectId, ref: 'Message'
	}
}, {timestamps:true})

var Comment =  mongoose.model('Comment', CommentSchema)