import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import User from './User'
import Library from './Library'
import AddGame from './AddGame'
import EditUser from './EditUser'

const App = () => {
  return (
    <Router>
      <div>
        <Layout />
        <Route path="/" exact={true} component = {Home} />
        <Route path="/users/:id" component = {User} />
        <Route path="/users/:id/libraryview" component = {Library} />
        <Route path="/users/:id/games/add" component = {AddGame} />
        <Route path="/users/:id/edit" component = {EditUser} />
      </div>
    </Router>
  )
}

export default App
