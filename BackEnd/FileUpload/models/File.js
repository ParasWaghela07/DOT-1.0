const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

require('dotenv').config();
const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//post middleware
fileSchema.post("save", async function(doc) {
    try{
        console.log("DOC",doc)

        //transporter 
        //TODO: shift this configuration under /config folder
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
             user: 'paraswaghela777@gmail.com',
             pass: 'op7',
            },
           });

        //send mail 
        let info = await transporter.sendMail({
            from:`DUmmy Org`,
            to: doc.email,
            subject: "New File Uploaded on Cloudinary",
            html:`<h2>Hello Jee</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a> </p>`,
        })
        
        console.log("INFO", info);


    }
    catch(error) {
        console.error(error);
    }
})

const File = mongoose.model("File", fileSchema);
module.exports = File;