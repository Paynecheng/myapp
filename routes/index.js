var express = require('express');
var router = express.Router();

const indexModel = require('../model/indexModel');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/category', async (req, res) => {
    const data = await indexModel.getCategory();
    res.send(data)
});

router.get('/article', async (req, res) => {
    const data = await indexModel.getArticle();
    res.send(data);
})

router.get('/articleFive', async (req, res) => {
    const data = await indexModel.getArticleFive();
    res.send(data);
})

module.exports = router;
