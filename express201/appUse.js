const express = require('express');
const app = express();

function validateUser(req, res, next) {
  res.locals.validated = true;
  console.log('Validated run!');
  next();
}

app.use(validateUser);
app.get('/', (req, res, next) => {
  res.send('<h1>Main page</h1>');
});
app.listen(3000);
