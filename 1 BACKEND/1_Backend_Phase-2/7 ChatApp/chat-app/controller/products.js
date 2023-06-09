const path=require('path')

const rootDir=require('../util/path')

exports.getAdminProduct=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views','add-product.html'))
}

exports.postAdminProduct=(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}

exports.getShop=(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
}

exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}

exports.postSuccess=(req,res,next)=>{
    res.redirect('/success')
}

