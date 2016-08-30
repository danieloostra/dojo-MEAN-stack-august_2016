var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
var User = mongoose.model('User')

console.log('inside the customers backend controller');
function customersController(){

  this.register = function(req, res){
    var user = User({first_name:req.body.first_name, last_name:req.body.last_name, email:req.body.email, password:req.body.password, confirm_password:req.body.confirm_password})

    user.save(function(err){
      if(err){
        res.json(err);
      } else{
        res.json(user);
      }
    })
  }

  this.login = function(req, res){
    User.findOne({email: req.body.email},
      function(err, user){
        if(err){
          res.json(err);
        } else{
          if(user == null){
            res.json({data: 'what you entered does not match our records'});
          } else{
            if(bcrypt.compareSync(req.body.password, user.password)){
              res.json(user)
            } else{
              res.json({data: 'password does not match'})
            }
          }
        }
      })
    }
}
module.exports = new customersController();
