 import React from 'react'
import {Link} from 'react-router-dom'
import User from './User'
import users from '../../data/users'
import games from '../../data/games'
import userGames from '../../data/userGames'

class AddGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userGame: {
        game_name: '',
        user_id: props.match.params.id
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
      <div className="row">
        <div className="col-md-4">
          <User user_id={this.state.userGame.user_id}/>
        </div>
        <div className="col-md-8">
          <h3>Add Game</h3>
          <form onSubmit={(evt) => this.handleSubmit(evt)}>
            <label>Game name: </label>
            <input type='text' name='game_name' placeholder = "New game" onChange={(evt =>this.handleChange(evt))}/>
            <input type='submit' value="Add to library"/>
          </form>
        </div>
      </div>
    )
  }
}

export default AddGame
