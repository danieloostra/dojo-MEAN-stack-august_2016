
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});

var count = 0

var io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket){
    socket.on('epic_click', function(){
        count++;
        console.log(count);
        io.emit('count', {count: count })
    })
    socket.on('reset_click', function(){
        count = 0;
        console.log(count);
        io.emit('count', {count: count })
    })
    socket.on('initialize', function(){
        io.emit('count', {count: count })
    })
})
