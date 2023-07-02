require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/may', (req, res) => {
  res.send(path.join('blah blah blah blah blah'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});