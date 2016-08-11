// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user

 app.post('/results', function (req, res){
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.render('results', {user: req.body})//req.body:holds dictionary from the form & user:variable which you correspond to the information
});
 // This is where we would add the user to the database
 // Then redirect to the root route
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket)){
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
}
