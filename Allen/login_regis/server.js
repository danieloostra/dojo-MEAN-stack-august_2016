var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    app = express();
    root = __dirname;

// console.log(root);
// console.log("--------------------------------------------------------------");

app.use(bodyParser.json());
// console.log("--------------------------------------------------------------");
//
// console.log('what is within the app.use method');
// console.log(bodyParser.json());

app.use(express.static( path.join(root, './client')));
// console.log("--------------------------------------------------------------");
//
// console.log('whats inside the express.static method');
// console.log(express.static(root));
// console.log("--------------------------------------------------------------");

// console.log('whats inside the path.join method');
// console.log(path.join());
// console.log('whats inside the path.join(root)');
// console.log(path.join(root));

app.use(express.static( path.join(root, './bower_components')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

// console.log("what does require('./server/config/routes.js')(app); DOOO");
// console.log(require('./server/config/routes.js')(app));
// console.log("----2----------------------------------------------------------");

app.listen('8000', function(){'listening on 8000'})
