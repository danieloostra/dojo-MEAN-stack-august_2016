var mongoose = require('mongoose');
var Users = require('./../controllers/users.js');
var Surveys = require('./../controllers/surveys.js')

module.exports = function(app){
    app.post('/login', Users.login);
    app.get('/dashboard', Surveys.show_all);
    app.post('/create', Surveys.add);
    app.get('/poll/:id', Surveys.show_one);
    app.delete('/delete/:id', Surveys.delete);
    app.put('/voteA/:id', Surveys.updateA);
    app.put('/voteB/:id', Surveys.updateB);
    app.put('/voteC/:id', Surveys.updateC);
    app.put('/voteD/:id', Surveys.updateD);
    app.get('/polls', Surveys.index)
};
