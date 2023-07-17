// Create a web server that can respond to requests for /comments.json
// with a JSON-encoded array of comments, much like your server did in the
// previous homework.

var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 8080;

var server = http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  var comments = JSON.parse(fs.readFileSync('./comments.json', 'utf8'));

  if (path === '/comments.json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(port, function() {
  console.log('Listening on port ' + port);
});