
var customers = require('../controllers/customers.js')

console.log('now inside the routes.js file');
module.exports = function(app){

  app.post('/getuser', customers.login)
  app.post('/register', customers.register)
}
