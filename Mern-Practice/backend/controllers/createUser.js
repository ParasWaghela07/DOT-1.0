const schema=require('../models/schema');

exports.createUser=async function(req,res){
    try{
        const {name,surename}=req.body;

        const newObj=new schema({
            name,surename
        })

        const response=await newObj.save();

        res.json({
            success:true,
            data:response
        })
    }
    catch(e){
        console.log(e);
    }
}