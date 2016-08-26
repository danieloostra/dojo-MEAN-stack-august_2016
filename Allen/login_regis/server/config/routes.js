
var user = require('../controllers/users.js')

console.log('im in the routes');
module.exports = function(app){
  console.log('inside the function routes');
  app.post('/newUser', user.add);
  app.post('/getUser', user.check);

}
