const db = require('../config/db');

const model = {
    list: async (id) => {
        const sql = 'SELECT * FROM article where category_id = ?';
        return await db.query(sql, [id]);
    }
}

module.exports = model;