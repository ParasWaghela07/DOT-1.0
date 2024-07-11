const express=require('express');
const router=express.Router();

const {getAllUser}=require('../controllers/getAllUser');
const{createUser}=require('../controllers/createUser');

router.get('/getAllUser',getAllUser);
router.post('/createUser',createUser);

module.exports=router;