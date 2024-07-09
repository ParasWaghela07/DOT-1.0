const { default: mongoose } = require('mongoose');
const commentSchema=require('../models/commentSchema');
const postSchema=require('../models/postSchema');

exports.comment=async function (req,res){
    try{
        const {postid,user,cmt}=req.body;

        const newComment=new commentSchema({
            postid,user,cmt
        })

        const commentResponse=await newComment.save();

        const updatedPost=await postSchema.findByIdAndUpdate(postid,{$push:{comment:commentResponse._id}},{new:true}).populate("comment").exec();

        res.json({
            data:updatedPost
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

exports.uncomment=async function (req,res){
    try{
        const {postid,cmtid}=req.body;
        const deletedComment=await commentSchema.findByIdAndDelete(cmtid);

        const updatedPost=await postSchema.findByIdAndUpdate(postid,{$pull:{comment:cmtid}},{new:true}).populate("comment").exec();

        res.json({
            data:updatedPost
        })
    }
    catch(e){
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}