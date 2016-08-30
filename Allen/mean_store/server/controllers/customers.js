var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var User = mongoose.model('User')

console.log('inside the customers backend controller');
function customersController(){
  this.login = function(req, res){
    User.findOne({email: req.body.email},
      function(err, user){
        if(err){
          res.json(err);
        } else{
          if(user == null){
            res.json({data: 'what you entered does not match our records'});
          } else{
            if(bcrypt.comparesync(req.body.password, user.password)){
              res.json(user)
            } else{
              res.json({data: 'password does not match'})
            }
          }
        }
      })
    }

    this.register = function(res, req){
    }

}
module.exports = new customersController();
