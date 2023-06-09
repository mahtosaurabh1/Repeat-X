const path=require('path')

const rootDir=require('../util/path')

const shopController=require('../controller/products')

const express=require('express')

const router=express.Router()

router.get('/',shopController.getShop)

module.exports = router