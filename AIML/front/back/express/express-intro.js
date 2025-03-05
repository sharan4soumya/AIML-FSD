// const express = require('express');
import express from 'express';
const app = express();
const port = 3000;
// app.get('/',(req,res)=>{
//     res.send("<h1>Welcome to Express</h1>");
// });
app.use(express.json());

app.post('/',(req,res)=>{
    res.send("<h1>Welcome to Express</h1>");
});

app.post('/users',(req,res)=>{
    //const data = req.body;
    const {name} = req.body;
    res.send(`My name is ${name}`);
});

// app.get('/api/:name/:rollno',(req,res)=>{
//     try{
// const { name, rollno} = req.params;
// res.send(Welcome ${name} and your roll no. is: ${rollno})
//     } catch(error){
//         console.log(Error is: ${error.message});
//     }
// });

// http://localhost:3000/api/tanishka/174


// app.get('/api',(req,res)=>{
//     const {name,rollno} = req.query;
//     res.send(Welcome to abes: ${name} and Roll no. id ${rollno});
// });
// http://localhost:3000/api?name=rajesh&rollno=214

/*app.get('/api',(req,res)=>{
    // const {name = "Guest",rollno = 100} = req.query;
    const {name,rollno}= req.query;
    if(!name){
        return res.status(400).send("Name is required");
    }
    else{
        res.send(Welcome to abes: ${name} and Roll no. id ${rollno});       
    }
});*/

// app.get('/api',(req,res)=>{
//     // const {name = "Guest",rollno = 100} = req.query;
//     const {name,rollno}= req.query;
 

//     try {
//         if(!name){
//             return res.status(400).send("Name is required");
//         }
//         else{
//             res.send(Welcome to abes: ${name} and Roll no. id ${rollno});       
//         }
//     } catch (error) {
//         console.log(Error: ${error.message})
//     }
// });

app.listen(port,()=>{
    console.log(`Server is running on port  ${port}`);
});
