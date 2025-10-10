
const myfs=require("fs");
const data = myfs.readFileSync("CURD/myinfo.txt","utf-8");

console.log(data);
/*
   // no such file or directory, Error no file are there
  myfs.readFile("CURD/myinfo1.txt","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
  });  */

