import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class LibraryItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game_id: props.game_id,
      game: {}
      }
    }

    componentDidMount() {
      this.getGame()
      this.getCoverArt
    }

    getGame() {
      api.getApiGame(this.state.game_id, (game) => {
        this.setState({game: game[0]})
      })
    }




  render() {
    return (
      <div className="col-lg-3 col-md-4 col-xs-6 thumb libraryItem">
          <div className="thumbnail" >
            <a href={`/games/igdb/${this.state.game_id}`}>
              {this.state.game.cover ? <img className='libraryImage' src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${this.state.game.cover.cloudinary_id}.png`}/> : <p>loading image</p>}
              <p>{this.state.game.name}</p>
            </a>
            <a href={`/games/igdb/${this.state.game_id}`}>Edit status</a>
          </div>
      </div>
    )
  }
}
