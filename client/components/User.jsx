import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'
console.log(users);
const User = () => {
  return (
    <div classNameName="userPage">
      <div className = "row">
        <div className = "col col-md-8">
          a
          </div>
        <div className = "userInfo col col-md-4">
          <img src="/images/users/image"/>
          <ul>
              <li className="userInfoList">Username: </li>
              <li className="userInfoList">Real name:</li>
              <li className="userInfoList">Systems owned: </li>
              <li className="userInfoList">Date joined: </li>
            </ul>
            <ul>
              <li>------</li>
              <li>Do stuff</li>
              <li><a href="/user/id/games/add">add game</a></li>
              <li><a href="/user/id/edit">edit user info</a></li>
              <li><a href="/">home</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default User
