// Deps
const express = require('express')
const http = require('http')
const nunjucks = require('nunjucks')
const path = require('path')

const app = express()

nunjucks.configure(path.join(__dirname, '.'), {
  autoescape: false,
  express: app,
  noCache: true
})

app.use(express.static('./public'))
app.use('/bower', express.static('./bower_components'))

app.get('/', (req, res) => res.render('views/nodetr.html', {page:'nodetr'}))
app.get('/ilanlar', (req, res) => res.render('views/ilanlar.html', {page:"ilanlar", jobs: require('./data/jobs.json')}))
app.get('/kitaplar', (req, res) => res.render('views/kitaplar.html', {page:"kitaplar", books: require('./data/books.json')}))
app.get('/organizasyonlar', (req, res) => res.render('views/organizasyonlar.html', {page:"organizasyonlar"}))
app.get('/kullanan-sirketler', (req, res) => res.render('views/usedby.html', {page:'usedby'}))

// Server
const server = http.createServer(app)
const port = process.env.PORT || 8085

server.listen(port, () => {
  console.log(`Listening on ${port}.`)
})
