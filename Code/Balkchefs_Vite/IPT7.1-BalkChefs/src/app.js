/*
require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const mariadb = require("mariadb");
const pool = mariadb.createPool({
     host: 'mydb.com', 
     user:'myUser', 
     password: 'myPassword',
     connectionLimit: 5
});

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({ //mariadb.createPool stattdessen 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) console.error("DB-Verbindung fehlgeschlagen:", err);
    else console.log("MySQL verbunden");
});

app.get("/products", (req, res) => {
    db.query("SELECT * FROM products", (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result);
    });
});


const PORT = process.env.PORT || 8443; // Plesk gibt den Port vor
app.listen(PORT, () => console.log("Server läuft auf Port ${PORT}"));
*/


const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: 'localhost:3306', 
     user:'ErionJasiqi', 
     password: 'EriIPT7.1',
     connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
	conn = await pool.getConnection();
	const rows = await conn.query("SELECT 1 as val");
	console.log(rows); //[ {val: 1}, meta: ... ]
	const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
	console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) conn.end();
  }
}
asyncFunction().then(() => {
  pool.end();
});