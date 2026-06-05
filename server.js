const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock DB path for quotes
const QUOTES_FILE = path.join(__dirname, 'quotes.json');

// Get all quotes
app.get('/api/quotes', (req, res) => {
  if (!fs.existsSync(QUOTES_FILE)) {
    return res.json([]);
  }
  fs.readFile(QUOTES_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Read error' });
    res.json(JSON.parse(data || '[]'));
  });
});

// Save a quote
app.post('/api/quotes', (req, res) => {
  const newQuote = { id: Date.now(), ...req.body, createdAt: new Date() };
  let quotes = [];
  if (fs.existsSync(QUOTES_FILE)) {
    try {
      quotes = JSON.parse(fs.readFileSync(QUOTES_FILE, 'utf8') || '[]');
    } catch (e) {}
  }
  quotes.push(newQuote);
  fs.writeFile(QUOTES_FILE, JSON.stringify(quotes, null, 2), (err) => {
    if (err) return res.status(500).json({ error: 'Save error' });
    res.json({ success: true, quote: newQuote });
  });
});

app.listen(PORT, () => {
  console.log(`Financial Agent Dashboard running at http://localhost:${PORT}`);
});