const myfs=require("fs");
myfs.writeFileSync("welcome.txt","Welcome Message"); 
const data=myfs.readFileSync("welcome.txt","utf-8");
console.log(data);