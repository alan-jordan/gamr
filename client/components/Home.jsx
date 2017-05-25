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
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <h1>Welcome to gamr</h1>
          <p>
            We are a community of gamers from around the world who love to show off our games collections
            and talk about them to other gamers.
          </p>
          <div className="newGamrs">
            <h2>New gamrs</h2>
    
            <ul>
              {this.state.users.map(user => <li>{user.user_username}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
