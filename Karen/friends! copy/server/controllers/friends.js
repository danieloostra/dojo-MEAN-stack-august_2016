console.log('friends controller');

var mongoose = require('mongoose');
var Friends = mongoose.model('Friends');


function FriendsController(){
  this.index = function(req,res){
    Friends.find({}, function(err, friends){
        if(err){
            console.log("error")
        } else{
            res.json(friends);
        }
    })
  };
  this.create = function(req,res){
    var new_friend = new Friends({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        birthday: req.body.birthday});
        new_friend.save(function(err){
            if(err){
                console.log(err);
                console.log('something went wrong..');
            }else{
                console.log('successfully add a new friend!')
                res.json(new_friend);
            }
        })
  };
  this.update = function(req,res){
      Friends.findOne({_id:req.params.id}, function(err, friend){
          friend.first_name= req.body.first_name,
          friend.last_name= req.body.last_name,
          friend.birthday= req.body.birthday
          friend.save(function(err){
              console.log("updated.");
              res.json(friend);
          })
          console.log("hi")
        })
  };
  this.delete = function(req,res){
      Friends.remove({_id: req.params.id}, function(err){
          res.json(err);
      })
  };
  this.show = function(req,res){
    Friends.findOne({_id: req.params.id}, function(err, friend){
        console.log(friend);
        res.json(friend);
    })
  };
}
module.exports = new FriendsController(); // what does this export?
