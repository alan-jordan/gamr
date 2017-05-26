var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

//USERS
test('GET /users/:id', (t) => {
  return request(t.context.app)
    .get('/api-v1/users/99901')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        const userJSON = JSON.parse(res.text)
        t.is(userJSON.user[0].id, 99901)
        t.is(userJSON.user[0].user_username, 'eljordy')
        t.is(userJSON.user[0].user_dob, '1982-04-22')
        resolve()
      })
    })
})

test('GET /users', (t) => {
  return request(t.context.app)
    .get('/api-v1/users')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 3)
        resolve()
      })
    })
})

test('GET /latestusers', t => {
  return request(t.context.app)
    .get('/api-v1/latestusers')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 3)
        resolve()
      })
    })
})

test('Delete /users/:id/delete', (t) => {
  return request(t.context.app)
    .delete('/api-v1/users/99901/delete')
    .expect(202)
    .then((res) => {
      return t.context.connection('users').select()
    })
    .then((users) => {
      return new Promise((resolve, reject) => {
        t.is(users.length, 2)
        resolve()
      })
    })
})

test('POST to /users/add', (t) => {
  const addedUser = {
    user_username: 'strongSafety',
    user_first_name: 'Eric',
    user_surname: 'Reid'
  }
  return request(t.context.app)
    .post('/api-v1/users/add')
    .send(addedUser)
    .expect(201)
    .then(() => {
      return t.context.connection('users').select()
    })
    .then((users) => {
      return new Promise((resolve, reject) => {
        t.is(users.length, 4)
        resolve()
      })
    })
})

test('Put to /users/:id/update works', (t) => {
  const updatedUser = {
    user_username: 'Ziggy',
    user_first_name: 'Ginger',
    user_surname: 'Cat',
    id: 99903
  }
  return request(t.context.app)
    .put('/api-v1/users/99903/update')
    .send(updatedUser)
    .expect(204)
    .then(() => {
      return t.context.connection('users').where('id',updatedUser.id).first()
    })
    .then((user) => {
      return new Promise((resolve, reject) => {
        t.is(user.user_username, "Ziggy")
        t.is(user.user_first_name, "Ginger")
        t.is(user.user_surname, "Cat")
        resolve()
      })
    })
})

//games
test('Get /game/:id works', (t) => {
  return request(t.context.app)
    .get('/api-v1/games/88801')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        const gameJSON = JSON.parse(res.text)
        t.is(gameJSON.game.game_name, 'The Legend of Zelda: Breath of the Wild')
        resolve()
      })
    })
})

test('Get /games', (t) => {
  return request(t.context.app)
    .get('/api-v1/games')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.length, 3)
        resolve()
      })
    })
})

test('Post /games', (t) => {
  return request(t.context.app)
    .post('/api-v1/games')
    .send({game_name: 'Mario Kart 8 Deluxe'})
    .expect(201)
    .then(() => {
      return t.context.connection('games').select()
    })
    .then((games) => {
      return new Promise((resolve, reject) => {
        t.is(games.length, 4)
        resolve()
      })
    })
})

test('Delete /games/:id/delete', (t) => {
  return request(t.context.app)
    .delete('/api-v1/games/88801/delete')
    .expect(202)
    .then((res) => {
      return t.context.connection('games').select()
    })
    .then((games) => {
      return new Promise((resolve, reject) => {
        t.is(games.length, 2)
        resolve()
      })
    })
})

//userGames
test('Get /users/:id:/games', (t) => {
  return request(t.context.app)
    .get('/api-v1/users/99901/games')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        const gamesJSON = JSON.parse(res.text)
        t.is(gamesJSON.games[1].game_name, "Super Marios Bros")
        t.is(gamesJSON.games[0].game_release_date, "2017-03-03")
        t.is(gamesJSON.games[2].game_id, 88803)
        resolve()
      })
    })
})


// test('Post to /user/99901/games/add works', (t) => {
//   const addedGame = {
//     game_name: 'Mario Kart 8 Deluxe',
//     game_publisher_id: 2,
//     date_purchased: "2017-04-25",
//     game_series_id: 4,
//     system_purchased_on_id: 1
//   }
//   return request(t.context.app)
//     .post('/api-v1/users/99901/games/add')
//     .send(addedGame)
//     .expect(302)
//     .then((res) => {
//       t.context.connection('games').select()
//         .then((games) => {
//           new Promise((resolve, reject) => {
//             t.is(games.length, 4)
//             resolve()
//           })
//         })
//       })
//
// })
