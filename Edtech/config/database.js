const mongoose=require('mongoose');
require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODBURL)
    .then(()=>{
        console.log("DB CONNECTED SUCCESSFULLY")
    })
    .catch((e)=>{
        console.log("DB CONNECTION FAILED")
        console.error(e);
        process.exit(1);
    })
}

