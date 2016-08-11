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

var QuoteSchema = new mongoose.Schema({
 author: String,
 quote: String,
},
{
 timestamps: true,
});
mongoose.model('Quotes', QuoteSchema); 
var Quotes = mongoose.model('Quotes')
// Routes
// Root Request
app.get('/', function(req, res){
	res.render('index')
})
app.post('/quotes', function(req, res){
	var quote = new Quotes({author: req.body.author, quote: req.body.quote})
	quote.save(function(err){	
		if(err){
			console.log('nope')
		}else{
			res.redirect('/quotes')
		}
	})
})
app.get('/quotes', function(req, res){
	Quotes.find({}, function(err, quotes){
		if(err){
			console.log("nope");
		}else{
			console.log('yep');
			console.log(quotes)
			res.render('quotes', {quotes})
		}
	})
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})