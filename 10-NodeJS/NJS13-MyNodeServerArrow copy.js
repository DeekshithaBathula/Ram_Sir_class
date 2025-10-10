// require module:http
const myhttp = require('http');
// create server
const myserver = myhttp.createServer((req, res) => {
    res.end("Hello Node Server ::Deeksha");
});
// Create portnumber and server running
myserver.listen(9000, "127.0.0.1", () => {
    console.log("Node server running at port 9000");
});
//for running server we have copy:http://localhost:9000/ in browser