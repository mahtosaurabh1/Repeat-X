const path = require('path');

const express = require('express');


const { allProductControler } = require('../controler/admin');

const router = express.Router();

router.get('/', allProductControler);

module.exports = router;
