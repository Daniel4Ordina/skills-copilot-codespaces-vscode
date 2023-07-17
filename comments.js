// Create a web server that can respond to requests for /comments.json with a JSON file containing a list of comments. Use the comments variable from the previous exercise.

// If a user requests any other path, respond with a 404 status code and the text "Not found."

// You can test your server by running node comments.js and visiting http://localhost:8080/comments.json in your browser or by using curl in the terminal.

// Hint: you can use JSON.stringify to convert an object to a JSON string.

// Hint: remember the Content-Type header!

// Hint: remember that you can set the status code with res.statusCode.

// Hint: you can use req.url and req.method to check the request path and method.

var http = require('http');
var fs = require('fs');
var port = 8080;
var comments = require('./comments.json');

var server = http.createServer(function(req, res) {
    if (req.url === '/comments.json') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(comments));
    } else if (req.url === '/') {
        fs.readFile('./public/index.html', 'UTF-8', function(err, html) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(html);
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('404 File Not Found');
    }
});

server.listen(port, function() {
    console.log('Server listening on: http://localhost:%s', port);
});