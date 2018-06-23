const db = require('../config/db');

const model = {
    getCategory: async () => {
        // const sql = 'SELECT category.category_id, category.name, third.num FROM category join (SELECT category_id, count(article_id) AS num FROM article group by category_id) AS third WHERE category.category_id = third.category_id';
        const sql = 'SELECT * FROM category ORDER BY category_id ASC';
        return data = await db.query(sql);
    },
    getArticle: async () => {
        const sql = 'SELECT * FROM article';
        return await db.query(sql);
    },
    addCategory: async (name) => {
        const sql = 'INSERT INTO category (name) values (?)';
        return result = await db.query(sql, [name]);
    },
    deleteCategory: async (name) => {
        const sql = 'DELETE from category WHERE name = ?';
        return result = await db.query(sql, [name]);
    },
    getArticle: async () => {
        const sql = 'SELECT article_id, title, description, last_date, views, lb.name AS "category" FROM '+
                    'article, category AS lb '+
                    'WHERE article.category_id = lb.category_id '+
                    'ORDER BY article_id ';
        return result = await db.query(sql);
    },
    getArticleById:  async (id) => {
        const sql = 'SELECT article_id, title, description, last_date, views, lb.name AS "category" FROM '+
                    'article, category AS lb '+
                    'WHERE article.category_id = lb.category_id AND article_id = ?';
        return result = await db.query(sql, [id]);
    },
    postArticle: async (title, description, category_id) => {
        console.log('category_id', category_id)
        const sql = 'INSERT INTO article'+
                    '(title, description, last_date, category_id) '+
                    'VALUES(?, ?, CURDATE(), ?)';
        return result = await db.query(sql, [title, description, category_id]);
    },
    modifyArticle: async (title, description, id) => {
        const sql = 'UPDATE article SET title=?, description=? WHERE article_id = ?';
        return result = await db.query(sql, [title, description, id]);
    },
    deleteArticle: async (id) => {
        const sql = 'DELETE FROM article WHERE article_id = ?';
        return result = await db.query(sql, [id]);
    }
}

module.exports = model;

