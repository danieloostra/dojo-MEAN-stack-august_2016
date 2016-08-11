
var express = require("express");
var path = require("path");
var session = require("express-session")


var app = express();
var bodyParser = require('body-parser');

app.use(session({secret: 'secret_key'}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {

 res.render("index");
	
})

var server=app.listen(8000, function() {
 console.log("listening on port 8000");
});

var users = []
var completehtml = ''
var io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket){
	
	socket.on('new_user', function(data){
		console.log(sess)		
		users.push({name: data.name, id: socket.id});
		socket.emit('initialize', {html: completehtml});	
		io.emit('add_user',{user: data.name, users: users} )
	})

	socket.on('sent_message', function(data){
		var name;
		for (var i = 0; i < users.length; i++){
			if(users[i].id == socket.id){
				name = users[i].name
			}
		}
		io.emit('new_message', {message: data.message, name: name})
	})

	socket.on('html', function(data){
		completehtml = data.html 
		
	})
})