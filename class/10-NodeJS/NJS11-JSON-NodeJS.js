// JSON DATA wirte 
const myfs=require("fs");
const bioData = {
    name :"Rajesh",
    age :24,
    skill : "NodeJS Programmer"
}
console.log(bioData);
/*
JSON.stringify(bioData)
Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
@param value — A JavaScript value, usually an object or array, to be converted.
*/

 var myData = JSON.stringify(bioData);

 console.log("HH",myData)

myfs.writeFile("myjsondata9.json",myData,(err)=>{
   console.log("Process Completed");
});



