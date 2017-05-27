import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import LibraryItem from './LibraryItem'


export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.match.params.id,
      user: '',
      userGames: {
        games: []
      }
    }
    this.getUser()
    this.getUserGames()
    }

  componentDidMount() {
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

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <ul>
            <li>Username: {this.state.user.user_username}</li>
            <li>Real name: {this.state.user.user_first_name} {this.state.user.user_surname}</li>
            <li></li>
          </ul>
        </div>
        <div className="col-md-10">
          <div className="libraryHeader">
            {this.state.userGames.games.map((game) => <LibraryItem game_id={game.id}/>)}
          </div>
      </div>
    </div>
    )
  }
}
