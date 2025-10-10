
// We can create our own custmize Server in NodeJS
// >npm install -g nodemon
//  for run our server use below command 
//  >nodemon NJS12-MyNodeServer.js
// goto browser and past  below  url : 
// or 
// node  NJS12-NodeServerWithotArrow.js
//   http://localhost:9000/
// if stop server Ctr +c 

// require module  : http
//

const myhttp = require("http");

// Create Server 
const myserver = myhttp.createServer(function(req, res) {
    res.end("Hello from Server is Running  :  : RAM");
});

// Create port number and server running 
myserver.listen(9000, "127.0.0.1", function() {
    console.log("Hello from Server is Running on Port 9000 cccc : RAM");
});
