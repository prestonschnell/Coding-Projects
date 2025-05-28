import React from 'react'
import './Headers.css'

const Headers = (props) => {
  return (
    <div className='headers-container'>
      <div className="headers-box">
        <h1>{props.headers}</h1>
      </div>
    </div>
  )
}

export default Headers
