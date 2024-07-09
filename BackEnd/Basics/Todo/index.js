const express=require('express');

const app=express();

require("dotenv").config();

const PORT=process.env.PORT||4000; //port number will come from env , if failed then 4000

//middleware to parse json request body
app.use(express.json());


//import routes for todo api

const todoRoutes=require("./routes/todos");

//mount todo api routes

app.use("/api/v1",todoRoutes);


//start server

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
})

//connect db

const dbConnect=require("./config/database");
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
})


