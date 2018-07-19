const db = require('../config/db');
const markdownIt = require('markdown-it');

const model = {
    getCategory: async () => {
        const sql = 'SELECT * FROM category ORDER BY category_id ASC';
        return await db.query(sql);
    },
    getArticle: async () => {
        const sql = 'SELECT article_id, title, description, last_date, views, category.name AS category ' +
        'FROM article, category '+
        'WHERE article.category_id = category.category_id '+
        'ORDER BY article_id DESC LIMIT 3';
        return await db.query(sql);
    }
}

module.exports = model