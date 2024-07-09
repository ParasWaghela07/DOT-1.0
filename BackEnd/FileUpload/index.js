const express=require("express");
const app=express();

//middlewares
app.use(express.json());

const fileupload=require('express-fileupload')
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//db connection
const dbConnect=require('./config/database');
dbConnect();

//cloudinary connection
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//routes
const routes=require('./routes/FileUpload');
app.use(routes);


//activation
require('dotenv').config();
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`APP IS RUNNING ON ${PORT}`)
})
