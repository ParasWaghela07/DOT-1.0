const postSchema=require('../models/postSchema');
const likeSchema=require('../models/likeSchema');

exports.like=async function(req,res){
    try{
        const {post,user}=req.body;

        const newLike=new likeSchema({
            post,user
        })

        const likeresponse=await newLike.save();

        const updatedPost=await postSchema.findByIdAndUpdate(post,{$push:{like:likeresponse._id}},{new:true}).populate("like").exec();

        res.json({
            success:true,
            data:updatedPost
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

exports.unlike=async function(req,res){
    try{
        const {postid,likeid}=req.body;

        const deletedLike=await likeSchema.findByIdAndDelete(likeid);

        const updatedPost=await postSchema.findByIdAndUpdate(postid,{$pull:{like:likeid}},{new:true}).populate("like").exec();

        res.json({
            success:true,
            data:updatedPost
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}