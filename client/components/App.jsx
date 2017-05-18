import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import User from './User'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact={true} component = {Home} />
        <Route path="/user/:id" component = {User} />
      </div>
    </Router>
  )
}

export default App
