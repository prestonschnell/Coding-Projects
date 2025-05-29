import React from 'react'
import "./Projects.css"
import YouTubeEmbed from './YouTubeEmbed'

const VideoLeft = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
        <div className="image-container">
            <YouTubeEmbed videoId="ZlESNkp2mXw" />
        </div>
    </div>
  )
}

export default VideoLeft;
