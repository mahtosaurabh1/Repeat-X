const express=require('express');

let router=express.Router();


router.get('/',(req,res,next)=>{
    console.log("second middleware");
    res.send('<h1>hello</h1>')
})



module.exports=router;