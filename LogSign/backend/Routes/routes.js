const express=require('express');
const router=express.Router();

const {login}=require('../controllers/login')
const {signup}=require('../controllers/signup');
const {auth}=require('../middlewares/auth')
const {logout}=require('../controllers/logout');

router.post('/login',login);
router.post('/signup',signup);
router.get('/logout',logout);

router.get('/checkAlreadyLogin',auth,(req,res)=>{
    res.json({
        success:true,
        response:"WELCOME",
        user:req.user
    })
})


module.exports=router;