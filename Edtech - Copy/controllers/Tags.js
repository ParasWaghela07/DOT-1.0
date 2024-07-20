const tagSchema=require('../models/Tag');

exports.createTag=async(req,res)=>{
    try{
        const {name,description}=req.body;
    if(!name || !description){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }

    const tagDetails=await tagSchema.create({
        name:name,
        description:description
    })

    console.log(tagDetails);

    return res.status(200).json({
        success:true,
        message:"Tag created successfully"
    })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:e.message
        })
    }
}

exports.showallTags=async(req,res)=>{
    try{
        const allTags=await tagSchema.find({},{name:true,description:true});

        return res.status(200).json({
            success:true,
            message:"All tags returned successfully",
            allTags
        })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:e.message
        })
    }
}