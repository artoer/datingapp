const express = require('express');
const slug = require('slug')
const bodyParser = require('body-parser')
const app = express();
const port = 3000;


var data = [
    {
        id: 'vakantie-foto',
        title: 'Ik in Griekenland',
        description: 'Het was leuk'
        }
    ,
    {

        id: 'selfie',
        title: 'Selfie!',
        description: 'Dit ben ik dus'

    }

]
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}))


app.get('/', pictures)
app.post('/', add)
app.get('/upload', form)
app.get('/:id', picture)

app.get('/helloworld', (req, res) => res.render('helloworld.ejs', {
    name: 'Arthur'
}))
app.get('/about', (req, res) => res.send('Hello World!'))
app.get('/contact', (req, res) => res.sendfile('static/img/kat.png'))

app.use(function (req, res, next) {
    res.status(404).send('404 Page Not Found!')
})


function pictures(req, res) {
    res.render('list.ejs', {
        data: data
    })
}

function picture(req, res, next) {
    res.render('detail.ejs', {
        data: picture
    })
}

function form(req, res) {
  res.render('upload.ejs')
}

function add(req, res) {
  var id = slug(req.body.title).toLowerCase()

  data.push({
    id: id,
    title: req.body.title,
    description: req.body.description
  })

  res.redirect('/' + id)
}
