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

const About = () => {
  return (
    <div className='about-container'>
        <div className="about-section">
          <h1>Preston Schnell</h1>
            <img src={profile} alt="Profile Picture" />
            <p>Hi, I’m a creative problem solver with a background in 3D art, web development, and self-taught software engineering. I’ve always been drawn to the space where visuals and logic meet, whether it’s building sleek interfaces, diving into code, or learning how computer vision works under the hood. Over the years, I’ve balanced full-time work and study while teaching myself programming, graphics, and the math behind machine learning. It hasn’t been a straight path, but it’s made me adaptable, curious, and driven to keep improving. Right now, I’m focused on building projects that combine design and engineering, with a long-term goal of launching tools that help others create.</p>
        </div>
        <div className="stack-container">
          <h1 id="stack-header">Software Proficiency</h1>
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
