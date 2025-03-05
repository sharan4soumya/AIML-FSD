const http = require('http');
const fspromises = require('fs/promises');
const server = http.createServer(async (req, res) =>{
    //res.statusCode=200;
    res.setHeader('Content-Type', 'text/html');
    if(req.method == 'GET' && req.url == '/about'){
        res.end("<h1>Hello World</h1>");
    }
    else if (req.url == '/homepage'){
        const a= await fspromises.readFile("./homepage.html");
        res.end(a)
    }
    else{
        const a = await fspromises.readFile("./error.html");
        res.end(a)
    }
//let data = ""
//users.forEach((user) =>{
    //data += user.name;
//});
    //res.end(a);
});
port=3001
server.listen(port, () =>{
    console.log(`Server is running on ${port}`)
});