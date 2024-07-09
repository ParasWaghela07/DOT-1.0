const express=require('express');
const mongoose=require('mongoose');
const app=express();

require('dotenv').config();

const PORT=process.env.PORT;

app.use(express.json());

const BlogRoutes=require("./routes/BlogRoutes");

app.use(BlogRoutes);

app.listen(PORT,()=>{
    console.log(`APP IS RUNNING ON PORT ${PORT}`);
})

const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>THIS IS HOMEPAGE</h1>`);
})

