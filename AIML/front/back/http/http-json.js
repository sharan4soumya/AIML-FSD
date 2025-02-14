const http = require('http');
const fs = require('fs/promises');
//const users=[{
    //id:1,
    //name: 'Somu',
    //email: 'soumu@example.com',
//},{
    //id: 2,
    //name: 'Kattu',
    //email: 'kattu@example.com'
//},{
    //id: 3,
    //name: 'Anju',
    //email: 'anju@example.com'
//}]
const server = http.createServer(async (req, res) =>{
    //res.statusCode=200;
    //res.setHeader('Content-Type', 'text/plain');
    res.writeHead(200, {'Content-Type': 'application/json'});
    const jdata =  await fs.readFile("./aa.json", "utf-8");
    const users = JSON.parse(jdata)
//const data = users.map((user) =>{
   // return user.name;
//})
let data = ""
users.forEach((user) =>{
    data += user.name;
});
    res.end(JSON.stringify(users));
});
port=3000
server.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});