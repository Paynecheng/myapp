const express = require('express');

const router = express.Router();

const listModel = require('../model/listModel');

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const data = await listModel.list(id);
    res.send(data);
})


module.exports = router;