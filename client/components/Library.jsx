import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'
import games from '../../data/games'
import userGames from '../../data/userGames'

const Library = ({match}) => {
  const user = users.find(user => {return user.id == match.params.id})

  let currentUsersGames = userGames.filter((userGame) => {
    return userGame.user_id == user.id
  })

  function getGame(game_id) {
    return games.find((game) => {
      return game.id == game_id
    })
  }

  function renderGamesLib(usersGames) {
    return usersGames.map((game) => {
      let gameDetails = getGame(game.game_id)
      return (
        <div className="thumb">
          <img src={gameDetails.game_box_art}/>
          <p>{gameDetails.game_name}</p>
        </div>
      )
    })
  }

  return (
    <div className="library">
      <div className="libraryHeader">
        {user.user_username}'s Games
      </div>
      {renderGamesLib(currentUsersGames)}
    </div>
  )
}

export default Library
