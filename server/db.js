module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  updateUser: updateUser,
  addUser: addUser,
  deleteUser: deleteUser,
  getGame: getGame,
  getGames: getGames,
  addGame: addGame,
  deleteGame: deleteGame,
  getUserGames: getUserGames,
  addUserGames: addUserGames,
  viewGameOwned: viewGameOwned,
  getNumUsers: getNumUsers
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id).first()
}

function getNumUsers(num, connection) {
  return connection('users').limit(num).orderBy('user_date_registered', 'desc')
}

function addUser (userObj, connection) {
  return connection('users')
    .insert(userObj)
}

function updateUser(id, userObj, connection) {
  return connection('users')
    .where('id', id)
    .update(userObj)
}

function deleteUser(id, connection) {
  return connection('users')
    .where('id', id)
    .del()
}

function getGame (id, connection) {
  return connection('games').where('id', id)
}

function getGames (connection) {
  return connection('games').select()
}

function addGame(gameObj, connection) {
  return connection('games')
    .insert({
    game_name: gameObj.game_name,
    game_publisher_id: gameObj.game_publisher_id,
    game_release_date: gameObj.game_release_date,
    game_series_id: gameObj.game_series_id
  })
}

function deleteGame(id, connection) {
  return connection('games')
    .where('id', id)
    .del()
}

function getUserGames(user_id, connection) {
  return connection('userGames').select('*', 'userGames.id as userGames_id')
    .where('user_id', user_id)
    .join('games', "games.id","=","game_id")
}

function addUserGames(user_id, gameObj, connection) {
  return addGame(gameObj, connection)
    .then((game_id) => {
      return connection('userGames')
        .insert({
          game_id: game_id[0],
          user_id: user_id,
          date_purchased: gameObj.date_purchased,
          system_purchased_on_id: gameObj.system_purchased_on
        })
    })
}

function viewGameOwned(id, connection) {
  return connection('userGames')
    .where('id', id)
}
