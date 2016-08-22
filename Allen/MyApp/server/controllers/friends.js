// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose');
var friendModel = mongoose.model('Friend')

function FriendsController(){
  this.index = function(req,res){
    console.log("inside server-side controller index method");
    friendModel.find({}, function(err, friends){
      console.log("inside index method, found a friend. Friend:", friends)
      res.json(friends);
    })
  };

  this.create = function(req, res){
    var newfriend = new friendModel({
      first: req.body.first,
      last: req.body.last,
      birthday: req.body.birthday
    });

    newfriend.save(function(err){
      if(err){
        console.log('something went wrong');
      } else{
        console.log('went in');
        res.json(newfriend);
      }
    });
  };

  this.edit = function(req, res){
    friendModel.update({_id: req.params.id}, {first: req.body.first, last: req.body.last, birthday: req.body.birthday}, function(err) {
      res.json(err);
    });
  }

  this.show = function(req,res){
    friendModel.findOne({_id: req.params.id}, function(err, friend){
      console.log(friend);
      res.json(friend);
    })
  };

  this.delete = function(req, res){
    friendModel.remove({_id: req.params.id}, function(err){
      res.json(err);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
