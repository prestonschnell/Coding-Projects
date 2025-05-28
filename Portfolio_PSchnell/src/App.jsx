import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsLeft from './components/ProjectsLeft'
import ProjectsRight from './components/ProjectsRight'
import Contact from './components/Contact'
import Headers from './components/Headers'

const App = () => {
  return (
    <div>
      <Hero/>
      <Nav/>
      <Headers headers="About Me"/>
      <About/>
      <Headers headers="Projects"/>
      <ProjectsLeft image="https://cdnb.artstation.com/p/assets/images/images/087/530/093/large/preston-schnell-stonebridge-v1-02.jpg?1746025436" name="StoneBridge" description="A project made in Autodesk Maya, using different tools and scripted shelves to optimize efficiency and achieve hyper-realism."/>
      <ProjectsRight image="https://cdnb.artstation.com/p/assets/images/images/087/528/723/large/preston-schnell-indianapolis-final-render.jpg?1746023185" name="Hilton Indianapolis" description="A project made in Autodesk Maya" />
      <Contact />
    </div>
  )
}

export default App
