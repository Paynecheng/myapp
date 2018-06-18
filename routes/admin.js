const express = require('express');
const db = require('../config/db');
const adminModel = require('../model/adminModel');
const router = express.Router();

router.get('/**', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

router.get('/getCategory', async (req, res, next) => {
    const data = await adminModel.getCategory();
    res.send(data);
});

router.get('/getArticle', async (req, res, next) => {
    const data = await adminModel.getArticle();
    res.send(data);
})

// router.getr('/category/add', async (req, res, next) => {
//     const data = await model.addCategory();
//     res.send;
// })

// router.get('/bird', (req, res) => {

// })

module.exports = router;
