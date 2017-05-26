import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import UserInfo from './UserInfo'

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
    api.getLatestUsers((users) => {
      this.setState({users})
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          <h1>Welcome to gamr</h1>
          <p>
            We are a community of gamers from around the world who love to show off our games collections
            and talk about them to other gamers. Have a nosy around, find something you like the look of
            and have a chat about it.
          </p>
        </div>
        <div className="col-md-8">
          <div className="newGamrs">
            <h2>New gamrs</h2>
            {this.state.users.map(user => <UserInfo user_id={user.id}/>)}
          </div>
        </div>
      </div>
    )
  }
}
