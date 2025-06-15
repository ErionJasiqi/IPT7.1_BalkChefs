require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    process.exit(1); // Exit if DB connection fails
  } else {
    console.log('MySQL connected');
  }
});

// Example route to get all products
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      console.error('DB query error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown handler
function shutdown() {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('HTTP server closed.');
    db.end(err => {
      if (err) {
        console.error('Error closing DB connection:', err);
        process.exit(1);
      } else {
        console.log('DB connection closed.');
        process.exit(0);
      }
    });
  });
}

// Listen for termination signals
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
