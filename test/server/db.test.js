var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../../server/db')

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 3
  return db.getUsers(t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result.length
        t.is(expected, actual)
        resolve()
      })
    })
})

test('getUsers gets a single user', function (t) {
  var expected = 'Nerf Herder'
  return db.getUser(99903, t.context.connection)
    .then(function (result) {
      return new Promise((resolve, reject) => {
        var actual = result[0].user_username
        t.is(expected, actual)
        resolve()
      })
    })
})

test('getGame gets a single game', (t) => {
  return db.getGame(88801, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.length, 1)
        resolve()
      })
    })
})

test('getGame gets the right game', (t) => {
  return db.getGame(88802, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result[0].game_name, "Super Marios Bros")
        resolve()
      })
    })
})

test('getUserGames gets the right number of games ', (t) => {
  return db.getUserGames(99901, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result.length, 3)
        resolve()
      })
    })
})

test('getUserGames gets the right games', (t) => {
  return db.getUserGames(99901, t.context.connection)
    .then((result) => {
      return new Promise((resolve, reject) => {
        t.is(result[0].game_name, "The Legend of Zelda: Breath of the Wild")
        t.is(result.length, 3)
        resolve()
      })
    })
})

test('editUser edits the user correctly', (t) => {
  let userObj = {
    user_username:'Bob the Builder',
    user_first_name: 'Bob',
    user_surname: 'Builder'
  }
  return db.editUser(99902, userObj, t.context.connection)
    .then(() => {
      return db.getUser(99902, t.context.connection).first()
        .then((user) => {
          return new Promise((resolve, reject) => {
            t.is(user.user_username, "Bob the Builder")
            resolve()
          })
      })
  })
})

test('addGames adds a game to the users collection', (t) => {
  let gameObj = {
    game_name: 'Mario Kart 8 Deluxe',
    game_publisher_id: 2,
    date_purchased: "2017-04-25",
    game_series: 4,
    system_purchased_on: 1
  }
  return db.addGame(99901, gameObj, t.context.connection)
    .then((userGamesAddedId) => {
      return db.getUserGames(99901, t.context.connection)
        .then((userGames) => {
          return new Promise((resolve, reject) => {
          t.is(userGames.length, 4)
          resolve()
        })
      })
    })
})
