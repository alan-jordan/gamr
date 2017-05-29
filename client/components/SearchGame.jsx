import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'
import RenderSearchResults from './RenderSearchResults'

export default class SearchGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: '',
      games: [],
      user_id: this.props.user_id
      }
    }

    componentDidMount() {
      api.searchStringIGDB(null, this.renderResults.bind(this))
      console.log(this.props);
    }

    searchIgdb() {
      api.searchStringIGDB(this.state.searchStr, (games) => {
        this.setState({games})
      })
    }

    handleChange(evt) {
      evt.preventDefault()
      let searchStr = {...this.state.searchStr}
      [evt.target.name] = evt.target.value
      this.setState({searchStr})
      this.searchIgdb()
    }

    addGame(user_id, game_id) {

    }

    renderResults() {
      return(
        <div>
          {this.state.games.map((game, i) => {
            return <li key={i} className='addGameResult' ><a href={`/#/users/${this.state.user_id}/library`} onClick={this.addGame(this.state.user_id, game.id)}>{game.name}</a></li>
          })}
        </div>
      )
    }

  render() {
    return (
      <div id='addGameForm'>
        <input type='text' name='searchStr' value={this.state.searchStr} placeholder = "Search for a game" onChange={(evt =>this.handleChange(evt))}/><br/>
        <ul className='addGame'>
        {this.renderResults()}
        </ul>
        <input type='submit' value='add game to collection' />
      </div>
    )
  }
}
