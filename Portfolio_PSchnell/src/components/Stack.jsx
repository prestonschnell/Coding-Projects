import React from 'react'

const Stack = (props) => {
  return (
    <div>
      <img src={props.icon} alt="" />
      <h1>{props.framework}</h1>
    </div>
  )
}

export default Stack
