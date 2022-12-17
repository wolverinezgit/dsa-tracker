const express=require("express");
const mongoose=require("mongoose")
const app=express();
const cors=require("cors")
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get("/",(req,res)=>{res.send("Hi")});
app.post("/",(req,res)=>{

    console.log(req.body);
});
app.get("/delete",(req,res)=>{


    res.send("this will delete");
})
app.get("all",(req,res)=>{

    res.send("get all");
})
app.listen(3000)
