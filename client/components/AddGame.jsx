import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class AddGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      game: {}
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
    user[evt.target.name] = evt.target.value
    this.setState({game})
  }


  render() {
    return(
      <div className='addGameForm'>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Find a game: </label>
          <input type='text' name='game_name' value={this.state.user_username} placeholder = "Search for a game" onChange={(evt =>this.handleChange(evt))}/><br/>
          <input type='submit' value='add gamr' />
          <a href={`/#/users/${this.state.user.id}/library`} onClick={this.props.cancelCallback}>Cancel</a>
        </form>
      </div>
    )
  }
}
