const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cwj1428' || '',
    database: 'my_blog'
});

const db = {
    query: function (sql, params = []) {
        return promise = new Promise((resolve, reject) => {
            connection.query(sql, params, (err, results, fileds) => {
                if( err ) throw err;
                resolve(results);
            })
        });
    }
}

module.exports = db;