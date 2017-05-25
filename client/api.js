import request from 'superagent'

export function getUsers(callback) {
  request
    .get('/api-v1/users')
    .end((err, res) => {
      callback(res.body)
    })
}
