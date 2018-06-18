const db = require('../config/db');

const model = {
    getCategory: async () => {
        const sql = 'SELECT * FROM category';
        const sql1 = 'SELECT COUNT(*) from artice'
        const params = [3]
        const data = await db.query(sql, params);
        console.log('data1', data);
        return data;
    },
    getArticle: async () => {
        const sql = 'SELECT * FROM article';
        return await db.query(sql);
    },
    addCategory: async () => {
        // const sql = 'INSERT INTO category(name,)'
    }
}

module.exports = model;

// insert into article (title, description, last_date, views, category_id) values('学习angular','我正在学习angular,这是一个测试.嘿嘿', '2018-06-18' 10, 1)