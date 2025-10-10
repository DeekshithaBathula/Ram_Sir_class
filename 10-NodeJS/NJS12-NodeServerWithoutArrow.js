const myhttp = require('http');
//create server 
const server = myhttp.createServer(function(req, res)
{
    res.end("Hello Node Server ::Deekshita");
});
//Create portnumber and server run
server.listen(9009,"127.0.0.1",function(){
    console.log("Node server running at port 9009");
});