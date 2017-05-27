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

  componentWillReceiveProps(nextProps, nextState) {
   if (this.state != nextProps.user) {
     this.setState({...nextProps.user})
   }
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.saveCallback(this.state.user)
    this.setState({user: ''})
  }

  handleChange(evt) {
    let user = {...this.state.user}
    user[evt.target.name] = evt.target.value
    this.setState({user})
  }

  saveUser (evt) {
    evt.preventDefault()
    const user = this.state
    this.props.submitCallback(user)
  }

  render() {
    return(
      <div className='addUserForm'>
        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>Username: </label>
          <input type='text' name='user_username' value={this.state.user_username} placeholder = "Username" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>First name: </label>
          <input type='text' name='user_first_name' value={this.state.user_first_name} placeholder = "First Name" onChange={(evt =>this.handleChange(evt))}/><br/>
          <label>Surname: </label>
          <input type='text' name='user_surname' value={this.state.user_surname} placeholder = "Surname" onChange={(evt =>this.handleChange(evt))}/><br/>
           <input type='submit' value='add gamr' />
          <a href='#' onClick={this.props.cancelCallback}>Cancel</a>
        </form>
      </div>
    )
  }
}