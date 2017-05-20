import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'

const User = ({match}) => {
  const user = users.find(user => {return user.id = match.params.id})
  return (
    <div className="userPage">
      <div className = "userInfo">
        <img src="/images/users/image"/>
        <ul>
            <li className="userInfoList">Username: {user.user_username}</li>
            <li className="userInfoList">Real name: {user.user_first_name} {user.user_surname}</li>
            <li className="userInfoList">Systems owned: </li>
            <li className="userInfoList">Date joined: {user.user_date_registered}</li>
          </ul>
          <ul>
            <li>------</li>
            <li>Do stuff</li>
            <li><a href={`/user/${user.id}/games/add`}>add game</a></li>
            <li><a href={`/user/${user.id}/edit`}>edit user info</a></li>
            <li><a href="/">home</a></li>
          </ul>
      </div>
    </div>
  )
}

export default User
