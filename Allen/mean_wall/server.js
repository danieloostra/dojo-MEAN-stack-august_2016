var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    app = express();
    root = __dirname;

app.use(bodyParser.json());
app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')))

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen('7000', function(){'listening on 8000'})
