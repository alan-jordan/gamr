var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var db = require('./db')
var app = express()

var api = require('./routes/index')
app.use(bodyParser.json())
app.use('/api-v1', api)
app.use(express.static(path.join(__dirname, '../public')))

module.exports = (connection) => {
  app.set('connection', connection)
  return app
}
