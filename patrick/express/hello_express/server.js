//load the express module
var express = require('express');
//invokes var express and stores in var app
var app = express();
//handles root route '/' and responds with 'hello express'
app.get('/', function(request, response) {
  response.send('<h1>Hello Express</h1)');
});
app.use(express.static(__dirname + '/static'));
console.log(__dirname);
//sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
//sets the vies engine to use ejs
app.set('views engine', 'ejs');
//tells the expres app to listen on port XXXX
app.listen(8000, function() {
  console.log('listening on port 8000');
});
//that's it!
//well... i still need to install express

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
});
