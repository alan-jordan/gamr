module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getGame: getGame,
  getGames: getGames,
  getUserGames: getUserGames,
  editUser: editUser,
  addGame: addGame,
  viewGameOwned: viewGameOwned
}

function getUsers (connection) {
  return connection('users').select()
}

function getUser (id, connection) {
  return connection('users').where('id', id)
}

function getGame (id, connection) {
  return connection('games').where('id', id)
}

function getGames (connection) {
  return connection('games').select()
}

function getUserGames(user_id, connection) {
  return connection('userGames').select('*', 'userGames.id as userGames_id')
    .where('user_id', user_id)
    .join('games', "games.id","=","game_id")
}

function editUser(id, userObj, connection) {
  return connection('users')
    .where('id', id)
    .update({
      user_username: userObj.user_username,
      user_first_name: userObj.user_first_name,
      user_surname: userObj.user_surname
    })
}

function addGame(user_id, gameObj, connection) {
  return connection('games')
    .insert({
      game_name: gameObj.game_name,
      game_publisher_id: gameObj.game_publisher,
      game_release_date: gameObj.game_release_date,
      game_series_id: gameObj.game_series
    })
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
