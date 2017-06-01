import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import UserInfo from './UserInfo'
import AddUser from './AddUser'



export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      addVisible: null,
      error: null
    }
  }

  componentDidMount() {
    this.refreshUsers()
  }

  renderUsers(users) {
    this.setState({
      users: users || []
    })
  }

  refreshUsers(error) {
    this.setState({
      error: error,
      addVisible: false
    })
    api.getLatestUsers(this.renderUsers.bind(this))
  }



  saveUser(user) {
    api.addUser(user, (err) => {
      err ? console.log(err) : this.refreshUsers()
    })
  }

  addFormVisible() {
    this.setState({addVisible: true})
  }

  addFormInvisible() {
    this.setState({addVisible: false})
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
              <p><a id='show-add-link' href='#' onClick={(e) => this.addFormVisible(e)}>Add user</a></p>
              {this.state.addVisible && <AddUser
              saveCallback={this.saveUser.bind(this)}
              cancelCallback={this.addFormInvisible.bind(this)}
              />}
              {}
              {
                //at the moment your home page hits your api 6 times because each UserInfo component calls it individually
                //try getting all the info for the new users in one go and passing them down as props to userInfo
              }
            {this.state.users.length > 0 && this.state.users.map(user => <UserInfo user_id={user.id}/>)}
          </div>
        </div>
      </div>
    )
  }
}
