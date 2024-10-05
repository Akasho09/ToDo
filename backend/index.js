const express = require ("express");
const {createtype} = require("./zod");
const { default: mongoose } = require('mongoose');
const app=express();
const zod= require("zod")
const {todos} = require("./database/db")
const cors = require ("cors")
app.use(express.json())
app.use(cors(
    {
        origin : "http://localhost:5173" //allow only origin to send requests directly to backend
    }
));
app.get("/todo" ,async (req,res)=>{
const data = await todos.find({});
res.json({ data })
})


app.post("/todo" , (req,res) => {
    const inputbody= req.body;
    const result=createtype.safeParse(inputbody);
    if(!result.success){
        res.status(411).json(result)
    }
    else{
const newtodo= new todos (inputbody);
newtodo.save().then(()=>{
    res.status(200).json("Added Todo")
})
}
})


app.put("/completed" , (req,res) => {
const id= req.body.id;
todos.updateOne({
    _id:id
},{
    "Completed": true
})
.then(()=>{
    res.send("updated")
})
})

app.listen(3000, ()=>{
    console.log("server started")
})