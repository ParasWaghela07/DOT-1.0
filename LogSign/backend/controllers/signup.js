
const userSchema=require('../models/user');
const bcrypt = require("bcrypt");


exports.signup=async function(req,res){
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.json({
                success:false,
                message:"PLEASE FILL ALL DETAILS !"
            })
        }

        const exist=await userSchema.findOne({email});

        

        if(exist){
            return res.json({
                success:false,
                message:"USER ALREADY EXIST"
            })
        }

        let hashedPass;
        try{
            hashedPass=await bcrypt.hash(password,10);
        }
        catch(e){
            return res.status(500).json({
                success:false,
                message:'Error inn hashing Password',
            });
        }

    
        const response=await userSchema.create({
            email,password:hashedPass
        })

        res.json({
            success:true,
            message:"ENTRY CREATED IN DB SUCCESSFULLY",
            data:response
        })
    }
    catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }

}