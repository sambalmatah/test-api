const mysql = require('mysql2');

require('dotenv').config();

connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
});

connection.connect((err) => {
    if (err) {
        console.log('Connect Failed', err.code);
    } else console.log('Connected');
});

module.exports = { connection };