const blogSchema=require("../models/blogModel");

exports.createPost=async(req,res)=>{
    try{
        const {title,description}=req.body
        const response=await blogSchema.create({title,description});

        res.status(200).json({
            success:true,
            data:response,
            message:"POST CREATED SUCCESSFULLY"
        })
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success:false,
            data:"Server error",
            message:e.message
        })
    }
}

