const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.auth=(req,res,next)=>{
    try{
        console.log("after cookie")
        console.log(req.cookies);
        let token=req.cookies.token;
        console.log(token);

        if(!req.cookies){
            return res.json({
                success:false,
                message:"HATT"
            })
        }

        console.log("YAHA TAK SAB SEXY")

        try{
            const payload=jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);
            req.user=payload;
        }
        catch(e){
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        console.log("naacho naacho")
        next();
    }
    catch(e){
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
    }
}