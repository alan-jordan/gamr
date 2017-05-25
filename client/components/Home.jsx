import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.refreshUsers()
  }

  refreshUsers() {
    api.getUsers((users) => {
      this.setState({users})
    })
  }

  renderUsersInfo() {
    return this.state.users.map((user) => {
      return (
        <div className ='userInfo row'>
          <div className = 'col col-md-2'>
            <img className='profilePic' src = {`/images/users/${user.id}.jpg`} />
          </div>
          <div className = 'col col-md-4'>
            <ul className='userDetails'>
              <li>Username: {user.user_username}</li>
              <li>Full name: {user.user_first_name}  {user.user_surname}</li>
              <li>Last game added: </li>
              <li><Link to={`/users/library/${user.id}`}>View library</Link></li>
            </ul>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Welcome to gamr</h1>
          <p>
            We are a community of gamers from around the world who love to show off our games collections
            and talk about them to other gamers. Have a nosy around, find something you like the look of
            and have a chat about it.
          </p>
          <div className="newGamrs">
            <h2>New gamrs</h2>
            {this.renderUsersInfo()}
          </div>
        </div>
      </div>
    )
  }
}
