const userSchema=require('../models/User');
const otpSchema=require('../models/Otp');
const otpGenerator=require('otp-generator');
const profileSchema=require('../models/Profile');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

require('dotenv').config();

exports.sendOtp=async (req,res)=>{
    try{
        const {email}=req.body;

        const checkUserPresent=await userSchema.findOne({email});
    
        if(checkUserPresent){
            return res.status(401).json({
                success:false,
                message:"User Already Exist"
            })
        }

        //checking for unqiue OTP

        let otp=otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        })

        console.log("OTP GEN:-",otp);

        let oldOtpExist=await otpSchema.findOne({otp:otp});

        while(oldOtpExist){
            otp=otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            })

            oldOtpExist=await otpSchema.findOne({otp:otp});

        }

        //otp at this line will be unique

        const otpPayload={email,otp};

        //push otp in db
        const otpResponse=await otpSchema.create(otpPayload);
        console.log(otpResponse);

        res.status(200).json({
            success:true,
            message:"OTP sent successfully"
        })



    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            succcess:false,
            message:e.message
        })
    }
}

exports.signup=async(req,res)=>{
    try{
        const {firstName,lastName,email,password,confirmPassword,accountType,contactNumber,otp}=req.body;

    if(!firstName || !lastName || !email || !password || !confirmPassword || !otp){
        return res.status(403).json({
            success:false,
            message:"All fields are required"
        })
    }

    if(password!==confirmPassword){
        return res.status(400).json({
            success:false,
            message:"Password and Confirm password does not match !"
        })
    }

    const existingUser=await userSchema.findOne({email});
    if(existingUser){
        return res.status(400).json({
            success:false,
            message:"User is already registered"
        })
    }

    const recentOtp=await otpSchema.findOne({email}).sort({createdAt:-1}).limit(1);
    console.log(recentOtp);

    if(recentOtp.length==0){
        return res.status(400).json({
            success:false,
            message:"Otp not found"
        })
    }
    else if(otp!==recentOtp.otp){
        return res.status(400).json({
            success:false,
            message:"Invalid OTP"
        })
    }

    const hashedPassword=await bcrypt(password,10);

    const profile=await profileSchema.create({
        gender:null,
        dateofBirth:null,
        about:null,
        contactNumber:null
    })
    
    const user=await userSchema.create({
        firstName,lastName,email,contactNumber,password:hashedPassword,accountType,
        additionalDetails:profile._id,
        image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} 
        ${lastName}`
    })

    return res.status(200).json({
        success:true,
        message:"User Registered successfully",
        user
    })
    }
    catch(e){
        console.log(e)
        return res.status(500).json({
            success:false,
            message:"User cannot be registered , Please trya again"
        })
    }
}

exports.login=async (req,res)=>{
    try{
        const {email,password}=req.body;
     if(!email || !password){
        return res.status(403).json({
            success:false,
            message:"All fields are required"
        })
     }

     const user=await userSchema.findOne({email});

     if(!user){
        return res.status(401).json({
            success:false,
            message:"User is not registered"
        })
     }

     if(await bcrypt.compare(password,user.password)){
        const payload={
            email:user.email,
            accountType:user.accountType,
            id:user._id
        };
        const token=jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn:"2h"
        });

        user.token=token;
        user.password=undefined;

        const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true
        }

        res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"Logged In Successfully"
        })

     }
     else{
        return res.status(401).json({
            success:false,
            message:"Password is incorrect"
        })
     }
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Log in failed"
        })
    }
}