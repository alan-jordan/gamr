var test = require('ava')
var request = require('supertest')

var createServer = require('../../server/server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /user/:id', (t) => {
  return request(t.context.app)
    .get('/user/99901')
    .expect(200)
    .then((res) => {
      return new Promise((resolve, reject) => {
        const $ = cheerio.load(res.text)
        t.is($('li[class=userInfoList]').first().text(), 'Username: eljordy')
        resolve()
      })
    })

})

  //  t.is($('li[class=user_list]:first-child').text(), 'eljordy')


test('Get /', (t) => {
  return request(t.context.app)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      return new Promise((resolve, reject) => {
        t.is($('h2').first().text(), 'Welcome to gamr')
        resolve()
      })
    })
})

test('Get /user/:id/edit renders and pulls in the correct form info', (t) => {
  return request(t.context.app)
    .get('/user/99902/edit')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      return new Promise((resolve, reject) => {
        t.is($('form').length,2) // Will be 2 as there is already a search form in the header
        t.is($('input[name=user_username]').length,1)
        t.is($('input[name=user_first_name]').length,1)
        t.is($('input[name=user_surname]').length,1)
        resolve()
      })
    })
})

test('Get /game/:id works and renders the page', (t) => {
  return request(t.context.app)
    .get('/game/88801')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      return new Promise((resolve, reject) => {
        t.is($('h2').first().text(), 'The Legend of Zelda: Breath of the Wild')
        resolve()
      })
    })
})


test('Post to /user/99901/games/add works', (t) => {
  const addedGame = {
    game_name: 'Mario Kart 8 Deluxe',
    game_publisher_id: 2,
    date_purchased: "2017-04-25",
    game_series_id: 4,
    system_purchased_on_id: 1
  }
  return request(t.context.app)
    .post('/user/99901/games/add')
    .send(addedGame)
    .expect(302)
    .then((res) => {
      t.context.connection('games').select()
        .then((games) => {
          new Promise((resolve, reject) => {
            console.log(games);
            t.is(games.length, 4)
            resolve()
          })
        })
      })

})

test('Post to /edit returns a redirect and edit form works', (t) => {
  const editedUser = {
    user_username: 'Ziggy',
    user_first_name: 'Ginger',
    user_surname: 'Cat',
    id: 99903
  }
  return request(t.context.app)
    .post('/edit')
    .send(editedUser)
    .expect(302)
    .then((res) => {
      return t.context.connection('users').where('id',editedUser.id).first()
        .then((user) => {
          return new Promise((resolve, reject) => {
            t.is(user.user_username, "Ziggy")
            t.is(user.user_first_name, "Ginger")
            t.is(user.user_surname, "Cat")
            resolve()
          })
      })
    })
})
