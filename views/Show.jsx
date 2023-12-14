import React from 'react'

function Show(props) {
  return (
      <>
          The
          <h1>{props.pokemon.name}</h1>is
          <img src={props.pokemon.img} alt={props.pokemon.name} />
      </>
  )
}

export default Show