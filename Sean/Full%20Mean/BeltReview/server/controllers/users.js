var mongoose = require('mongoose')
var User = mongoose.model('User')
var Topic = mongoose.model('Topic')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')
var Category = mongoose.model('Category')

function usersController(){
	this.login = function(req,res){
		User.findOne({username:req.body.username}, function(err,user){
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
	this.getuser = function(req,res){
		User.findOne({_id: req.params.id}).populate('_comments _posts _topics').exec(function(err,user){
			if(err){
				res.json(err)
			}
			else{
				res.json(user)
			}
		})

	}
	this.gettopic = function(req,res){
		Topic.findOne({_id : req.params.id})
		.populate({path:'posts', 
			populate:[
				{path: '_user'}, 
				{path: '_comments',
					populate:
						{path: '_user'}
			}]
		})
		.populate( '_user').exec(function(err,topic){
			if(err){
				res.json(err)
			}
			else{
				res.json(topic)
			}
		})
	}
	this.dashboard = function(req, res){
		Topic.find({}).populate('_posts _user').exec(function(err,topics){
			if(err){
				res.json(err)
			}
			else{
				res.json(topics)
			}
		})

	}
	this.getcat = function(req,res){
		Category.find({}, function(err, cats){
			if(err){
				res.json(err)
			}
			else{
				res.json(cats)
			}
		})
	}
	this.addcat = function(req,res){
		var cat =  Category({name: req.body.name})
		cat.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				res.json(cat)
			}
		})
	}
	this.addtopic = function(req,res){
		User.findOne({_id : req.body.userid}, function(err, user){
			var topic = Topic({title: req.body.title, desc: req.body.desc, _user: req.body.userid, _category: req.body.category})
			topic.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					user._topics.push(topic)
					user.save(function(err){
						if(err){
							res.json(err)
						}
						else{
							res.json(topic)
						}
					})
				}
			})
		})
	}
	this.addpost = function(req,res){
	 
		Topic.findOne({_id : req.body.topicid}, function(err, topic){
			var post = Post({_user: req.body.userid, content: req.body.content, upvote: 0, downvote: 0})
			post._topic = topic._id
			topic.posts.push(post)
			post.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					topic.save(function(err){
						if(err){
							res.json(err)
						}
						else{
							User.findOne({_id : req.body.userid}, function(err, user){
								if(err){
									res.json(err)
								}
								else{
									user.posts.push(post)
									user.save(function(err){
										if(err){
											res.json(err)
										}
										else{
											res.json(post)
										}
									})
								}
							})
						}
					})
				}
			})
		})
	}
	this.addcomment = function(req,res){
		Post.findOne({_id: req.body.postid}, function(err,post){
			var comment = Comment({_user: req.body.userid, content:req.body.content})
			comment._post = post._id
			post._comments.push(comment)
			comment.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					post.save(function(err){
						if(err){
							res.json(err)
						}
						else{
							User.findOne({_id : req.body.userid}, function(err, user){
								if(err){
									res.json(err)
								}
								else{
									user._comments.push(comment)
									user.save(function(err){
										if(err){
											res.json(err)
										}
										else{
											res.json(comment)
										}
									})
								}
							})
						}
					})
				}
			})
		})
	}
	this.upvote = function(req,res){
		Post.findOne({_id : req.params.id}, function(err,post){
			post.upvote++;
			post.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					res.json(post)
				}
			})
		})
	}
	this.downvote = function(req,res){
		Post.findOne({_id : req.params.id}, function(err,post){
			post.downvote++;
			post.save(function(err){
				if(err){
					res.json(err)
				}
				else{
					res.json(post)
				}
			})
		})
	}
}

module.exports = new usersController()