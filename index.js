const express = require('express');
const slug = require('slug')
const bodyParser = require('body-parser')
const find = require('array-find')
const app = express();
const port = 3000;
const multer = require('multer')
const upload = multer({
    dest: 'static/upload/'
})


let data = [
    {
        id: 'vakantie-foto',
        title: 'Ik in Griekenland',
        photo: 'jorren.PNG',
        description: 'Het was leuk'
        }
    ,
    {

        id: 'selfie',
        title: 'Selfie!',
        photo: 'paard.JPG',
        description: 'Dit ben ik dus'

    }

]
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/', upload.single('photo'), add)
app.get('/', pictures)
app.post('/', add)
app.get('/upload', form)
app.get('/:id', picture)

//app.get('/helloworld', (req, res) => res.render('helloworld.ejs', {
//    name: 'Arthur'
//}))
//app.get('/about', (req, res) => res.send('Hello World!'))
//app.get('/contact', (req, res) => res.sendfile('static/img/kat.png'))

app.use(function (req, res, next) {
    res.status(404).send('404 Page Not Found!')
})

//Rendert list.ejs met alle data (alle foto's)
function pictures(req, res) {
    res.render('list.ejs', {
        data: data
    })
}

function picture(req, res, next) {
    var id = req.params.id
    var picture = find(data, function (value) {
        return value.id === id
    })
    res.render('detail.ejs', {
        data: picture
    })
}
// Hierboven geprobeerd onderstaande code te laten werken met res.render, is niet gelukt

// Deze code heb ik gevonden in oude slides, niet heel netjes maar het werkt wel
//function picture(req, res) {
//  var id = req.params.id
//  var doc = '<!doctype html>'
//  var picture = find(data, function (value) {
//    return value.id === id
//  })
//
//  doc += '<head><link rel="stylesheet" type="text/css" href="http://localhost:3000/static/css/styles.css">'
//  doc += '<title>' + picture.title + ' - Mijn Gallerij</title></head>'
//  doc += '<img alt src="/upload/<%= data.cover %>">'
//  doc += '<h1>' + picture.title + '</h1>'
//  doc += '<p>' + picture.description + '</p>'
//
//  res.send(doc)
//}

// Rendert uploadpagina
function form(req, res) {
    res.render('upload.ejs')
}

function add(req, res) {
    var id = slug(req.body.title).toLowerCase()

    data.push({
        id: id,
        title: req.body.title,
        photo: req.file ? req.file.filename : null,
        description: req.body.description
    })

    res.redirect('/' + id)
}
