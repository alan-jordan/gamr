import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.match.params.id,
      user: '',
      userGames: {}
      }
    }

    componentDidMount() {
      this.refreshUser()
    }

    refreshUser() {
      api.getUser(this.state.user_id, (user) => {
        this.setState({user})
      })
    }

    getUserGames() {
      api.getUserGames(this.state.user_id, (userGames) => {
        this.setState({userGames})
      })
    }

  render() {
    return (
      <div>

      </div>
    )
  }
}
