const express=require('express');
const app=express();
const cors=require('cors');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));



const dbConnect=require('./config/database');
dbConnect();

const router=require('./Routes/routes');
app.use(router);

require('dotenv').config();

const PORT=process.env.PORT || 4001;


app.listen(PORT,()=>{
    console.log(`APP IS RUNNING ON PORT ${PORT} `)
})