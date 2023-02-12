const express=require('express');

const router=express.Router();
const {getTransactionController,addTransactionController,deleteTransactionController} =require('../controller/transaction');


router.get('/api/v1/transaction',getTransactionController);
router.post('/api/v1/transaction',addTransactionController);
router.delete('/api/v1/transaction/:id',deleteTransactionController)

module.exports=router;