// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const app = express();

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for testing or reuse
export default app;
