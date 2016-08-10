
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    User.find({}, function(err, users){
        console.log(users);
        if(err){
            console.log("wrong");
        } else{
            response.render('index', {info: users})
        }
    });
    // response.render('index' )
});

app.post('/users', function(request, response){
    var user = new User({name: request.body.name, age: request.body.age});
    user.save(function(err){
        if(err){
            console.log("something went wrong");
        } else {
            console.log('successfully added a new user!');
            response.redirect('/');
        }
    });
});

app.listen('8000', function(){
    console.log("listening on port 8000")
})
