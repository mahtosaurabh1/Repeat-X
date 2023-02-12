const express=require('express')

const router=express.Router();

router.use('/add-product',(req,res,next)=>{
    console.log("add product");
    res.send('<form method="POST" action="/product"><input name="product" type="text" /> <input name="product" type="text" /> <button type="submit">submit</button></form>');
})

router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})


module.exports=router;