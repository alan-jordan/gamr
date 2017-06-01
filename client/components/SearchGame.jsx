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

    addGame(evt) {
      //at the moment when you add the game the ui doesn't respond
      //try passing in a callback which you call here so the parent ui can refresh
      api.addGame(evt.target.value, this.state.user_id, (err) => {
        err ? console.log(err) : console.log("added");
      })
    }

    renderResults() {
      return(
        <div>
          {this.state.games && this.state.games.map((game, i) => {
            return <li key={i} className='addGameResult' value={game.id} onClick={(evt => this.addGame(evt))}>{game.name}</li>
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
      </div>
    )
  }
}
