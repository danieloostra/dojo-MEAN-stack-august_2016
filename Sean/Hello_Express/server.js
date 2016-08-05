var express = require("express")
var app = express();
var bodyParser = require('body-parser')
console.log(bodyParser)


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())


app.get('/', function(request, response){
	response.send("<h1>Hello Express</h1>")
})

app.get("/users", function(request,response){

	var users_array = [
		{name: "Michael", email: "michael@codingdojo.com"},
		{name: "Jay", email: "jay@codingdojo.com"},
		{name: "Brendan", email: "brendan@codingdojo.com"},
		{name: "Andrew", email: "andrew@codingdojo.com"}
	];

	response.render('users', {users:users_array})
})

app.get("/users/:fatty", function (req, res){
    console.log("The user id requested is:", req.params.fatty);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.fatty);
    // code to get user from db goes here, etc...
});

app.post('/freedom', function(request,response){
	console.log('POst Data', request.body)
	console.log(request.body.name)
	response.redirect('/')
})

app.use(express.static(__dirname + "/static"));
console.log(__dirname)

app.listen(8000, function() {
	console.log("listening on port 8000")
})