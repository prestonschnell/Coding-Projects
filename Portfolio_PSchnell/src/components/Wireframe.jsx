import React from 'react'
import "./Projects.css"
import cube from '../../public/OpenGL_Wireframe Cube.mp4'
/* import YouTubeEmbed from './YouTubeEmbed' */

const Wireframe = (props) => {
  return (
    <div className='projects-container'>
        <div className="image-container">
            <video width="1200" height="720" controls>
                <source src={cube} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
    </div>
  )
}

export default Wireframe;
