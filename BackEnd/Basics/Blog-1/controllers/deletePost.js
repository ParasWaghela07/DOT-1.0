const blogSchema=require("../models/blogModel");

exports.deletePost=async(req,res)=>{
    try{
        const {id}=req.params;
        await blogSchema.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Deletion Completed"
        })
    }
    catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        })
    }
}