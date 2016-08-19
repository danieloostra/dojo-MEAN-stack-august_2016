console.log("DATABASE");
var bcrypt = require('bcrypt')

var mongoose = require('mongoose');
var Users = mongoose.model('Users');

function UsersController(){
    this.index = function(req, res){
        Users.find({}, function(err, users){
            if(err){
                console.log('error')
            } else{
                res.json(users)
            }
        })
    };
    this.register = function(req, res){
        var new_user = new Users ({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            pw: req.body.pw,
            confirmpw: req.body.confirmpw,
            birthday: req.body.birthday});
            new_user.save(function(err){
                if(err){
                    console.log('lookhere', err)
                    res.json(err);
                } else {
                    console.log('ya')
                    res.json(new_user);
                }
            })
        };
    this.login = function(req, res){
        Users.findOne({email: req.body.email}, function(err, user){
            console.log(req.body);
            console.log(user);
            if(err){
                console.log(err)
                res.json(err)
            } else{
				if(user === null){
					res.json({data:"Your email isn't in our records"})
				}
				else{
                    console.log('chumba wumba');
					if(bcrypt.compareSync(req.body.pw, user.pw)){
						res.json(user)
					}
					else{
						res.json({data:"Your password is incorrect"})
					}
				}
			}
        })
    };
}

module.exports = new UsersController();
