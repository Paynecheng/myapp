const express = require('express');

const router = express.Router();

const detailModle = require('../model/detailModel');

router.get('/article/:id', async (req, res) => {
    const id = req.params.id;
    const data = await detailModle.getArticle(id);
    res.send(data);
})

module.exports = router;