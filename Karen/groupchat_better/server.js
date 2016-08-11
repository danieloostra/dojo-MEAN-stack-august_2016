var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
 res.render("index")
});

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});


var users = [];
var messages = [];

var is_user = function(user){
    var users_count = users.length;
    for (var i = 0; i < users_count; i++) {
        if (user == users[i]) {
            return true;
        }
    }
    return false;
}

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){

    socket.on('get_user', function(req){
        if(is_user(req.name) === true){
            io.emit("existing", {error:"This user already exists."})
        } else {
            users.push(req.name);
            io.emit('new_user', {new_user_name: req.name, messages: messages})
        }
    });
    socket.on('get_message', function(data){
        console.log(data.message);
        messages.push({name: data.user, message: data.message})
        io.emit('messages', {text: data.message, user: data.user})
    })


})
