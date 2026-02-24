const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Welcome to Minou's App!");
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', time: new Date().toISOString() });
});

app.get('/api/cat', async (req, res) => {
  try {
    const r = await fetch('https://api.thecatapi.com/v1/images/search');
    const j = await r.json();
    if (Array.isArray(j) && j.length > 0) {
      res.json({ url: j[0].url });
    } else {
      res.status(502).json({ error: 'Invalid response from cat API' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch cat' });
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`MyTestApp listening at http://localhost:${port}`);
  });
}

module.exports = app;
