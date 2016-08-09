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
        fs.readFile('/views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/cars/new") {
        fs.readFile('views/addcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/images/panther.jpg") {
        fs.readFile('images/panther.jpg', function (errors, contents){
            response.writeHead(200, {'content-type': 'images/jpg'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/images/savcat.jpg") {
        fs.readFile('images/savcat.jpg', function (errors, contents){
            response.writeHead(200, {'content-type': 'images/jpg'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/images/rainbow.jpg") {
        fs.readFile('images/rainbow.jpg', function (errors, contents){
            response.writeHead(200, {'content-type': 'images/jpg'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/images/car.jpg") {
        fs.readFile('images/car.jpg', function (errors, contents){
            response.writeHead(200, {'content-type': 'images/jpg'})
            response.write(contents)
            response.end()
        })
    }else if (request.url === "/stylesheets/styles.css") {
        fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'content-type': 'text/html'})
            response.write(contents)
            response.end()
        })
    } else{
        response.end()
    }

    //      fs.readFile('views/cars.html','utf8', function (errors, contents){
    //          response.writeHead(200, {'Content-type': 'text/html'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if (request.url === "/cats") {
    //      fs.readFile('views/cats.html','utf8', function (errors, contents){
    //          response.writeHead(200, {'Content-type': 'text/html'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if (request.url === "/cars/new") {
    //      fs.readFile('views/addcar.html', 'utf8', function (errors, contents){
    //          response.writeHead(200, {'Content-type': 'text/html'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if (request.url === "/images/car.jpg") {
    //     fs.readFile('./images/car.jpg', function (errors, contents){
    //          response.writeHead(200, {'Content-type': 'image/jpg'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if (request.url === "/images/rainbow.jpg") {
    //      fs.readFile('./images/rainbow.jpg', function (errors, contents){
    //          response.writeHead(200, {'Content-type': 'image/jpg'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if (request.url === "/images/savcat.jpg") {
    //     console.log("got here")
    //      fs.readFile('./images/savcat.jpg', function (errors, contents){
    //          response.writeHead(200, {'Content-type': 'image/jpg'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }else if (request.url === "/images/panther.jpg") {
    //     console.log("here")
    //      fs.readFile('/images/panther.jpg', function (errors, contents){
    //          console.log(contents)
    //          response.writeHead(200, {'Content-type': 'image/jpg'});
    //          response.write(contents);
    //          response.end();
    //      });
    // }
    // else if(request.url === '/stylesheets/style.css'){
    //     fs.readFile('./styles/style.css', 'utf8', function(errors, contents){
    //         response.writeHead(200, {'Content-type': 'text/css'});
    //         response.write(contents);
    //         response.end();
    //      });
    // }
    //
    // else {
    //     response.end('File not found!!!');
    // }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
