const express = require('express');
const app = express();

app.use('/', require('./routes'));

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Contact received on port ${port}`);
});

app.use('/', (err, req, res, next) => {
  console.log('Uh-oh, we have a problem.');
  res.sendStatus(err.status || 500);
});