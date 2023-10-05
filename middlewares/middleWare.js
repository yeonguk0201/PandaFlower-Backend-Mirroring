const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  res.json({ error: err.message });
});