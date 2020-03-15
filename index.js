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

require('dotenv').config()

var db = null
var url = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT

mongo.MongoClient.connect(url, function (err, client) {
    if (err) throw err
    db = client.db(process.env.DB_NAME)
})

app.listen(port, () => console.log(`De app is nu online op http://localhost:${port}!`))

app.use('/static', express.static('static'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({
    extended: true
}))

app.post('/', upload.single('photo'), add)
app.get('/', pictures)
app.delete('/', remove)
app.get('/upload', form)
app.get('/:id', picture)

app.use(function (req, res, next) {
    res.status(404).send('404 Page Not Found!')
})

//Rendert list.ejs met alle data (alle foto's)
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
    var id = req.params.id
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
    var id = req.params.id
    db.collection('picture').deleteOne({
        _id: mongo.ObjectID(id)
    }, done)

    function done(err) {
        if (err) {
            next(err)
        } else {
            res.json({
                status: 'ok'
            })
        }
    }
}

function form(req, res) {
    res.render('upload.ejs')
}
