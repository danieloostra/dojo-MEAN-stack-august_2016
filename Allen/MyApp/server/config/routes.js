
// WE NEED TO ADD a few lines of code up here!
// What is this 'friends' object we are referencing below??
var friends = require("../controllers/friends.js");


module.exports = function(app){
  console.log("i am running once i am required")
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.post('/friends/:id', friends.edit);

  app.delete('/friends/:id', friends.delete);
}
