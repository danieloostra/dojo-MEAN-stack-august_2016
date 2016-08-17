var express = require('express'),
    path = require('path'),
    root = __dirname,
    app = express();
console.log(path.join(root, 'client'));

app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));
// console.log(app)

app.listen('8000', function(){"listening on 8000"})
