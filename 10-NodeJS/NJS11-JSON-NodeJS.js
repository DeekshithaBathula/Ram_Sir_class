//JSON DATA write
const myfs=require("fs");
const bioData={
    name:"Deeksha",
    age:21,
    city:"Khammam"
}
console.log(bioData);
/*
JSON.stringify() method converts a JavaScript object or value to a JSON string
@param value : A JavaScript value, usually an object or array, to be converted.
*/
var myData=JSON.stringify(bioData);
console.log(myData);
myfs.writeFileSync("myjsondata.json",myData,(err)=>{
    console.log("File created");
});