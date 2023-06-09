const path=require('path')

const rootDir=require('../util/path')

const adminController=require('../controller/products')

const express=require('express')

const router=express.Router()

router.get('/add-product',adminController.getAdminProduct)
  
router.post('/add-product',adminController.postAdminProduct)

module.exports = router