var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_quotes');

var QuotesSchema = new mongoose.Schema({
  name: String,
  quote: String
  },{timestamps: true});

mongoose.model('Quotes', QuotesSchema);
var Quotes = mongoose.model('Quotes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index')
});

app.post('/quotes', function(request, response){
  var quote = new Quotes({name: request.body.name, quote: request.body.quote});
  console.log(quote);
  quote.save(function(err){
    console.log(quote);
    if(err){
        console.log('something went wrong');
    } else{
        console.log('successfully added an animal');
        Quotes.find({}, function(err, quotes){
          if(err){
            console.log('something went wrong');
          } else {
            response.render('show', {info: quotes});
          }
        });
      };
  });
});


app.listen('8000', function(){
  console.log('listening on port 8000');
});
