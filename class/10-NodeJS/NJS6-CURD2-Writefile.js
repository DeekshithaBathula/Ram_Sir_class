// CURD Operations using FS Module
// C = Create
// U = Update
// R = Retrive
// D = Delete 

//#2. Create a file in it name "myinfo.txt" and add data into CURD/myinfo.txt
const myfs=require("fs");
myfs.writeFileSync("CURD/myinfo.txt"," This is file to CURD Data ")