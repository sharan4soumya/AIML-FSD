const http = require('http');
const axios = require('axios');
const port = 3002;
const server=http.createServer(async (req, res)=>{
    console.log('Hello!');
    res.writeHead(200,{"Content-Type":"text/html"});
    fetch("https://api.github.com/users")
    // const response = await fetch("https://dummyjson.com/products")
    // data = await response.json();
    const response = await axios.get("https://api.github.com/users")
    const productsdata = response.data;
    let frontdata = `<html><head></head><body>`
    productsdata.forEach((data)=> {
        frontdata+=`<div><img src="${data.avatar_url}"></div>`
    });
    frontdata+=`</body></html>`;
    res.end(frontdata);
});
server.listen(port,()=>{
    console.log(`Server is listening on port${port}`);
});