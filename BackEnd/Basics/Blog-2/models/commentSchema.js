const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"postSchema"
    },
    user:{
        type:String,
        required:true
    },
    cmt:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("commentSchema",commentSchema);