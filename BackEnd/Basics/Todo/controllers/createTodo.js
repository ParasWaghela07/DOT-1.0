const todo=require("../models/todo");

exports.createTodo= async(req,res)=>{
    try{
        const {title,description}=req.body;

        const response=await todo.create({title,description});

        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'

            }
        )
    }
    catch(e){
        console.error(e);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:e.message
        })
    }
}
