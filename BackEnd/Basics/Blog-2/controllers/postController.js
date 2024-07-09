const postSchema=require("../models/postSchema");

exports.createPost=async function (req,res){
    try{
        const {title,description}=req.body;

        const newPost= new postSchema({
            title,description
        })

        const response=await newPost.save();

        res.json({
            data:response
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
}

exports.getAllPosts=async function (req,res){
    try{
        const allPosts=await postSchema.find({}).populate("like").populate("comment").exec();

        res.json({
            data:allPosts
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}