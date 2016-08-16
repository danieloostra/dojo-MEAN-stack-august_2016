console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){
	app.post('/login', users.login);
	app.post('/register', users.register);
}