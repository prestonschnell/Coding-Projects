import React from 'react'
import './About.css'

const Stack = (props) => {
  return (
    <div className='prop-container'>
      <img src={props.icon} alt="" />
      <h1>{props.framework}</h1>
    </div>
  )
}

export default Stack
