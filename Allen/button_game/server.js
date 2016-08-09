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

// app.post('/show', function(request, response){
//   console.log(request.body);
//   response.render('results', {data: request.body})
// });

var server = app.listen('8000', function(){
  console.log('listening on 8000');
});

var io = require('socket.io').listen(server)

var count = 0;
io.sockets.on('connection', function(socket){
  socket.emit('start', {response: count});

  socket.on('butt_click', function(){
    count++
    io.emit('add_count', {response: count});
  });

  socket.on('reset_click', function(){
    count = 0;
    io.emit('delete_count', {response: count})
  });


  console.log("we are using sockets");
  console.log(socket.id);
});
//on is waiting for event from html
