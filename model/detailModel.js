const db = require('../config/db');
const markDownIt = require('markdown-it')

const model = {
    getArticle: async (id) => {
        const md = new markDownIt();
        const sql = 'SELECT article_id, title, description, last_date, views, category.name AS category ' + 
                    'FROM article, category '+
                    'WHERE article_id = ? AND article.category_id = category.category_id ';
        let result =  await db.query(sql, [id]);
        result = result.map((item) => {
            item.description = md.render(item.description);
            item.description = item.description.replace(/\n/g, '<br />');
            return item
        })
        return result
    }
}

module.exports = model;