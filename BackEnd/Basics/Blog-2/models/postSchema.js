const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"likeSchema"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"commentSchema"
    }]
})

module.exports=mongoose.model("postSchema",postSchema);