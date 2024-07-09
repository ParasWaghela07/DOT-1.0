const blogSchema=require("../models/blogModel");

exports.getPost=async(req,res)=>{
    try{
        const {id}=req.params;
        const onePost=await blogSchema.findById(id);

        if(!onePost){
                return res.status(404).json({
                    success:false,
                    message:"No Data Found !"
                })
        }


        res.status(200).json({
            success:true,
            data:onePost,
            message:"POST GOT SUCCESSFULLY"
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

