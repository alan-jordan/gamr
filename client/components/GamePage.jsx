import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class GamePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: props.game
    }
  }

  componentDidMount() {

  }

  render() {
    console.log(this.state.game);
    return(
      <div>
        <h1>{this.state.game.name}</h1>
        <div className='row'>
          <div className="col-md-3">
            <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${this.state.game.cover.cloudinary_id}.png`} />
          </div>
          <div className="col-md-9">
            <p><em>Summary:</em> {this.state.game.summary}</p>
            <p><em>Storyline:</em> {this.state.game.storyline}</p>
            <p><em>Rating:</em> {this.state.game.aggregated_rating}</p>
          </div>
        </div>
      </div>
    )
  }
}
