var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app)

// console.log(app)
// require("./server/config/routes.js")(app);

app.listen('8000', function(){"listening on 8000"})
