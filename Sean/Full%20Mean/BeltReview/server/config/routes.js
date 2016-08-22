console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){
	app.post('/login', users.login);
	app.get('/user/:id', users.getuser);
	app.get('/topic/:id', users.gettopic);
	app.get('/dashboard', users.dashboard);
	app.get('/getcat', users.getcat);
	app.post('/addcat', users.addcat);
	app.post('/addtopic', users.addtopic);
	app.post('/addpost', users.addpost);
	app.post('/addcomment', users.addcomment);
	app.get('/upvote/:id', users.upvote);
	app.get('/downvote/:id', users.downvote);
}