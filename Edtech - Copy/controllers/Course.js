const courseSchema=require('../models/Course');
const tagSchema=require('../models/Tag');
const userSchema=require('../models/User');
const {uploadImageToCloudinary}=require('../utils/imageUploader');

require('dotenv').config();

exports.createCourse=async(req,res)=>{
    try{
        const {courseName,courseDescription,whatYouWillLearn,price,tag}=req.body;

        const thumbnail=req.files.thumbnailImage;

        if(!courseName || !courseDescription ||!whatYouWillLearn ||!price ||!tag ||!thumbnail){
            return res.status(400).json({
                success:false,
                message:"All fields are madnatory"
            })
        }

        const userId=req.user.id; // ISKO HI  DIRECT USE KR SKTE , BIN FOKAT INSTRUCTOR TAG K LIE DB CALL MAAR RAHE
        // const instructorDetails=await userSchema.findById(userId);
        // console.log("instructor Details :- ",instructorDetails)

        // if(!instructorDetails){
        //     return res.status(404).json({
        //         success:false,
        //         message:"Instructor details not found"
        //     })
        // }

        // const tagDetails=await tagSchema.findById(tag);
        // console.log("Tag details:-",tagDetails);
        // if(!tagDetails){
        //     return res.status(404).json({
        //         success:false,
        //         message:"tagDetails details not found"
        //     })
        // }

        const thumbnailImage=await uploadImageToCloudinary(thumbnail,process.env.FOLDER_NAME);

        const newCourse=await courseSchema.create({
            courseName,
            courseDescription,
            instructor:userId,
            // instrcutor:instructorDetails._id
            whatYouWillLearn:whatYouWillLearn,
            price,
            tag:tag,
            // tag:tagDetails._id
            thumbnail:thumbnailImage.secure_url
        })

        await userSchema.findByIdAndUpdate({_id:instructorDetails._id},
            {
                $push:{
                    courses:newCourse._id
                }
            },
            {new:true}
        )

        await tagSchema.findByIdAndUpdate({_id:tagDetails._id},
            {
                $push:{
                    course:newCourse._id
                }
            },
            {new:true}
        )

        return res.status(200).json({
            success:true,
            message:"New Course added successfully",
            data:newCourse
        })

        
    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            success:false,
            message:"Failed to create course",
            error:e.message
        })
    }
}

exports.showAllCourses=async(req,res)=>{
    try{
        // const allCourses=await courseSchema.find({},{
        //     courseName:true,
        //     price:true,
        //     thumbnail:true,
        //     instructor:true,
        //     ratingAndReviews:true,
        //     studentEnrolled:true
        // }).populate("instructor").exec();

        const allCourses=await courseSchema.find({});
        

        return res.status(200).json({
            success:true,
            message:"All courses fetched successfully",
            data:allCourses
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