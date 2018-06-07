const express = require('express');
const db = require('../config/db');
const model = require('../model/detail');
const router = express.Router();

router.get('/', async (req, res, next) => {
    const data = await model.detail();
    console.log("data", data);
    res.send(data);
})

router.get('/bird', (req, res) => {

})

module.exports = router;
