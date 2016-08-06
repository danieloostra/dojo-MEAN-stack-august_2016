
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

app.post('/results', function(req, res) {
 	var user = {
 		name : req.body.name,
 		dojo : req.body.dojlocation,
 		lang : req.body.lang,
 		comment : req.body.comment,
 	}
 res.render("results", {user : user} );
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});