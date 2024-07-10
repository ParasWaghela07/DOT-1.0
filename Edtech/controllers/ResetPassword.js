const userSchema=require('../models/User');
const mailSender=require('../utils/mailSender');
const bcrypt=require('bcrypt');

exports.resetPasswordToken=async(req,res)=>{
    try{
        const email=req.body.email;
    const user=await userSchema.findOne({email:email});
    if(!user){
         return res.json({
            success:false,
            message:"Email is not registered"
         })
    }

    const token=crypto.randomUUI();
    const updatedDetails=await userSchema.findOneAndUpdate({email:email},
        {
            token:token,
            resetPasswordExpires:Date.now()+5*60*1000
        },
        {new:true}
    )

    const url=`http://localhost:3000/update-password/${token}`

    await mailSender(email,"Password Reset Link",`Password reset link:${url}`)

    return res.json({
        success:true,
        message:"Email sent successfully , check mailbox"
    })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:'Somethinf went wrong during resetpwd token'
        })
    }
}

exports.resetPassword=async(req,res)=>{
    try{
        const {password,confirmPassword,token}=req.body;
        if(password!==confirmPassword){
            return res.json({
                success:false,
                message:"Password and confirm password is not matching"
            })
        }

        const userDetails=await userSchema.findOne({token:token});
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is invalid"
            })
        }

        if(userDetails.resetPasswordExpires < Date.now()){
            return res.json({
                success:false,
                message:"Token is expired "
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);

        await userSchema.findByIdAndUpdate({token:token},{
            token:token,
            password:hashedPassword,
        },{new:true});

        return res.status(200).json({
            success:true,
            message:"Password reset successfully"
        })


    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Something went during resetpwd"
        })
    }
}