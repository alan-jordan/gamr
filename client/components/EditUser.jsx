 import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'
import games from '../../data/games'
import userGames from '../../data/userGames'

class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        user_id: props.match.params.id,
        user_username: '',
        user_first_name: '',
        user_surname: ''
      }
    }
  }

  handleSubmit(evt) {
    evt.preventDefault()
  }
  handleChange(evt) {
    let user = {...this.state.user}
    user[evt.target.name] = evt.target.value
    this.setState({user})
  }
  render() {
    return (
      <span>
        <h3>Edit User</h3>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Username: </label>
          <input type='text' name='user_username' placeholder = "Username" onChange={(evt =>this.handleChange(evt))}/>
          <label>First name: </label>
          <input type='text' name='user_first_name' placeholder = "First Name" onChange={(evt =>this.handleChange(evt))}/>
          <label>Surname: </label>
          <input type='text' name='user_surname' placeholder = "Surname" onChange={(evt =>this.handleChange(evt))}/>
          <input type='submit' value="Save"/>
        </form>
      </span>
    )
  }
}

export default EditUser
