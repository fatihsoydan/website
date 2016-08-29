// Deps

const express = require('express')
const http = require('http')
const nunjucks = require('nunjucks')
const path = require('path')

// App

const app = express()

// Templating

nunjucks.configure(path.join(__dirname, '.'), {
  autoescape: false,
  express: app,
  noCache: true
})

// Serving static

app.use(express.static('./public'))

// Routes

app.get('/', (req, res) => res.render('views/nodetr.html', {
  title: 'Node.js İstanbul topluluğu',
  page: 'nodetr'
}))

app.get('/bilgiler', (req, res) => res.render('views/bilgiler.html', {
  title: 'Node.js bilgileri',
  page: 'bilgiler'
}))

app.get('/docs/nodejs-frameworks', (req, res) => res.render('views/docs/frameworks.html', {
  title: 'Node.js Frameworks',
  page: 'bilgiler',
  templateengines: require('./data/frameworks.json')
}))

app.get('/docs/nodejs-template-engines', (req, res) => res.render('views/docs/templateengines.html', {
  title: 'Node.js Şablon Motorları / Template Engines',
  page: 'bilgiler',
  templateengines: require('./data/templateengines.json')
}))

app.get('/gelistiriciler', (req, res) => res.render('views/gelistiriciler.html', {
  title: 'İstanbul ve Türkiye\'deki Node.js geliştiricileri',
  page: 'gelistiriciler',
  developers: require('./data/developers.json')
}))

app.get('/ilanlar', (req, res) => res.render('views/ilanlar.html', {
  title: 'İstanbul Node.js iş ilanları',
  page: 'ilanlar',
  jobs: require('./data/jobs.json')
}))

app.get('/iletisim', (req, res) => res.render('views/iletisim.html', {
  title: 'node.ist ile iletişim',
  page: 'iletisim'
}))

app.get('/kitaplar', (req, res) => res.render('views/kitaplar.html', {
  title: 'Node.js ile ilgili kitaplar',
  page: 'kitaplar',
  books: require('./data/books.json')
}))

app.get('/organizasyonlar', (req, res) => res.render('views/organizasyonlar.html', {
  title: 'Türkiye\'deki Node.js organizasyonları',
  page: 'organizasyonlar'
}))

app.get('/kullanan-sirketler', (req, res) => res.render('views/usedby.html', {
  title: 'Node.js kullanan şirketler',
  page:'usedby',
  usedbys: require('./data/usedby.json')
}))

// Server

const server = http.createServer(app)
const port = process.env.PORT || 8085

server.listen(port, () => {
  console.log(`Listening on ${port}.`)
})
