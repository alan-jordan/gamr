import request from 'superagent'

export function getUsers(callback) {
  request
    .get('/api-v1/users')
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getUser(user_id, callback) {
  request
    .get(`/api-v1/users/${user_id}`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getLatestUsers(callback) {
  request
    .get('/api-v1/latestusers')
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function addUser(userObj, callback) {
  request
    .post('/api-v1/users/add')
    .send(userObj)
    .end((err, res) => {
      err ? callback(err) : callback(null)
    })
}

export function getUserLatestGame(user_id, callback) {
  request
    .get(`/api-v1/users/${user_id}/latestgame`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getGames(callback) {
  request
    .get(`/api-v1/games`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function getGame(game_id, callback) {
  request
    .get(`/api-v1/games/${game_id}`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function addGame(gameObj, user_id, callback) {
  request
    .post(`/api-v1/users/${user_id}/games/add`)
    .send(gameObj)
    .end((err, res) => {
      err ? callback(err) : callback(null)
    })
}


export function getUserGames(user_id, callback)  {
  request
    .get(`/api-v1/users/${user_id}/games`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}

export function searchStringIGDB(searchStr, callback) {
  request
    .get(`/api-v1/igdbapi/games/search/${searchStr}`)
    .end((err, res) => {
      err ? callback(err) : callback(res.body)
    })
}
