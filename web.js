var fs = require('fs');
var inputfile = "index.html";
var indexBuffer;

fs.readFile(inputfile, function (err, data) {
  if (err) throw err;
  indexBuffer = new Buffer(data);
});

var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/resources'));

app.get('/', function(request, response) {
  response.send(indexBuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
