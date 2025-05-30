import React from 'react'
import "./Projects.css"
import ImageScroller from './ImageScroller';
import nasaSlides from './nasaSlides';

const NASA = (props) => {
  
  return (
    <div className='projects-container'>
        <div className="image-container">
            <ImageScroller slides={nasaSlides} />
        </div>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button><a href="https://youtu.be/HJdCKg5w5fM?si=f0BiN1Vs1MieORsU" target='_blank'>Learn More</a></button>
        </div>
    </div>
  )
}

export default NASA
