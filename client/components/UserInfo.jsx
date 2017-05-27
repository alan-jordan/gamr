import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.user_id,
      user: {},
      latestGame: {}
      }
    }

    componentDidMount() {
      this.getUser()
      this.getUserLatestGame()
    }

    getUser() {
      api.getUser(this.state.user_id, (user) => {
        this.setState({user})
      })
    }
    getUserLatestGame() {
      api.getUserLatestGame(this.state.user_id, (latestGame) => {
        this.setState({latestGame})
      })
    }

  render() {
    return (
      <div className ='userInfo row'>
        <div className = 'col col-md-3'>
          <img className='profilePic' src = {`/images/users/${this.state.user_id}.jpg`} />
        </div>
        <div className = 'col col-md-4'>
          <ul className='userDetails'>
            <li>Username: {this.state.user.user_username}</li>
            <li>Full name: {this.state.user.user_first_name}  {this.state.user.user_surname}</li>
            <li><Link to={`/users/${this.state.user.id}/library`}>View library</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
