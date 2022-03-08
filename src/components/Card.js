import React from 'react'

function Card(props) {
  return (
    < div className ="card" id={props.id}>
        <img className ="card-image" src={props.image} alt="ok" />
    </div>
  )
}



export default Card;