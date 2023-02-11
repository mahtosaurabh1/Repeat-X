const express=require('express');
let path=require('path');

const router=express.Router();

router.use('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})




module.exports=router;