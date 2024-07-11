const schema=require('../models/schema');

exports.getAllUser=async function(req,res){
    try{
        const response=await schema.find({});
        res.json({
            data:response
        })
    }
    catch(e){
        console.log(e);
    }
}