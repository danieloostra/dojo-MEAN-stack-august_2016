var mongoose = require('mongoose')
var Schema = mongoose.Schema
var TopicSchema = new mongoose.Schema({
	_user : {type: Schema.Types.ObjectId, ref : 'User'},
	_category : {type:String},
	title : {type: String},
	desc : {type: String},
	posts : [{type: Schema.Types.ObjectId, ref : 'Post'}],
}, {timestamps:true})
var Topic = mongoose.model('Topic', TopicSchema)