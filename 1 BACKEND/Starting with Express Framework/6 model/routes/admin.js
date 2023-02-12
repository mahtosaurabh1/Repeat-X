const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const {  getAddControler, postAddControler } = require('../controler/admin');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', getAddControler);

// /admin/add-product => POST
router.post('/add-product', postAddControler);


module.exports=router
