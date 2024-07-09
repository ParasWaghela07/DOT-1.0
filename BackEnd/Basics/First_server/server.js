const express=require('express');
const app=express();

//to use parser (for POST AND PUT) body ka data fetch krne k lie
const bodyParser=require('body-parser');

//speciically parse json data and add to the req ki body
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("server started at port no. 3000")
})

app.get('/',(req,res)=>{
    res.send("Hello Jee !");
})

app.post('/api/cars',(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted successfully")
})

const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection to db by mongoose successful")
})
.catch((error)=>{
    console.log("Error occured during connecting to db by mongoose")
});