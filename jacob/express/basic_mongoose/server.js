// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose')

var OrcaSchema = new mongoose.Schema({
 name: String,
 size: String,
 mental_stability: String
})
mongoose.model('Orca', OrcaSchema); 
var Orca = mongoose.model('Orca')
// Routes
// Root Request
app.get('/', function(req, res) {
	Orca.find({}, function(err, orcas) {
		if(err){
			console.log('nope.')
		}else{
			console.log('yep')
			console.log(orcas)
			res.render('index', {orcas})
		}
	}) 
})
app.get('/orcas/:id', function(req, res){
	Orca.find({_id: req.params.id}, function(err, orcas){
		if(err){
    		console.log('something went wrong');
    	}else{
    		console.log("success")
    		res.redirect('/');
		}
	})
})
app.get('/orca/new', function(req, res){
	res.render('addform')
});
app.post('/orcas', function(req, res) {
    console.log("POST DATA", req.body);
    var orca = new Orca({name: req.body.name, size: req.body.size, mental_stability: req.body.mind});
    orca.save(function(err){ 
    	if(err){
    		console.log('something went wrong');
    	}else{
    		console.log("success")
    		res.redirect('/');
		}
	})
})
app.get('/orcas/:id/edit', function(req, res){
	Orca.find({_id: req.params.id}, function(err, orcas){
		if(err){
    		console.log('something went wrong');
    	}else{
    		console.log("success")
   			res.render('edit', {orcas})
		}
	})
})	
app.post('/orca/:id', function(req, res){
	Orca.update({_id: req.params.id},{name: req.body.name, size: req.body.size, mental_stability: req.body.mind}, function(err){
		if(err){
    		console.log('something went wrong');
    	}else{
    		console.log("success")
    		res.redirect('/');
		}
	})
})
app.get('/orcas/:id/destroy', function(req, res){
	Orca.remove({_id: req.params.id}, function(err){
		if(err){
			console.log('something went wrong');
		}else{
			res.redirect('/')
		}
	})
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})