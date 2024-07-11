const userSchema=require('../models/user');
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

require('dotenv').config();

exports.login=async function(req,res){
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.json({
                success:false,
                message:"PLEASE FILL ALL DETAILS !"
            })
        }

        const exist=await userSchema.findOne({email});

       if(!exist){
            return res.json({
                success:false,
                message:"USER DOES NOT EXIST"
            })
        }
        const payload={
            id:exist._id,
            email:exist.email
        }

        if(await bcrypt.compare(password,exist.password) ){
            

            let token=jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2hr"});

            const options={
                expires:new Date(Date.now() + 20*1000),
                httpOnly:true
            }

            // console.log("JUST AFTER CREATING TOKEN :-");
            // console.log("TOKEN ---> ",token);

            // res.cookie("token",token).json({
            //     success:true,
            //     message:"LOGIN DONE SUCCESSFULLY",
            //     token
            // })

            res.cookie('token', token, {
                httpOnly: true,
                secure: false, // Set to true if using HTTPS
                sameSite: 'Lax', // Adjust as necessary
                path: '/', // Cookie accessible across all paths
                expires:new Date(Date.now() + 24*60*60*1000),
            });
            

             return res.status(200).json({
                success:true,
                message:"LOGIN DONE SUCCESSFULLY",
                token,
                email
            })
              
        }
        else{
            return res.json({
                success:false,
                message:"INCORRECT PASSWORD"
            })
        }
    }
    catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }

}