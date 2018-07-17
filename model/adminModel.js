const db = require('../config/db');

const model = {
    getCategory: async () => {
        const sql = 'SELECT * FROM category';
        const sql1 = 'SELECT COUNT(*) FROM artice'
        const params = [3]
        return await db.query(sql, params);
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


// SELECT c.category_id,c.name,a.count as num from (SELECT category_id,count(*) count from article group by category_id) a left join category c on c.category_id=a.category_id;