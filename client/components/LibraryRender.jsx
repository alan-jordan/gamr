import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class LibraryRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.props.game
      }
    }

    componentDidMount() {
    }




  render() {
    return (
      <div className="col-lg-3 col-md-4 col-xs-6 thumb">
        <div className="thumbnail" >
          <a href={`/game/${this.game.game_id}`}>
          <img src={this.game.game_box_art} className="img-responsive" alt={this.game.game_name} />
          <p>{this.game.game_name}</p>
          </a>
          <a href="/user">Edit status</a>
        </div>
      </div>
    )
  }
}
