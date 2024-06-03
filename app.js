const express = require('express');
const { connection } = require('./db');
const app = express()

const port = process.env.MYSQL_PORT || 8080

app.get('/api/shopping-list', (req, res) => {
    connection.query('SELECT * FROM shopping_list', (err, data) => {
        if (err) return callback(err, null);
        res.status(200).json({
            status: 'success',
            length: data.length,
            data,
        });
    });
});

app.listen(port, '0.0.0.0',
    () => {
        console.log(`Server is listening on port ${port}`)
    }
)