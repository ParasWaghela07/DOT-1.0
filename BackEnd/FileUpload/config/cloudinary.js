const cloudinary = require("cloudinary").v2;

require("dotenv").config();
exports.cloudinaryConnect = () => {
    try{
            cloudinary.config({
                cloud_name:"dglp1g5wi",
                api_key:"329585144611329",
                api_secret:"YkzwxaP-ybrPAi9Z0B-_-gk32wk"
            })
    }
    catch(error) {
        console.log(error);
    }
}