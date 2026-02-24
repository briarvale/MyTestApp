const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Welcome to Minou's App!");
});

app.listen(port, () => {
  console.log(`MyTestApp listening at http://localhost:${port}`);
});