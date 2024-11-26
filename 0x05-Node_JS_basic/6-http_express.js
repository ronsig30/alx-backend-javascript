// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

app.listen = 1245;

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Export the app for testing or reuse
export default app;
