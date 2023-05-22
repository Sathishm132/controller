const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const productControler=require("../controlers/product")



// /admin/add-product => GET
router.get('/add-product',productControler.getAddPRoduct);

// /admin/add-product => POST
router.post('/add-product',productControler.PostProduct );

module.exports=router