const http = require('http');
const axios = require('axios');
const port = 3001;
const server=http.createServer(async (req, res)=>{
    console.log('Hello from the server!');
    res.writeHead(200,{"Content-Type":"text/html"});
    fetch("https://dummyjson.com/products")
    // const response = await fetch("https://dummyjson.com/products")
    // data = await response.json();
    const response = await axios.get("https://dummyjson.com/products")
    const productsdata = response.data.products;
    let frontdata = `<html><head></head><body>`
    productsdata.forEach((products)=> {
        frontdata+=`<div><img src="${products.thumbnail}"></div>`
    });
    frontdata+=`</body></html>`;
    res.end(frontdata);
});
server.listen(port,()=>{
    console.log(`Server is listening on port${port}`);
});