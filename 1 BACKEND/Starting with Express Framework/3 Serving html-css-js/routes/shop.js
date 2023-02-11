const express=require('express');
let path=require('path')
let router=express.Router();


router.get('/',(req,res,next)=>{
    // console.log("second middleware");
    // res.send('<h1>hello</h1>')
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
})



module.exports=router;