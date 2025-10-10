const myfs=require("fs");
const data=myfs.readFileSync("CURD/myinfo.txt","utf-8");
console.log(data);
myfs.readFileSync("CURD/myinfo.txt1","utf-8",(err,data)=>{
    console.log(data);
    console.log(err);
});  // it will give error because file not found