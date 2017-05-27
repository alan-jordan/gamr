import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.match.params.id,
      user: '',
      userGames: []
      }
    }

    componentDidMount() {
      this.getUser()
    }

    getUser() {
      api.getUser(this.state.user_id, (user) => {
        this.setState({user})
      })
      this.getUserGames()
    }

    getUserGames() {
      api.getUserGames(this.state.user_id, (userGames) => {
        this.setState({userGames})
      })
    }



  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          test
        </div>
        <div className="col-md-10">
          <div className="libraryHeader">

          </div>
      </div>
    </div>
    )
  }
}
