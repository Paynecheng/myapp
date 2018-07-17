const db = require('../config/db');

const model = {
    getArticle: async (id) => {
        const sql = 'SELECT article_id, title, description, last_date, views, category.name AS category ' + 
                    'FROM article, category '+
                    'WHERE article_id = ? AND article.category_id = category.category_id ';
        return await db.query(sql, [id]);
    }
}

module.exports = model;