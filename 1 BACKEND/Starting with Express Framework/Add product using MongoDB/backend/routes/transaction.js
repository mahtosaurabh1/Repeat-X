const express=require('express');

const router=express.Router();
const {getTransactionController,addTransactionController,deleteTransactionController, updateTransactionControler} =require('../controller/transaction');


router.get('/api/v1/product',getTransactionController);
router.post('/api/v1/product',addTransactionController);
router.delete('/api/v1/product/:id',deleteTransactionController);
router.put('/api/v1/product/:id',updateTransactionControler);


module.exports=router;