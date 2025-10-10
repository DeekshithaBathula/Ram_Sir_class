// C = Create
// U = Update
// R = Retrive
// D = Delete 

//#2. Read  a file data without getting the buffer toString()

const myfs=require("fs");

const data = myfs.readFileSync("CURD/myinfo.txt","utf-8");
console.log(data);