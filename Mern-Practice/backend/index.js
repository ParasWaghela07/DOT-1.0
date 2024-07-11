// const express=require('express');
// const dbConnect=require('./config/database');
// const app=express();
// const router=require('./routes/router');


// app.use(router);
// app.use(express.json());



// require('dotenv').config();
// const PORT=process.env.PORT;

// app.listen(PORT,()=>{
//     console.log("APP IS RUNNING")
// })

// dbConnect();


const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/router");
const app = express();
var cors = require("cors");
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

app.use(userRoutes);

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});


