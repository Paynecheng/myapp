const db = require('../config/db');

const model = {
    getArticle: async () => {
        const sql = 'SELECT article_id, title, description, last_date, views, category.name AS category ' + 
                    'FROM article, category '+
                    'WHERE article.category_id = category.category_id ' +
                    'ORDER BY article_id';
        return await db.query(sql);
    }
}

module.exports = model;