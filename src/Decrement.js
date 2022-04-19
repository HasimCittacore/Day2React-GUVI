import React from 'react'

function Decrement(props) {
  return (
    <div>
        <button onClick={props.handleDecrement}>Decrement</button>
    </div>
  )
}

export default Decrement