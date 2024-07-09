const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    like:{
        type:Boolean,
        required:true,
        default:false
    },
    comment:{
        type:String,
        required:true,
        default:""
    }
})

module.exports=mongoose.model("blogSchema",blogSchema);