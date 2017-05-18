import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component = {Home} />
    </Router>
  )
}

export default App
