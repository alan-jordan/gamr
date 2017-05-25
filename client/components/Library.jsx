import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'


export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: props.match.params.id,
      user: ''
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

  render() {
    return (
      <div>
        {console.log(this.state.user)}
      </div>
    )
  }
}
