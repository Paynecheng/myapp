const express = require('express');
const db = require('../config/db');
const adminModel = require('../model/adminModel');
const router = express.Router();


router.get('/getCategory', async (req, res, next) => {
    const data = await adminModel.getCategory();
    res.send(data);
});

router.post('/addCategory', async (req, res, next) => {
    const name = req.body.name;
    const result = await adminModel.addCategory(name);

    if(result.affectedRows == 1){
        res.send({status:1, message: '添加成功'});
    }
});

router.post('/deleteCategory', async (req, res) => {
    const name = req.body.name;

    const result = await adminModel.deleteCategory(name);

    if(result.affectedRows == 1){
        res.send({ status:1, message: '删除成功' });
    }else{
        res.send({status: 0, message: '删除失败'});
    }
});

router.get('/getArticle', async(req, res) => {
    const data = await adminModel.getArticle();

    res.send(data);

})


module.exports = router;
