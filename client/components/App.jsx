import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import User from './User'
import Library from './Library'

const App = () => {
  return (
    <Router>
      <div>
        <Layout />
        <Route path="/" exact={true} component = {Home} />
        <Route path="/users/:id" component = {User} />
        <Route path="/users/:id/libraryview" component = {Library} />
      </div>
    </Router>
  )
}

export default App
