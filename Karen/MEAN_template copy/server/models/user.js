console.log('At the USERMODEL')
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "First name cannot be blank"]
    },
    last_name: {
        type: String,
        required: [true, "Last name cannot be blank"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email cannot be blank"],
        validate: [validateEmail, 'Please fill a valid email address'],
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    pw: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
        maxlength: 32,
        validate: {
            matchvalidator: function(value){
				var patt = new RegExp(value)
				return patt.test(this.confirmpw)
			},
            validator: function( value ) {
               return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
             },
        message: "Password and Confirm Password must match and Password failed validation, you must have at least 1 number, uppercase and special character"
        }
    },
    confirmpw: {
		type:String,
		required: [true, "Your confirm password field is required"],
	},
    birthday: {
        type: Date,
        required: [true, "Birthday cannot be blank"]
    },
},   {timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


userSchema.pre('save', function(done){
  	this.pw = bcrypt.hashSync(this.pw, bcrypt.genSaltSync(8));
  	this.confirmpw = '';
  	done()
});
var Users = mongoose.model('Users', userSchema)
