var mongoose = require('mongoose')
var User = mongoose.model('User')
var Comment = mongoose.model('Comment')
var Message = mongoose.model('Message')

function userController(){
	this.login = function(req,res){
		User.findOne({username: req.body.username}, function(err,user){
			if(err){
				res.json(err)
			}
			else{
				if(user == null){
					var newuser = User({username: req.body.username})
					newuser.save(function(newerr){
						if(newerr){
							res.json(newerr)
						}
						else{
							res.json(newuser)
						}
					})
				}
				else{
					res.json(user)
				}
			}
		})
	}
	this.getmess = function(req,res){
		Message.find({}).populate('_comments').exec(function(err,messages){
			if(err){
				res.json(err)
			}
			else{
				res.json(messages)
			}
		})

	}
	this.postmess = function(req,res){
		var message = Message({username:req.body.username, message: req.body.message})
		message.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				res.json(message)
			}
		})
	}
	this.postcomm = function(req,res){
		Message.findOne({_id : req.body.messid}, function(err,message){
			var comment = Comment({username:req.body.username, comment: req.body.comment})
			comment._message = req.body.messid;
			message._comments.push(comment)
			comment.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					message.save(function(err){
						if(err){
							res.json(err)
						}
						else{
							res.json(comment)
						}
					})
				}
			})
		})
	}

}

module.exports = new userController();