const express = require('express');
const path = require('path');
const pool = require('./config/db');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// API get all women
app.get('/api/women', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM women');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// API get one woman by id
app.get('/api/women/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM women WHERE id = $1', [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Detail page
app.get('/women/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM women WHERE id = $1', [req.params.id]);

    if (result.rows.length === 0) {
      return res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    }

    res.sendFile(path.join(__dirname, 'views', 'woman.html'));
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});