const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
  res.send('Sanity Check');
});

app.get('/login', (req, res, next) => {
  res.render('login');
});

app.post('/process_login', (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;

  if (password === 'x') {
    res.cookie('username', username);
    res.redirect('/welcome');
  } else {
    res.redirect('/login?msg=fail');
  }

  // res.json(req.body);
});

app.get('/welcome', (req, res, next) => {
  res.render('welcome');
});

app.listen(3000);
console.log('Server runs at port 3000');
