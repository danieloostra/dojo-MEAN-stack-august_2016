console.log("Backend USER Controller");
var bcrypt = require('bcrypt')
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

function usersController(){
    this.login = function(req, res){
        Users.findOne({name: req.body.name}, function(err, user){
            console.log(user);
            if(err){
                console.log(err)
                res.json(err)
            } else{
				if(user === null){
                    var new_user = new Users ({
                        name: req.body.name
                    })
                    new_user.save(function(err){
                        if(err){
                            res.json(err);
                        } else {
                            console.log("saved new user!")
                            res.json(new_user)
                        }
                    })
				}else{
                res.json(user)
            }
        }
    })
}}

module.exports = new usersController();
