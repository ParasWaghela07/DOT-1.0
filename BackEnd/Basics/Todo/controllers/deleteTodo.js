const todo=require("../models/todo");

exports.deleteTodo=async(req,res)=>{
    try{
         const {id}=req.params;
         await todo.findOneAndDelete(id);

         res.json({
            success:true,
            message:"Todo Deleted"
         })

    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success:false,
            error:e.message,
            message:"Server error"
        })
    }
}