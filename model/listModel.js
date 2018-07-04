const db = require('../config/db');

const model = {
    list: async (id) => {
        const sql = "SELECT article_id, c.name as 'category', title, description, last_date, views " +
        "FROM article as a, category as c " +
        "WHERE a.category_id = ? AND c.category_id = a.category_id ";
        return await db.query(sql, [id])
    }
};

module.exports = model;