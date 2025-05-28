import React from 'react'
import "./Projects.css"

const ProjectsRight = (props) => {
  return (
    <div className='projects-container'>
        <div className="project-info">
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Learn More</button>
        </div>
        <div className="image-container">
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default ProjectsRight
