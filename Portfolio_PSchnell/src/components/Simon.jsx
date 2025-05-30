import React from 'react'
import "./Projects.css"
import simon from '../../public/simon.mp4'
/* import YouTubeEmbed from './YouTubeEmbed' */

const Simon = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
        <div className="image-container">
            <video width="1200" height="720" controls>
                <source src={simon} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Simon;
