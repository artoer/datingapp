const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./static'));

app.set('view engine', 'ejs');
app.set('views','views');

app.get('/', (req, res) => res.render('index.ejs'))
app.get('/helloworld', (req, res) => res.render('helloworld.ejs', {name: 'Arthur'}))
app.get('/about', (req, res) => res.send('Hello World!'))
app.get('/contact', (req, res) => res.sendfile('static/img/kat.png'))

app.use(function (req, res, next) {
  res.status(404).send('404 Page Not Found!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))