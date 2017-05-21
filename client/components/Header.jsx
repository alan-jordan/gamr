import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid header ">
        <div className="navbar-header">
          <a className="logo navbar-brand" href="/">gamr</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Login</a></li>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </ul>
      </div>
    </nav>
  )
}

export default Header
