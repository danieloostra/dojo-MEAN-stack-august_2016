var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new mongoose.Schema({
  first_name: {
        type: String,
        required: [true, 'requires first name'],
        trim: true
  },
  last_name: {
        type: String,
        required: [true, 'requires last name'],
        trim: true
  },
  email: {
        type: String,
        unique: true,
        required: [true, 'your email address is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
        type: String,
        required: [true, 'requires password'],
        minlength: [8, "Your password must be longer than 8 characters"],
        maxlength:[16, "Your password must be shorter than 16 characters"],
        validate: {
          validator: function(value){
            var val = new RegExp(value)
            return val.test(this.confirm_password)
          },
          message: "Password and confirm password must match"
        }
  },
  confirm_password: {
        type: String,
        required: [true, 'confirm password is required'],
      }
  },
  {timestamps:true})


  userSchema.pre('save', function(done){
  	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  	this.confirm_password = '';
  	done()

})

var User = mongoose.model('User', userSchema)
