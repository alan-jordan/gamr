import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import SearchGame from './SearchGame'
import ListSearchGameResults from './ListSearchGameResults'

export default class AddGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      game: {},
      games: {}
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    api.getUser(this.props.user_id, (user) => {
      this.setState({user})
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.saveCallback(this.state.game)
    this.setState({game: null})
  }

  handleChange(evt) {
    let game = {...this.state.game}
    game[evt.target.name] = evt.target.value
    this.setState({game})
  }

  searchGames (game) {

  }


  render() {
    return(
      <div className='addGameForm'>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Find a game: </label>
          <SearchGame user_id={this.state.user.id} searchGames={this.searchGames.bind(this)}/>
          <ListSearchGameResults games={this.state.games}/>
          <a href={`/#/users/${this.state.user.id}/library`} onClick={this.props.cancelCallback}>Cancel</a>
        </form>
      </div>
    )
  }
}
