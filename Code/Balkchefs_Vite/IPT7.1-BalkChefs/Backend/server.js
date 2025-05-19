// backend/server.js
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'Erion',
    password : 'EriBBZWsql2007',
    database : 'BalkChefs'
});

app.get('/', (req, res) => {
    db.query("INSERT INTO users (username, password) VALUES ('Testing', '123')", (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: 'Database error' });
        } else {
            console.log(result)
            return res.json({ success: true, insertId: result.insertId });
        }
    });
});

app.listen(port, () => {
    console.log('server listening on port 8080');
});


