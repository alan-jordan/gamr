import React from 'react'
import {Link} from 'react-router-dom'
import users from '../../data/users'

const User = (props) => {

  const id = props.user_id || props.match.params.id
  const user = users.find(user => {return user.id == id})
  return (
      <div className = "userInfo">
        <img className="user_image" src={user.user_image}/>
        <ul>
            <li className="userInfoList">Username: {user.user_username}</li>
            <li className="userInfoList">Real name: {user.user_first_name} {user.user_surname}</li>
            <li className="userInfoList">Systems owned: </li>
            <li className="userInfoList">Date joined: {user.user_date_registered}</li>
          </ul>
          <ul>
            <li>------</li>
            <li>Do stuff</li>
            <li><a href={`/#/users/${user.id}/games/add`}>add game</a></li>
            <li><a href={`/#/users/${user.id}/edit`}>edit user info</a></li>
            <li><a href={`/#/users/${user.id}/libraryview`}>view library</a></li>
            <li><a href="/#/">home</a></li>
          </ul>
      </div>
  )
}

export default User
