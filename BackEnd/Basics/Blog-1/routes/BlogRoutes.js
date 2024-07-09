const express=require('express');
const router=express.Router();


const {createPost}=require("../controllers/createPost");
const {likePost}=require("../controllers/likePost");
const {unlikePost}=require("../controllers/unlikePost");
const {addComment}=require("../controllers/addComment");
const {removeComment}=require("../controllers/removeComment");
const {deletePost}=require("../controllers/deletePost");

const{getPost}=require("../controllers/getPost");
const{getAllPost}=require("../controllers/getAllPost");
const{getComment}=require("../controllers/getComment");

router.post("/createPost",createPost);
router.put("/likePost/:id",likePost);
router.put("/unlikePost/:id",unlikePost);
router.put("/addComment/:id",addComment);
router.put("/removeComment/:id",removeComment);
router.delete("/deletePost/:id",deletePost);

router.get("/getPost/:id",getPost);
router.get("/getAllPost",getAllPost);
router.get("/getComment/:id",getComment);




module.exports=router;