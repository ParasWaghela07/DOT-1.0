const todo=require("../models/todo");

exports.getTodo=async(req,res)=>{
    try{
        const allTodos=await todo.find({});

        res.status(200)
        .json({
            success:true,
            data:allTodos,
            message:"Entire Todo Data is fetched"
        }
        )
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

exports.getTodobyId=async(req,res)=>{
    try{
        const id=req.params.id;
        const oneItem=await todo.findById({_id:id});

        if(!oneItem){
            return res.status(404).json({
                success:false,
                message:"No Data Found !"
            })
        }

        res.status(200).json({
            success:true,
            data:oneItem,
            message:"Data successfully fetched!"
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