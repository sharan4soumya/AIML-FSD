const fs = require('fs/promises');
const read = async()=>{
     //const data = await fs.readFile("./data.txt", "utf-8");
     //console.log(data)
     try {
        const data = await fs.readFile("./data.txt", "utf-8");
     console.log(data)
     } catch (error) {
        console.log(error.message)
     }
}
const write = async()=>{
    //const data = await fs.readFile("./data.txt", "utf-8");
    //console.log(data)
    try {
        await fs.writeFile("./data2.txt","This is my new file", "utf-8");
    } catch (error) {
       console.log(error.message)
    }
}
read();
write();