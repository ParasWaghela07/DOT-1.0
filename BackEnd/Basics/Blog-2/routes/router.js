const express=require('express');
const router=express.Router();

const {createPost,getAllPosts}=require("../controllers/postController");
const {like,unlike}=require("../controllers/likeController");
const{comment,uncomment}=require("../controllers/commentController");

router.post('/createPost',createPost);
router.get('/getAllPosts',getAllPosts);
router.post('/like',like);
router.post('/unlike',unlike);
router.post('/comment',comment);
router.post('/uncomment',uncomment);

module.exports=router;