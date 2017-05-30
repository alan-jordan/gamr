import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import LibraryItem from './LibraryItem'
import AddGame from './AddGame'


export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.match.params.id,
      user: '',
      userGames: {
        games: []
      },
      addFormVisible: false
    }

    }

  componentDidMount() {
    this.getUser()
    this.getUserGames()
  }

  getUser() {
    api.getUser(this.state.user_id, (user) => {
      this.setState({user})
    })
  }

  getUserGames() {
    api.getUserGames(this.state.user_id, (userGames) => {
      this.setState({userGames})
    })
  }
  addFormVisible() {
    this.setState({addFormVisible: true})

  }
  addFormInvisible() {
    this.setState({addFormVisible: false})
  }
  addGame() {
    console.log("test");
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li className='libraryUser'>Username: {this.state.user.user_username}</li>
            <li className='libraryUser'>Real name: {this.state.user.user_first_name} {this.state.user.user_surname}</li>
            <li><a id='show-addGame-link' href={`/#/users/${this.state.user_id}/library`} onClick={(e) => this.addFormVisible(e)}>Add game</a></li>
            {this.state.addFormVisible && <AddGame
            user_id={this.state.user_id}
            saveCallback={this.addGame.bind(this)}
            cancelCallback={this.addFormInvisible.bind(this)}
            />}
          </ul>
        </div>
        <div className="library">
          {this.state.userGames.games.map((game) => <LibraryItem game_id={game.igdb_id}/>)}
        </div>
      </div>
    )
  }
}
