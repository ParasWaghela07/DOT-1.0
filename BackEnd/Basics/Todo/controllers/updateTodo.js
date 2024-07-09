const todo=require("../models/todo");

exports.updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;

        const updatedOne=await todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()}
        )

        res.status(200).json({
            success:true,
            data:updatedOne,
            message:"Updated successfully"
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