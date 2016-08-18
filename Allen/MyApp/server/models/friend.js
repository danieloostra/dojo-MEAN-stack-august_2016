var mongoose = require('mongoose');
console.log(friendSchema);
// build your friend schema and add it to the mongoose.models
var friendSchema = new mongoose.Schema({
  first: String,
  last: String,
  birthday: Date
});

var Friend = mongoose.model('Friend', friendSchema)
