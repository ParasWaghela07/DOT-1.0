const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model('userSchema',userSchema);