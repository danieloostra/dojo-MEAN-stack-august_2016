var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PostSchema = new mongoose.Schema({
	_user : {type: Schema.Types.ObjectId, ref: 'User'},
	_topic : {type: Schema.Types.ObjectId, ref: 'Topic'},
	content: {type: String},
	upvote : {type: Number},
	downvote: {type:Number},
	_comments : [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})
var Post = mongoose.model('Post', PostSchema)