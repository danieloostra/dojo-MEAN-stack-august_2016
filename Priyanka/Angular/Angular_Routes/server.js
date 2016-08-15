var express = require('express'),
app = express(),
path = require('path');
// -------------------------------------------------------------------------------------------------------------------------------------

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));














// ----localhost route---------------------------------------------------------------------------------------------------------------------------------
app.listen(8000,function(){});

