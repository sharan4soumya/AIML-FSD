//const fs = require('fs');
//const data = fs.readFileSync("./data.txt", "utf-8");
//console.log(data);
//fs.writeFileSync("data3.txt", "this is my first work" , "utf-8");
//fs.appendFileSync("./data1.txt", "work from another file", "utf-8");
//fs.renameSync("./data3.txt", "./data5.txt" );
//fs.unlinkSync("./data5.txt")

const fs = require('fs');
const data = fs.readFileSync("./data.txt", "utf-8");
console.log(data);
if(data.match("H")){
    console.log("H is found");
    const newdata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", newdata, "utf-8");
}