const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect("mongodb+srv://parasw:vhnksO34XV3BfWb5@cluster0.rvu1xkc.mongodb.net/fileUploadDB")
    .then(console.log("DB Connection Successful"))
    .catch(  (error) => {
        console.log("DB Connection Issues");
        console.error(error);
        process.exit(1);
    } );
};

module.exports=dbConnect;