var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/users', (req, res) => {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id', (req, res) => {
  db.getUser(req.params.id, req.app.get('connection'))
      .then((user) => {
        res.json({user})
      })
      .catch(function (err) {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
})

router.get('/latestusers', (req, res) => {
  db.getNumUsers(3, req.app.get('connection'))
    .then(function(users) {
      res.json(users)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/users/:id/update', (req, res) => {
  db.updateUser(req.params.id, req.body, req.app.get('connection'))
    .then(() => {
      res.sendStatus(204)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/users/add', (req, res) => {
  db.addUser(req.body, req.app.get('connection'))
    .then(() => {
      res.sendStatus(201)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/users/:id/delete', (req, res) => {
  db.deleteUser(req.params.id, req.app.get('connection'))
  .then(() => {
    res.sendStatus(202)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.get('/games/:id', (req, res) => {
  db.getGame(req.params.id, (req.app.get('connection'))).first()
    .then((game) => {
      res.json({game})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/games', (req, res) => {
  db.getGames(req.app.get('connection'))
    .then((games) => {
      res.json(games)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/games', (req, res) => {
  db.addGame(req.body, req.app.get('connection'))
    .then(() => {
      res.sendStatus(201)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/games/:id/delete', (req, res) => {
  db.deleteGame(req.params.id, req.app.get('connection'))
  .then(() => {
    res.sendStatus(202)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

router.post('/users/:id/games/add', (req, res) => {
  db.addGame(req.params.id, req.body, req.app.get('connection'))
    .then((id) => {
      res.redirect(`/user/${req.params.id}`)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/users/:id/games', (req, res) => {
  db.getUserGames(req.params.id, req.app.get('connection'))
    .then((games) => {
      res.json({games})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})



module.exports = router
