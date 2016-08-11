var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response){
  response.render('index')
});

app.post('/show', function(request, response){
  //response.render('result')
  console.log(request.body);
  response.render('results', {data: request.body})
});

app.listen('8000', function(){
  console.log('listening on 8000');
})
