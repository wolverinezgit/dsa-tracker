const express=require("express");
const mongoose=require("mongoose")
const app=express();
const cors=require("cors")
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
mongoose.connect("mongodb+srv://user:user123@cluster0.wrpgaob.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("DB connected")).catch((error)=>{console.log(error)});




const schema=new mongoose.Schema({problemName:String,problemLink:String,tag:String,notes:String});
const Model=mongoose.model('Model',schema);

app.get("/",(req,res)=>{res.send("Hi")});
app.post("/",(req,res)=>{

    const {problemName,problemLink,tag,notes}=req.body;
    const newDocument=new Model({problemName,problemLink,tag,notes});
    newDocument.save((err)=>{if(err)console.log(err)})
const obj=req.body;
// problemName: 'dwqdq',
// problemLink: 'dwqwdqw',
// tag: 'Dynammic Programming',
// notes: 'dqwdqd'
// }


    
});
app.get("/delete",(req,res)=>{


    res.send("this will delete");
})
app.get("/all",(req,res)=>{

    res.send("get all");
})
app.listen(3000)
