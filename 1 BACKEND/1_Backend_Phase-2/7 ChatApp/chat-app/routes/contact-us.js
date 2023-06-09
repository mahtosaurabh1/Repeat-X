const path=require('path')

const express=require('express')

const rootDir=require('../util/path.js')

const contactUsController=require('../controller/products')


const router=express.Router()

router.get('/contact-us',contactUsController.getContactUs)

 

module.exports=router