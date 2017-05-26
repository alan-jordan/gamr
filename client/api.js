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
