const express=require('express');
const app=express();

require('dotenv').config();
const PORT=process.env.PORT ||4000;


//middleware
app.use(express.json());


const router=require('./routes/router');
app.use(router);

const dbConnect=require('./config/database');
dbConnect();


app.listen(PORT,()=>{
    console.log(`SERVER STARTED ON ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World</h1>`)
})