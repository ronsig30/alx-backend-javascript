const express = require('express');

const app = express();
const PORT = process.env.PORT || 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = server;
