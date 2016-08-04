// it seems to me that i'm taking all of the syntax from app.js
// and moving it over to static.js
// pretty sure that's not the point of this exercise

var fs = require('fs');
module.exports = {
	request: function(request, response) {
		console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^YOU MADE IT TO STATIC.JS');
		if(request.url === '/') {
			console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&YOURE A WIZARD HARRY!');
			// .get('/', function(request, response) {
			// 	response.send('hello')
			// })
			fs.readFile('./views/index.html', 'utf8', function(errors, contents){
			response.write(contents);
			response.end();
			});
		}
		else {
			console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&STAHHHHHHHP!');
			fs.readFile('./views/error.html', 'utf8', function(errors, contents){
			response.write(contents);
			response.end();
			});
		}
	}
};
