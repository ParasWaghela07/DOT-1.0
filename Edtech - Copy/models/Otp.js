const mongoose=require('mongoose');
const mailSender=require('../utils/mailSender');

const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60
    }

})

async function sendVerificationEmail(email,otp){
    try{
        const mailResponse=await mailSender(email,"Verification Email From StudyNotion",otp);
        console.log("Email sent successfully",mailResponse)
    }
    catch(e){
        console.log("Error occured during sending mail",e);
        throw e;
    }
}

otpSchema.pre("save",async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports=mongoose.model("otpSchema",otpSchema);