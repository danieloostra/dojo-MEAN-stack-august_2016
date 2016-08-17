console.log('routes')
var wall = require('../controllers/users.js');
module.exports = function(app){
	app.post('/login', wall.login);
	app.get('/getmess', wall.getmess);
	app.post('/postmess', wall.postmess);
	app.post('/postcomm', wall.postcomm);
}