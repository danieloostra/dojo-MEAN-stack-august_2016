var mongoose = require('mongoose')
var User = mongoose.model('User')

console.log('friends controller');
// How does a controller talk to mongoose and get a model?
function FriendsController(){
  this.index = function(req,res){
  	User.find({}, function(err,users){
  		if(err){
  			console.log('Could not find users')
  		}
  		else{
  			res.json(users)
  		}
  	})
  };
  this.create = function(req,res){
  		var user = User({first_name:req.body.first_name, last_name: req.body.last_name, birthdate:req.body.birthdate})
  		user.save(function(err){
  			if(err){
  				console.log('Error')
  			}
  		})
  };
  this.edit = function(req,res){
  	User.findOne({_id: req.params.id}, function(err,user){
  		if(err){
  			console.log('this should not be happening')
  		}
  		else{
  			res.json(user)
  		}
  	})
  };
  this.new = function(req, res){
  	res.json({placeholer: 'new'})
  }
  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    //your code here
    res.json({placeholder:'delete'});
  };
  this.show = function(req,res){
  	User.findOne({_id: req.params.id}, function(err, user){
  		if(err){
  			console.log('Everything is going wrong')
  		}
  		else{
  			res.json(user)
  		}
  	})
  };
}
module.exports = new FriendsController(); // what does this export?