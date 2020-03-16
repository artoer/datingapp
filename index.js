//Include packages
const express = require('express')
const slug = require('slug')
const bodyParser = require('body-parser')
const find = require('array-find')
const app = express();
const port = 3000;
const multer = require('multer')
const upload = multer({
    dest: 'static/upload/'
})
const mongo = require('mongodb')
const methodOverride = require('method-override')

require('dotenv').config()

let db = null
let url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT

mongo.MongoClient.connect(url, function (err, client) {
    if (err) throw err
    db = client.db(process.env.DB_NAME)
})

app.listen(port, () => console.log(`De app is nu online op http://localhost:${port}!`))

//Declaring static folder
app.use('/static', express.static('static'));

app.use(methodOverride('_method'))

//Declaring views for ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: true
}))

//Routing
app.post('/', upload.single('photo'), add)
app.get('/', pictures)
app.get('/upload', form)
app.get('/:id', picture)
// BRON: https://www.youtube.com/watch?v=UIf1Lh9OZ-k
app.delete('/:id', remove)

//app.use(function (req, res, next) {
//    res.status(404).send('404 Page Not Found!')
//})

//Using mongoose
function pictures(req, res, next) {
    db.collection('picture').find().toArray(done)

    function done(err, data) {
        if (err) {
            next(err)
        } else {
            res.render('list.ejs', {
                data: data
            })
        }
    }
}

function picture(req, res, next) {
    let id = req.params.id
    db.collection('picture').findOne({
        _id: mongo.ObjectID(id)
    }, done)

    function done(err, data) {
        if (err) {
            next(err)
        } else {
            res.render('detail.ejs', {
                data: data
            })
        }
    }
}

function add(req, res, next) {
    db.collection('picture').insertOne({
        title: req.body.title,
        photo: req.file ? req.file.filename : null,
        description: req.body.description
    }, done)

    function done(err, data) {
        if (err) {
            next(err)
        } else {
            res.redirect('/' + data.insertedId)
        }
    }
}

function remove(req, res, next) {
    let id = req.params.id
    db.collection('picture').deleteOne({
        _id: mongo.ObjectID(id)
    }, done)

    function done(err) {
        if (err) {
            next(err)
        } else {
            res.redirect('/')
    }
}}

function form(req, res) {
    res.render('upload.ejs')
}