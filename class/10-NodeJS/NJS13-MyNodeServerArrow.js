
// We can create our own custmize Server in NodeJS
// >npm install -g nodemon
//  for run our server use below command 
//  >nodemon NJS12-MyNodeServer.js
// goto browser and past  below  url :
// node  
//   http://localhost:9000/
// if stop server Ctr +c 

// require module  : http
const myhttp = require("http");
// Create Server 
const myserver = myhttp.createServer((req,res)=> {
   
    res.end("Hello form Server is Running  :  : RAM");        
})
// create portno and server running 
myserver.listen(9000,"127.0.0.1",()=>{
    console.log("Hello form Server is Running  on Port 9000 cccc : RAM");
})

// for running server we have copy  : http://localhost:9000/