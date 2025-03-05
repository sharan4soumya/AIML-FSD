import express from 'express';
const users=[{
    id: 1,
    name: 'Soumya',
    email: 'soumya@abes.ac.in'
}]
const app = express();
const port =3001;
app.get("/",(req, res)=>{
    res.send("Welcome to my API");
});
app.get("/api",(req, res)=>{
    res.send("Welcome to my API");
});
//app.use(express.text())//Buit in middle ware
app.use(express.json())
app.post("/api/users",(req, res)=>{
    const bodydata = req.body;
    console.log(bodydata);
    res.send("Data recieved successfully!");
});
app.post("/api/createuser",(req, res)=>{
    const{name, email} = req.body;
    const newid = users.length>0 ? users[users.length - 1].id + 1 : 1;
    users.push({id:newid, name, email});
    res.send(201).send("User Created Successfully");
})
app.get("/get/users/:id",(req, res)=>{
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    req.params;
    res.send(users);
});
app.listen(port, ()=>{
    console.log(`Server is running on port${port}`);
});