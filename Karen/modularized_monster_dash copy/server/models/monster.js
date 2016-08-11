var mongoose = require('mongoose');


var MonsterDashSchema = new mongoose.Schema({
    name: String,
    type: String,
    size: String,
    mood: String
});

var Monster = mongoose.model('Monster', MonsterDashSchema);
