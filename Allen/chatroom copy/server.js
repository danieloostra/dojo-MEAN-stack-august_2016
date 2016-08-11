var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
  response.render('index');
});

var server = app.listen('8000', function(){
  console.log('listening on 8000');
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

var person = {};
var messages= {};

console.log(person);
  socket.on('person', function(data){
    person = data.name;
    console.log(person);
    io.emit('person_chatting', {response: person})
  });

  socket.on('message', function(data){
    // console.log(data);
    messages = data.message
    io.emit('show_message', {response: data.message, name: person})
  });

});
