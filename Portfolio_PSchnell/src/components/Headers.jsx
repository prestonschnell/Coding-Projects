import React from 'react'
import './Headers.css'

const Headers = (props) => {
  return (
    <div className='headers-container'>
      <h1>{props.headers}</h1>
    </div>
  )
}

export default Headers
