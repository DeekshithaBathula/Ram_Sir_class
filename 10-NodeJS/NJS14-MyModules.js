//Require the http module:
var http = require('http');
//Our custom module
var dt = require('./myModules'); //Import the myModules module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Use the custom module to get the date and time
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
    //server listen on port 8080
}).listen(8080);