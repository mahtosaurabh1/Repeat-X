const express=require('express');
let path=require('path');

const router=express.Router();

router.use('/contactus',(req,res,next)=>{
    console.log(req.body)
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
})



router.use('/sucess',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



module.exports=router;