import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../api'
import Header from './Header'
import Home from './Home'
import Library from './Library'
import GameView from './GameView'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path ='/' exact={true} component = {Home} />
          <Route path ='/users/:id/library' exact={true} component={Library} />
          <Route path ='/games/:id' exact={true} component={GameView} />
        </div>
      </Router>
    )
  }
}
