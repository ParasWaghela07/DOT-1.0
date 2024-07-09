const blogSchema=require("../models/blogModel")

exports.likePost=async(req,res)=>{
    try{
        const {id}=req.params;
        const updatedOne=await blogSchema.findOneAndUpdate(
            {_id:id},
            {like:true}
        )

        res.status(200).json({
            success:true,
            data:updatedOne,
            message:"Updated like"
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