import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact={true} component = {Home} />
      </div>
    </Router>
  )
}

export default App
