import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props.user} || {
      user_username: '',
      user_first_name: '',
      user_surname: '',
      user_dob: ''
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
    return(
      <div className='addUserForm'>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Username: </label>
          <input type='text' name='user_username' placeholder = "Username" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>First name: </label>
          <input type='text' name='user_first_name' placeholder = "First Name" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Surname: </label>
          <input type='text' name='user_surname' placeholder = "Surname" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Date of birth:</label>
          <input class="datepicker" data-date-format="mm/dd/yyyy"/>
          {$('.datepicker').datepicker()}
          <input type='submit' value="Save"/>
        </form>
      </div>
    )
  }
}
