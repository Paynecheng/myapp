const express = require('express');
const db = require('../config/db');
const adminModel = require('../model/adminModel');
const router = express.Router();



router.get('/getCategory', async (req, res, next) => {
    const data = await adminModel.getCategory();
    res.send(data);
});

router.get('/getArticle', async (req, res, next) => {
    const data = await adminModel.getArticle();
    res.send(data);
})


module.exports = router;
