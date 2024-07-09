const mongoose=require('mongoose');

require('dotenv').config();

function dbConnect(){
    mongoose.connect(process.env.URL)
    .then(()=>{
        console.log("DATABASE CONNECTED !")
    })
    .catch((e)=>{
        console.err(e);
    })

}
    
    module.exports=dbConnect;