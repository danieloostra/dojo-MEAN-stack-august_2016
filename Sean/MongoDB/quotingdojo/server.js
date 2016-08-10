var express = require('express');
var mongoose = require('mongoose')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotes');
var QuotesSchema = new mongoose.Schema({
	name: String,
	quote: String,
    created_at: Date 

})
mongoose.model('Quote', QuotesSchema);
var Quote = mongoose.model('Quote')

app.get('/', function(req, res) {
    res.render('index', {message: ''})
})

app.get('/quotes', function(req,res){
    Quote.find({}).sort('-date').exec(function(err, quotes){
        if(err){
            console.log('HELP ME')
        }
        else{
            res.render('quotes', {quotes:quotes})
        }
    })
})

app.post('/quotes', function(req,res){
    var quote = new Quote({name:req.body.name, quote:req.body.quote, created_at: new Date()})
    quote.save(function(err){
        if(err){
            var message = "This program could not take your quote please try again"
            res.render('index', {message:message})
        }
        else{
            res.redirect('/quotes')
        }
    })

})
 
app.listen(8000, function() {
    console.log("listening on port 8000");
})