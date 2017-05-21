 import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'
import games from '../../data/games'
import userGames from '../../data/userGames'

class AddGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userGame: {
        game_name: '',
        user_id: ''
      }
    }
  }

  handleSubmit(evt) {
    evt.preventDefault()
  }
  handleChange(evt) {
    let userGame = {...this.state.userGame}
    userGame[evt.target.name] = evt.target.value
    this.setState({userGame})
  }
  render() {
    return (
      <span>
        <h3>Add Game</h3>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Game name: </label>
          <input type='text' name='game_name' placeholder = "New game" onChange={(evt =>this.handleChange(evt))}/>
          <input type='submit' value="Add to library"/>
        </form>
      </span>
    )
  }
}

export default AddGame
