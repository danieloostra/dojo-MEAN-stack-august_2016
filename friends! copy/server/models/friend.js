console.log('friends model');
var mongoose = require('mongoose');

//table template in db
var FriendSchema = new mongoose.Schema({
        first_name: String,
        last_name: String,
        birthday: Date
}, {timestamps: true})

var Friends = mongoose.model('Friends', FriendSchema)
