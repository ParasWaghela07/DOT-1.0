const subSectionSchema=require('../models/SubSection');
const sectionSchema=require('../models/Section');
const uploadImageToCloudinary=require('../utils/imageUploader');

require('dotenv').config();

exports.createSubSection=async(req,res)=>{
    try{
        const {sectionId,title,timeDuration,description}=req.body;
        const video=req.files.videoFile;

        if(!sectionId || !title || !timeDuration || !description){
            return res.status(400).json({
                success:false,
                message:"All Fields are required"
            })
        }

        const uploadDetails=await uploadImageToCloudinary(video,process.env.FOLDER_NAME);

        const subsectionDetails=await subSectionSchema.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            video:uploadDetails.secure_url
        })

        const sectionDetails=await sectionSchema.findByIdAndUpdate(sectionId,{
            $push:{
                subSection:subsectionDetails._id
            }
        },{new:true})

        return res.status(200).json({
            success:true,
            message:"Subsection added successfully",
            subsectionDetails,
            sectionDetails
        })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:e.message 
        })
    }
}

//UPDATE AND DELETE KHUDSE LIKHO
// TAG KO  CATEGORY KRNA HE OR TAG KO AS A STRING BANANA HE
