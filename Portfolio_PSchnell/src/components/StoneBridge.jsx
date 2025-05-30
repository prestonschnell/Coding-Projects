import React from 'react'
import "./Projects.css"
import ImageScroller from './ImageScroller';
import stoneBridgeSlides from './stoneBridgeSlides';

const StoneBridge = (props) => {
  
  return (
    <div className='projects-container'>
        <div className="image-container">
            <ImageScroller slides={stoneBridgeSlides} />
        </div>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default StoneBridge
