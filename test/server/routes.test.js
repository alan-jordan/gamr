var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

//these are just testing the happy path when things work well
//maybe try some tests for what happens if the igdb api is down

//USERS
test('GET /users/:id', (t) => {
  return request(t.context.app)
    .get('/api-v1/users/99901')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.id, 99901)
        t.is(res.body.user_username, 'eljordy')
        t.is(res.body.user_dob, '1982-04-22')
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

test('Get /users/:id/latestgame', t => {
  return request(t.context.app)
    .get('/api-v1/users/99903/latestgame')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body.igdb_id, 358)
        resolve()
      })
    })
})

//check what happens to userGames
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

// test('Post /games', (t) => {
//   return request(t.context.app)
//     .post('/api-v1/games')
//     .send({game_name: 'Mario Kart 8 Deluxe'})
//     .expect(201)
//     .then(() => {
//       return t.context.connection('games').select()
//     })
//     .then((games) => {
//       return new Promise((resolve, reject) => {
//         t.is(games.length, 4)
//         resolve()
//       })
//     })
// })

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
        t.is(gamesJSON.games[0].igdb_id, 7346)
        t.is(gamesJSON.games[1].igdb_id, 358)
        t.is(gamesJSON.games[2].igdb_id, 3192)
        resolve()
      })
    })
})

// test('Post /users/:id/games/add', t => {
//   return request(t.context.app)
//     .post('/api-v1/users/99901/games/add')
//     .send({
//       user_id: 99901,
//       apiGameId: 1234
//     })
//     .expect(201)
//     .then((res) => {
//       return new Promise((resolve, reject) => {
//         t.is(res, 1)
//         resolve()
//       })
//     })
// })

// In general I wouldn't write a test for an external api
// and would always nock any http request that is outside of this app

// External api
test('Get /igdbapi/games/:id polls correctly', (t) => {
  return request(t.context.app)
    .get('/api-v1/igdbapi/games/1001')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body[0].name, "Oddworld: Munch's Oddysee")
        resolve()
      })
    })
})

test('Get /igdbapi/games/search/:searchstr polls correctly', (t) => {
  return request(t.context.app)
    .get('/api-v1/igdbapi/games/search/mario+kart+8+deluxe')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        t.is(res.body[0].name, "Mario Kart 8 Deluxe")
        resolve()
      })
    })
})
