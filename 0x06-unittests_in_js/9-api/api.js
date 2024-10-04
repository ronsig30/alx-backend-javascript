const express = require('express');
const app = express();
const PORT = 7865;

// Existing endpoints (if any)
// Example endpoint for demonstration purposes
app.get('/', (req, res) => {
  res.send('API available on localhost port 7865');
});

// New endpoint: GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).send('Cannot GET ' + req.url);
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});


module.exports = app;
