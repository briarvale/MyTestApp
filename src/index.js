const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const CAT_API_KEY = process.env.CAT_API_KEY || null;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Welcome to Minou's App!");
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

app.get('/api/cat', async (req, res) => {
  try {
    const headers = {};
    if (CAT_API_KEY) headers['x-api-key'] = CAT_API_KEY;
    const r = await fetch('https://api.thecatapi.com/v1/images/search', { headers });
    if (!r.ok) {
      return res.status(502).json({ error: 'Cat API responded with status ' + r.status });
    }
    const j = await r.json();
    if (Array.isArray(j) && j.length > 0 && j[0].url) {
      res.json({ url: j[0].url });
    } else {
      res.status(502).json({ error: 'Invalid response from cat API' });
    }
  } catch (err) {
    console.error('Error fetching cat:', err);
    res.status(500).json({ error: 'Failed to fetch cat' });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`MyTestApp listening at http://localhost:${port}`);
  });
}

module.exports = app;
