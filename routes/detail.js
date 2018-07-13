const express = require('express');

const router = express.Router();

const detailModle = require('../model/detailModel');

router.get('/article', async (req, res) => {
    const data = await detailModle.getArticle();
    res.send(data);
})

module.exports = router;