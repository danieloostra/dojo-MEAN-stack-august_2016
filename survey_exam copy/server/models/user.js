console.log('At the USERMODEL')
var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "User already exists, choose another name."],
        required: [true, "First name cannot be blank"]
    },

},   {timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});


var Users = mongoose.model('Users', userSchema)
