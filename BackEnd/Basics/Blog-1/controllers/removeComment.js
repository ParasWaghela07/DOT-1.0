const blogSchema=require("../models/blogModel")

exports.removeComment=async(req,res)=>{
    try{
        const {id}=req.params;

        const updatedComment=await blogSchema.findByIdAndUpdate(
            {_id:id},
            {comment:""}
        )

        res.status(200).json({
            success:true,
            data:updatedComment,
            message:"Updated comment"
        })

    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success:false,
            error:e.message,
            message:"Server error"
        })
    }
}