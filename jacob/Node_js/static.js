module.exports = function(){
	return{
		fetch: function(request, response){
			var fs = require('fs');

			if (request.url ==='/') {
				fs.readFile('views/index.html', 'utf8', function (errors, contents){
					response.writeHead(200, {'Content-Type': 'text/html'});
					response.write(contents);
					response.end();
				});
			}
			else if (request.url.substr(0,6) === '/main/'){
				var path = request.url.substr(6);
				fs.readFile('/main/'+path+'.html', 'utf8', function(errors, contents){
					response.writeHead(200, {'Content-Type': 'text/html'});
					response.write(contents);
					response.end();
				});
			}
			else if (request.url.substr(0,8)==='/images/'){
				var path = request.url.substr(8);
				fs.readFile('./images/'+path+'.html', function(errors, contents){
					response.writeHead(200, {'Content-Type': 'image/jpg'});
					response.write(contents);
					response.end();
				});
			}
			else if (request.url.substr(0,13)==='/stylesheets/'){
				var path = request.url.substr(13);
				fs.readFile('./stylesheets/'+path+'.css', function(errors, contents){
					response.writeHead(200, {'Content-Type': 'text/css'});
					response.write(contents);
					response.end();
				});
			}
			else if (request.url.substr(0,9) ==='/scripts/'){
				var path = request.url.substr(9);
				fs.readFile('./scripts/'+path+'.js', function(errors, contents){
					response.writeHead(200, {'Content-Type': 'text/javascript'});
					response.write(contents);
					response.end();
				});
			}
			else { 
				fs.readFile('views/error.html', 'utf8', function (errors, contents){
					response.writeHead(404, {'Content-Type': 'text/html'});
					response.write(contents);
					response.end();
				});
			}		
		});
	}
}