import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
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
                <li>new gamer</li>
                <li>new gamer</li>
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
