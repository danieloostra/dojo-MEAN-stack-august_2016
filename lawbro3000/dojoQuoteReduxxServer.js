var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotingReduxx');


QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
},{timestamps: true}
);
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote');


app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  Quote.find({}, function(err, quotes) {
      res.render('index');
  })
})

app.post('/showQuotes', function(req, res) {
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err) {
    // if(err) {
    //   console.log('please try again');
    // }
    // else {
    //   console.log('got quote');
      res.redirect('/');
      //}
    });
  });

app.get('/showQuotes', function(req, res){
  Quote.find().sort('-posted').find({},function(err, quotes){
    res.render('showQuotes',{quotes:quotes})
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
