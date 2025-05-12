
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  console.log('GET / endpoint hit');
  res.send('Welcome to the Simple Node.js App for Monitoring!');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
