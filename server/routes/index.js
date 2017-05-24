var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/users', (req, res) => {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.json({ users: users })
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

router.post('/edit', (req, res) => {
  db.editUser(req.body.id, req.body, req.app.get('connection'))
    .then(() => {
      res.redirect(`/user/${req.body.id}`)
    })
})

router.get('/user/:id/edit', (req, res) => {
  db.getUser(req.params.id, req.app.get('connection')).first()
    .then((user) => {
      res.render('users/edit', user)
    })
})

router.post('/user/:id/games/add', (req, res) => {
  db.addGame(req.params.id, req.body, req.app.get('connection'))
    .then((id) => {
      res.redirect(`/user/${req.params.id}`)
    })
})

router.get('/user/:id/games/add', (req, res) => {
  db.getUser(req.params.id, req.app.get('connection')).first()
    .then((user) => {
      res.render('users/addGame', user)
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
      res.json({games})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})


module.exports = router
