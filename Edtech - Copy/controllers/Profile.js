const profileSchema=require('../models/Profile');
const userSchema=require('../models/User');

exports.updateProfile=async(req,res)=>{
    try{
         const {dateOfBirth="",about="",contactNumber,gender}=req.body;
         const id=req.user.id;

         if(!contactNumber || !gender ||!id){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
         }

         const userDetails=await userSchema.findById(id);
         const profileId=userDetails.additionalDetails;

         const profileDetails=await profileSchema.findById(profileId);

         profileDetails.dateofBirth=dateOfBirth;
         profileDetails.about=about;
         profileDetails.contactNumber=contactNumber;
         profileDetails.gender=gender;

         await profileDetails.save();

         return res.status(200).json({
            success:true,
            message:"Profile Updated Successfully",
            profileDetails
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

exports.deleteProfile=async(req,res)=>{
    try{
        const id=req.user.id;

        const userDetails=await userSchema.findById(id);
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User Not Found"
            })
        }

        await profileSchema.findByIdAndDelete({_id:userDetails.additionalDetails});

        await userSchema.findByIdAndDelete({_id:id});

        return res.status(200).json({
            success:true,
            message:"User Deleted Successfully"
        })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Internal Server error during deleting account",
            error:e.message
        })
    }
}

exports.getAllUserDetails=async(req,res)=>{
    try{
        const id=req.user.id;

        const userDetails=await userSchema.findById(id).populate("additionalDetails").exec();

        return res.status(200).json({
            success:true,
            message:"User Data Fetched successfully"
        })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Error while fetching all details of user"
        })
    }
}