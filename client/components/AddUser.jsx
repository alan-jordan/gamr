import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }


  handleSubmit(evt) {
    evt.preventDefault()
    this.props.saveCallback(this.state.user)
    this.setState({user: null})
  }

  handleChange(evt) {
    let user = {...this.state.user}
    user[evt.target.name] = evt.target.value
    this.setState({user})
  }


  render() {
    return(
      <div className='addUserForm'>
        <form className='addUserForm' onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Username: </label>
          <input type='text' name='user_username' value={this.state.user_username} placeholder = "Username" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>First name: </label>
          <input type='text' name='user_first_name' value={this.state.user_first_name} placeholder = "First Name" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Surname: </label>
          <input type='text' name='user_surname' value={this.state.user_surname} placeholder = "Surname" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Avatar Image: </label>
          <input type='text' name='user_image' value={this.state.user_image} placeholder = "Avatar image URL" onChange={(evt =>this.handleChange(evt))}/><br/>
          <input type='submit' value='add gamr' />
          <a href='#' onClick={this.props.cancelCallback}>Cancel</a>
        </form>
      </div>
    )
  }
}
