var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request: ', request.url);

	if (request.url ==='/') {
		fs.readFile('views/index.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/cars') {
		fs.readFile('views/cars.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/cats') {
		fs.readFile('views/cats.html', 'utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/cars/new') {
		fs.readFile('views/newcar.html','utf8', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/images/crapcar1.jpg') {
		fs.readFile('./images/crapcar1.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/images/crapcar2.jpg') {
		fs.readFile('./images/crapcar2.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/images/crapcar3.jpg') {
		fs.readFile('./images/crapcar3.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/images/cat1.jpg') {
		fs.readFile('./images/cat1.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/images/cat2.jpg') {
		fs.readFile('./images/cat2.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if (request.url ==='/images/cat3.jpg') {
		fs.readFile('./images/cat3.jpg', function (errors, contents){
			response.writeHead(200, {'Content-Type': 'image/jpg'});
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
server.listen(6789);