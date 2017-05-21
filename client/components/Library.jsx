import React from 'react'
import {Link} from 'react-router-dom'
import User from './User'
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
        <div className="col-lg-3 col-md-4 col-xs-6 thumb">
            <div className="thumbnail" >
              <a href={`/game/${game.game_id}`}>
                <img src={gameDetails.game_box_art} className="img-responsive" alt={gameDetails.game_name} />
                <p>{game.game_name}</p>
              </a>
              <a href="/user">Edit status</a>
            </div>
        </div>
      )
    })
  }

  return (
    <div className="row">
      <div className="col-md-4">
        <User user_id={match.params.id}/>
      </div>
      <div className="col-md-8">
        <div className="libraryHeader">
          {user.user_username}'s Games
        </div>
        {renderGamesLib(currentUsersGames)}
      </div>
    </div>
  )
}

export default Library
