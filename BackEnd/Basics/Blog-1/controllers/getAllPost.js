const blogSchema=require("../models/blogModel");

exports.getAllPost=async(req,res)=>{
    try{
        const allPost=await blogSchema.find({});

        if(!allPost){
                return res.status(404).json({
                    success:false,
                    message:"No Data Found !"
                })
        }


        res.status(200).json({
            success:true,
            data:allPost,
            message:"ALL POSTS GOT SUCCESSFULLY"
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

