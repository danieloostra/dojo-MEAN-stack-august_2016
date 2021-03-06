console.log('routes')
var friends = require('../controllers/friends.js');

module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id/edit', friends.edit);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.post('/friends/:id', friends.update);
  app.get('/friends/delete/:id', friends.delete);
}