import React from 'react'
import {Link} from 'react-router-dom'

const Layout = () => {
  return (
        <div className="header ">
            <a className="logo navbar-brand" href="/">gamr</a>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Login</a></li>
            <form className="navbar-form navbar-left">
              <div className="searchBar">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </ul>
        </div>
  )
}

export default Layout
