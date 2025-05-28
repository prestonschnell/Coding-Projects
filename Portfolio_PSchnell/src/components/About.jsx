import React from 'react'
import Stack from './Stack'
import profile from '../assets/profile_pic.jpg'
import htmlIcon from '../../public/html-icon.png'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-section">
          <h1>About Me</h1>
            <img src={profile} alt="Profile Picture" />
            <p>Hi, I’m a creative problem solver with a background in 3D art, web development, and self-taught software engineering. I’ve always been drawn to the space where visuals and logic meet, whether it’s building sleek interfaces, diving into code, or learning how computer vision works under the hood. Over the years, I’ve balanced full-time work and study while teaching myself programming, graphics, and the math behind machine learning. It hasn’t been a straight path, but it’s made me adaptable, curious, and driven to keep improving. Right now, I’m focused on building projects that combine design and engineering, with a long-term goal of launching tools that help others create.</p>
        </div>
        <div className="stack-container">
            <Stack icon={htmlIcon} framework="HTML" />
        </div>
    </div>
  )
}

export default About
