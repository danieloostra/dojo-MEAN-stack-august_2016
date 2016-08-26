var mongoose = require('mongoose');
var userModel = mongoose.model('User')

console.log('im in the users.js backend controller');

function UsersController(){

  this.add = function(req, res){
    console.log('now in the backend controller');
    var newUser = new userModel({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday
    });
    newUser.save(function(err){
      if(err){
        console.log('there is an error');
      } else{
        console.log('this is happening after newuser save in users.js');
        res.json();
      }
    })
  }
  this.check = function(req, res){
    console.log('i got to the this.check in users.js');
    userModel.findOne({email: req.body.email, password: req.body.password}, function(err){
      if(err){
        console.log('username and password does not exist');
      } else{
        console.log('username and password match');
        res.json()
      }
    })
  }

}; //end of function usersController

///////////////////////////////////////////////////////////////////////////////////////////////
module.exports = new UsersController(); // what does this export?
//????
