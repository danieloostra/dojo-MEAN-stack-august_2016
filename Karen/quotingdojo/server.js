var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_dash');

var QuotesSchema = new mongoose.Schema({
    name: String,
    quote: String,
},{timestamps: true}
);

mongoose.model('Quote', QuotesSchema);
var Quote = mongoose.model('Quote');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.render('index')

});

app.get('/quotes', function(request, response){
    Quote.find({}, function(err, quote){
        console.log(quote);
        if(err){
            console.log("wrong");
        } else{
            response.render('quotes', {info: quote})
        }
    });
})



app.post('/quotes/add', function(request, response){
    var quote = new Quote({name: request.body.name, quote: request.body.quote});
    quote.save(function(err){
        if(err){
            console.log("something went wrong");
        } else {
            console.log('successfully added a new quote!')
            console.log(quote)
            response.redirect('/quotes')
        }
    });
});




app.listen('8000', function(){
    console.log("listening on port 8000")
})
