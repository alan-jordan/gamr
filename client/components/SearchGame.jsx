import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class SearchGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: '',
      games: []
      }
    }

    componentDidMount() {
    }

    searchIgdb() {
      api.searchStringIGDB(this.state.searchStr, this.setState())
    }

    renderResults() {
      return this.state.games.map((game) => {
        console.log(game.name);
        return <p>{game.name}</p>
      })
    }


    handleChange(evt) {
      let searchStr = {...this.state.searchStr}
      [evt.target.name] = evt.target.value
      this.setState({searchStr})
      this.searchIgdb()

    }

  render() {
    return (
      <div id='addGameForm'>
        <input type='text' name='searchStr' value={this.state.searchStr} placeholder = "Search for a game" onChange={(evt =>this.handleChange(evt))}/><br/>
        {this.renderResults}
        <input type='submit' value='add game to collection' />
      </div>
    )
  }
}
