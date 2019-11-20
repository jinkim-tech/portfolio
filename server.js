const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('express-favicon');

const app = express();

app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(favicon('./public/img/favicon.ico'))
app.use(bodyParser.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const data = {
    person: {
      firstName: 'Jin'
    }
  }
  res.render('index', data);
})

app.get('/projects', (req, res) => {
  res.render('projects');
})

app.get('/resume', (req, res) => {
  res.render('resume');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})

app.get('*', function (req, res) {
  res.send('Page not found 404').status(404);
})

app.listen(3000, () => {
  console.log('listening at http://localhost:3000/');
})
