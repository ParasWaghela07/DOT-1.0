const sectionSchema=require('../models/Section');
const courseSchema=require('../models/Course');

exports.createSection=async(req,res)=>{
    try{
        const {sectionName,courseId}=req.body;

        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"Missing Properties"
            })
        }

        const sectionDetails=await sectionSchema.create({sectionName})

        const courseDetails=await courseSchema.findByIdAndUpdate(courseId,{
            $push:{
                courseContent:sectionDetails._id
            }
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"Section added successfully"
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:e.message
        })
    }
}


exports.updateSection=async(req,res)=>{
    try{
        const {sectionName,sectionId}=req.body;

        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:"Missing Properties"
            })
        }

        const sectionDetails=await sectionSchema.findByIdAndUpdate(sectionId,{sectionName},{new:true});

        return res.status(200).json({
            success:true,
            message:"Section updated successfully"
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:e.message
        })
    }
}

exports.deleteSection=async(req,res)=>{
    try{
        const {sectionId}=req.params; //assuming that id is passed thru parameter

        if(!sectionId){
            return res.status(400).json({
                success:false,
                message:"Missing Properties"
            })
        }

        const sectionDetails=await sectionSchema.findByIdAndDelete(sectionId);

        return res.status(200).json({
            success:true,
            message:"Section deleted successfully"
        })
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:e.message
        })
    }
}