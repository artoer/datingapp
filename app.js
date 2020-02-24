const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/about', (req, res) => res.send('Hello World!'))
app.get('/contact', (req, res) => res.sendfile('./public/img/kat.png'))

app.use(function (req, res, next) {
  res.status(404).send('404 Page Not Found!')
})

app.use(express.static('/public'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
