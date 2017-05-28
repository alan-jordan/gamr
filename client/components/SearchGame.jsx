import React from 'react'
import {Link} from 'react-router-dom'

import * as api from '../api'

export default class SearchGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchStr: ''
      }
    }

    componentDidMount() {
    }

    searchIgdb() {
      api.searchStringIGDB(this.state.searchStr, console.log)
    }

    renderSearchResults() {

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
        <input type='submit' value='add game to collection' />
      </div>
    )
  }
}
