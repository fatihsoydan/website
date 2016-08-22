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

app.get('/', (req, res) => {
  return res.render('index.html')
})

// Server
const server = http.createServer(app)
const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`Listening on ${port}.`)
})
