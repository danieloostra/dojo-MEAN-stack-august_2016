// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url == '/cars'){
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
    else if (request.url == '/cars/new'){
        fs.readFile('./views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
    else if (request.url == '/cats'){
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
    else if (request.url == '/stylesheets/new.css'){
        fs.readFile('./stylesheets/new.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
    else if (request.url == '/images/image1.jpg'){
        fs.readFile('./images/image1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
    else if (request.url == '/images/image2.jpg'){
        fs.readFile('./images/image2.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpeg'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
    else {
        fs.readFile('./views/404.html', 'utf8', function (errors, contents){
            response.writeHead(404, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end();
        });
    }
});
// tell your server which port to run on
server.listen(5000);
// print to terminal window
console.log("Running in localhost at port 5000");