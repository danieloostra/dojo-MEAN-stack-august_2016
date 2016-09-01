var mongoose = require('mongoose');

var users = require('../controllers/users.js')
var messages = require('../controllers/messages.js')
var comments = require('../controllers/comments.js')
console.log('inside routes.js');

module.exports = function(app){
  app.post('/login', users.login)
  app.post('/message', messages.message)
  app.get('/getmessage', messages.getmessage)
  app.post('/comment', comments.usercomment)

}
