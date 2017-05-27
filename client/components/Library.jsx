import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import LibraryRender from './LibraryRender'


export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.match.params.id,
      user: '',
      userGames: []
      }
    }

    componentDidMount() {
      this.getUser()
    }

    getUser() {
      api.getUser(this.state.user_id, (user) => {
        this.setState({user})
      })
      this.getUserGames()
    }

    getUserGames() {
      api.getUserGames(this.state.user_id, (userGames) => {
        this.setState({userGames})
      })
    }

    renderGames() {
      return this.state.userGames.games.map((game) => {
        return (
          <div className="col-lg-3 col-md-4 col-xs-6 thumb">
           <div className="thumbnail" >
             <a href={`/game/${game.game_id}`}>
             <img src={gam.game_box_art} className="img-responsive" alt={game.game_name} />
             <p>{game.game_name}</p>
             </a>
             <a href="/user">Edit status</a>
            </div>
          </div>
        )
      })

    }

  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          test
        </div>
        <div className="col-md-10">
          <div className="libraryHeader">
            {this.renderGames()}
          </div>
      </div>
    </div>
    )
  }
}
