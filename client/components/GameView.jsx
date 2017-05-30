import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import GamePage from './GamePage'

export default class Library extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game_id: props.match.params.id,
      gameRes: {}
    }
  }

  componentDidMount() {
    api.getApiGame(this.state.game_id, (game) => {
      let gameRes = game[0]
      this.setState({gameRes})
    })
  }

  render() {
    console.log(this.state);
    return(
      <div>
        {this.state.gameRes.name && <GamePage game={this.state.gameRes} />}
      </div>
    )
  }
}
