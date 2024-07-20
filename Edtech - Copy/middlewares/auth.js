const jwt=require('jsonwebtoken');
const userSchema=require('../models/User');

exports.auth=async(req,res,next)=>{
    try{
        const token=req.cookies.token||req.body.token||req.header('Authorisation').replace("Bearer","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Missing"
            })
        }

        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user=decode
        }
        catch(e){
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }

        next();
    }
    catch(e){
        return res.status(401).json({
            success:false,
            message:"Error occured while fetching token"
        })
    }
}

exports.isStudent=async(req,res,next)=>{
    try{
        // const user=await userSchema.findOne({email});
        //now we can use user.accountType for validate role

        if(req.user.accoutType!=="Student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Student only"
            })
        }

        next();
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}

exports.isInstructor=async(req,res,next)=>{
    try{
        // const user=await userSchema.findOne({email});
        //now we can use user.accountType for validate role

        if(req.user.accoutType!=="Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Instructor only"
            })
        }
        next();
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}

exports.isAdmin=async(req,res,next)=>{
    try{
        // const user=await userSchema.findOne({email});
        //now we can use user.accountType for validate role

        if(req.user.accoutType!=="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for Admin only"
            })
        }
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"User role cannot be verified"
        })
    }
}