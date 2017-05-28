import React from 'react'

export default (props) => {
  console.log(props);
  return (
    <div>
      <ul>
      {props.games.map((game, i) => {
        return (<li key={i}><a href={game.id} target='_blank'>{game.name}</a></li>)
      })}
      </ul>
    </div>
  )

}
