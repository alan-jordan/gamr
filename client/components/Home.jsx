import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'

const Home = () => {

  function mapUsers(users) {
    return users.map((user) => {
      return (
        <span>
          <li><img src='/images/site/favicon.ico'/></li>
          <li><Link to={`/user/${user.id}`}>Username: {user.user_username}</Link></li>
          <li>Latest Game:</li>
        </span>
      )
    })
  }

  return (
      <div className="row">
        <div className="col col-md-8 intro">
          <h2>Welcome to gamr</h2>
          <p>
            We are a community of gamers from around the world who love to show off our games collections
            and talk about them to other gamers.
          </p>
          <div className="newGamrs">
            <h2>New gamrs</h2>
              <ul>
                {mapUsers(users)}
                <li></li>
              </ul>
          </div>
        </div>
        <div className="col col-md-4">
          <h2>Cool stats</h2>
          <h3 >Most popular games</h3>
          <h3 >Most popular systems</h3>
          <h3 >Most popular genres</h3>
        </div>
    </div>
  )
}

export default Home
