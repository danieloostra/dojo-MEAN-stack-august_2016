var http = require('http');

var fs = require('fs');

var server = http.createServer(function(request, response) {

    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars/new') {
        fs.readFile('./cars/new/newcar.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === 'stylesheet/styles.css') {
        fs.readFile('./styles/styles.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'text/css'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/car1.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car1.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/car2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car2.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpeg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/car3.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car3.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/car4.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/car4.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/hb2.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/hb2.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/hb3.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/hb3.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/hb5.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/hb5.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    } else if (request.url === '/images/hb6.jpeg') {
        // notice we won't include the utf8 encoding
        fs.readFile('./images/hb6.jpeg', function(errors, contents) {
            response.writeHead(200, {
                'Content-type': 'image/jpg'
            });
            response.write(contents);
            response.end();
        })
    }
    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");