var mongoose = require('mongoose');
var User = mongoose.model('user')

console.log('inside users.js');

function usersController(){
  this.login = function(req, res){
    // User.findOne({username: req.body.username},
    //   function(err, user){
    //   if(err){
    //     res.json(err)
      // } else if(user){
      //   res.json(user)
      // } else {
      //     if(user){
            var newuser = new User({username:req.body.username})
            newuser.save(function(err){
              if(err){
                console.log('error');
                res.json(err);
              }
              else{
                res.json(newuser)
              }
            })
          // }
        // }
      // }
    }

}
module.exports = new usersController();
