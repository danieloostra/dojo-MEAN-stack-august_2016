var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// ---------mongoose----------------------------------
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	age: Number
});
mongoose.model('User', UserSchema);
var User = mongoose.model('User');
//---------------------------------------------------
app.use(bodyParser.urlencoded({ extended:true}));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
	});

app.post('/users', function(req, res) {
	console.log("POST DATA", req.body);
	// user is contructed via User (constructor)
	var user = new User({ name: req.body.name, age: req.body.age} );
	// .save is the method that pushes object into db
	user.save(function(err) {
		if (err){
			console.log('something went wrong');
		} else {
			console.log('successfully added user');
		}
	});
	res.redirect('/');
});
app.listen(8000, function(){
	console.log("listening on port 8000");
});
