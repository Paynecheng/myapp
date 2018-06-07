const db = require('../config/db');

const model = {
    detail: async () => {
        const sql = 'SELECT * FROM birds';
        const data = await db.query(sql);
        console.log('data1', data)
        return data;
    }
}

module.exports = model;