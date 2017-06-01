import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

//a good rule is that anything inside a map shouldn't call an api directly and instead be given the data it needs from props
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
          <img className='profilePic' src = {this.state.user.user_image} />
        </div>
        <div className = 'col col-md-4'>
          <ul className='userDetails'>
            <li>Username: {this.state.user.user_username}</li>
            <li>Full name: {this.state.user.user_first_name}  {this.state.user.user_surname}</li>
            <li>Latest game: {this.state.latestGame ? this.state.latestGame.game_name : "No games registered yet"}</li>
            <li><Link to={`/users/${this.state.user.id}/library`}>View library</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
