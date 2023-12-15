import React from 'react'

function Show(props) {
  return (
    <>
    Pokemon
        <h1>{props.pokemon.name}</h1>
        <img src={props.pokemon.img} alt={props.pokemon.name} />
    
    </>
  )
}

export default Show