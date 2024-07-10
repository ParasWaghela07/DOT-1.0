const mongoose=require('mongoose');
require('dotenv').config();

const dbConnect=()=>{
    mongoose.connect(process.env.dbUrl)
    .then(()=>{
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    })
    .catch(()=>{
        console.log("DATABASE CONNECTION FAILED")
    })
}

module.exports=dbConnect;