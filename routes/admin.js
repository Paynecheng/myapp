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
});

router.post('/postArticle', async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const category_id = req.body.category_id;
    const result = await adminModel.postArticle(title, description, category_id);

    if(result.affectedRows == 1){
        res.send({status: 1, message: '添加文章成功'});
    }else{
        res.send({status: 0, message: '添加文章失败'})
    }
});

router.get('/getArticleById', async(req, res) => {
    const id = req.query.id;
    const data = await adminModel.getArticleById(id);
    res.send(data)
});

router.post('/modifyArticle', async(req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const id = req.body.id;
    
    const result = await adminModel.modifyArticle(title, description, id);

    if(result.affectedRows == 1){
        res.send({ status: 1, message: '修改文章成功' });
    }else{
        res.send({ status: 0, message: '修改文章失败' });
    }
});

router.get('/deleteArticle', async(req, res) => {
    const id = req.query.id;
    const result = await adminModel.deleteArticle(id);
    if(result.affectedRows == 1){
        res.send({ status: 1, message: '删除文章成功' });
    }else{
        res.send({ status: 0, message: '删除文章失败' });
    }
})


module.exports = router;
