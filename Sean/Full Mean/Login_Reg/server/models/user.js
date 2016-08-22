var mongoose = require('mongoose');
var bcrypt = require('bcrypt')


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var UserSchema = new mongoose.Schema({
	first_name : {
		type:String,
		required: [true, "Your first name is required"],
		trim: true,
		minlength: [2," Your first name must be longer than 2 letters"]
	},
	last_name : {
		type: String,
		required: [true, "Your last name is required"],
		trim: true,
		minlength: [2," Your last name must be longer than 2 letters"]

	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: [true, "Your email is required"],
		validate: [validateEmail, 'Please fill a valid email address'],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password: {
		type:String,
		required: [true, "Your password is required"],
		minlength: [8, "Your password must be longer than 8 characters"],
		maxlength:[32, "Your password must be shorter than 32 characters"],
		validate: {
			validator: function(value){
				var patt = new RegExp(value)
				return patt.test(this.cf_password)
			},
			message: "Password and confirm password fields must match"
		}
	},
	cf_password: {
		type:String,
		required: [true, "Your confirm password field is required"],
	},
	birthdate:{
		type: Date,
		required: [true, "Your birthdate is required"]
	}

},{timestamps:true})

UserSchema.pre('save', function(done){
  	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  	this.cf_password = '';
  	done()
});

var User = mongoose.model('User', UserSchema)