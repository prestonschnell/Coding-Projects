import React from 'react'
import Stack from './Stack'
import profile from '../assets/profile_pic.jpg'
import htmlIcon from '/html-icon.png'
import css from '/css.png'
import javascript from '/javascript.png'
import node from '/node.png'
import express from '/express.png'
import react from '/react.png'
import git from '/git.png'
import python from '/python.png'
import maya from '/maya.png'
import unreal from '/unreal.png'
import unity from '/unity.png'
import adobe from '/adobe.png'
import './About.css'
import Headers from './Headers'

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-section">
          <h1>Preston Schnell</h1>
            <img src={profile} alt="Profile Picture" />
            <p>Welcome to my page! My name is Preston and I'm a creative problem solver with a background in 3D art, full stack development, and self-taught software engineering. I’m drawn to the space where visuals, logic, and AI come together, whether it’s building sleek interfaces, writing clean code, or exploring how machine learning works under the surface. Over the years, I’ve balanced full-time work and study while teaching myself programming, graphics, and the math behind intelligent systems. The journey hasn’t been linear, but it’s made me adaptable, detail-focused, and committed to growth. Right now, I’m building tools that combine design and engineering, with long-term goals in SaaS, freelancing, and launching startups.</p>
        </div>
        {/* <Headers headers="Softwares" /> */}
        <div className="stack-container">
          {/* <h1 id="stack-header">Software Proficiency</h1> */}
          <div className="stack-icons">
            <Stack icon={htmlIcon} framework="HTML" />
            <Stack icon={css} framework="CSS" />
            <Stack icon={javascript} framework="JS" />
            <Stack icon={node} framework="NODE" />
            <Stack icon={express} framework="EXPRESS" />
            <Stack icon={react} framework="REACT" />
            <Stack icon={git} framework="GIT" />
            <Stack icon={python} framework="PYTHON" />
            <Stack icon={maya} framework="MAYA" />
            <Stack icon={unreal} framework="UE5" />
            <Stack icon={unity} framework="UNITY" />
            <Stack icon={adobe} framework="ACC" />
          </div>
        </div>
    </div>
  )
}

export default About
