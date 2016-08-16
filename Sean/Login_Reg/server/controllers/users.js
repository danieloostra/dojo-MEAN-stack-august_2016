var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcrypt')

console.log('users controller');
function UsersController(){
	this.login = function(req, res){
		User.findOne({email: req.body.email.toLowerCase()}, function(err, user){
			if(err){
				res.json(err)
			}
			else{
				if(user == null){
					res.json({data:"Your information does not match our records"})
				}
				else{	
					if(bcrypt.compareSync(req.body.password, user.password)){
						res.json(user)
					}
					else{
						res.json({data:"Your password does not match our records"})
					}
				}
			}
		})
	}
	this.register = function(req,res){
		var user = User({first_name : req.body.first_name, last_name : req.body.last_name, email: req.body.email, password: req.body.password, cf_password: req.body.cf_password, birthdate: req.body.birthdate }) 
		user.save(function(err){
			if(err){
				res.json(err)
			}
			else{
				res.json(user)
			}
		})
	}
}
module.exports = new UsersController();
