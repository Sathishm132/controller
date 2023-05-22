const path = require('path');

const express = require('express');

const productControler=require("../controlers/product")

const router = express.Router();

router.get('/',productControler.getProduct );

module.exports = router;
