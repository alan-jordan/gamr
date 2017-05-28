var request = require('superagent')
var igdb = require('igdb-api-node')

var url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'
global.mashapeKey = '8XrLHLkRxlmshascF7n3mXc7CtoVp1RQN3Yjsn4ISq8ddFmTDT'

function searchGames(callback, searchStr) {
  request
    .get(`${url}/games/?fields=name&limit=20&offset=0&search=${searchStr}`)
    .set('X-Mashape-Key', mashapeKey)
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if(err) {
        callback('Oh no error!' + err)
    } else {
     callback(null, res.body)
    }
  })
}

function displayGame(callback, id) {
  request
    .get(`${url}/games/${id}?fields=cover`)
    .set('X-Mashape-Key', mashapeKey)
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if(err) {
        callback('Oh no error!' + err)
      } else {
        callback(null, res.body)
      }
    })
}

searchGames(console.log, 'Sonic the Hedgehog')
