const path=require('path')

const express=require('express')

const rootDir=require('../util/path.js')

const successController=require('../controller/products')


const router=express.Router()



router.get('/success',successController.getSuccess)

router.post('/success',successController.postSuccess)

 

module.exports=router