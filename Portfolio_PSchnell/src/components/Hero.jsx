import React from 'react'
import './hero.css'


const Hero = () => {
  return (
    <div className="hero-container">
      <h1 id='hero-header'>Hello, I'm Preston. I'm a Multimedia Developer.</h1>
      <button onClick={() => {
        window.scroll({
          top: 1325,
          behavior: 'smooth'
        })
      }}>View my Work</button>
    </div>
  )
}

export default Hero
