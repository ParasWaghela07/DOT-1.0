const mongoose=require('mongoose');

require('dotenv').config();

function dbConnect(){
    mongoose.connect(process.env.URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(function(){
        console.log("DB connection is successful");
    })
    .catch(function(e){
        console.log("error occured during db connection")
        console.error(e)
    })
}

module.exports=dbConnect;