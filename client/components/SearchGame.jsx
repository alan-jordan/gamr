import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class SearchGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      }
    }

    componentDidMount() {
    }



  render() {
    return (
      <div >
        <input type='text' name='game_name' value='test' placeholder = "Search for a game" onChange={(evt =>this.handleChange(evt))}/><br/>
        <input type='submit' value='add gamr' />
      </div>
    )
  }
}
