import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsLeft from './components/ProjectsLeft'
import ProjectsRight from './components/ProjectsRight'
import Contact from './components/Contact'
import Headers from './components/Headers'
import VideoLeft from './components/VideoLeft'
import VideoRight from './components/VideoRight'

const App = () => {
  return (
    <div>
      <Hero/>
      <Nav/>
      <Headers headers="About Me"/>
      <About/>
      <Headers headers="Projects"/>
      <VideoLeft  name="ZenScape" description="ZenScape is an immersive VR experience designed to help users train task management in a VR office space. It provides cognitive tasks amidst various sensory distractions. The difficulty of these distractions is controlled by the user's heart rate, monitored by a pulse sensor, as heart rate is a good indicator of cognitive load which directly affects task management abilities. We utilized Unity as our game engine to create an immersive and realistic VR experience. By simulating fine motor skills and providing realistic auditory and visual feedback, users are engaged in a highly interactive environment."  />
      <ProjectsLeft image="https://cdnb.artstation.com/p/assets/images/images/087/530/093/large/preston-schnell-stonebridge-v1-02.jpg?1746025436" name="StoneBridge" description="For Stonebridge's annual leadership conference in New Orleans, I designed, modeled, and rendered a complete 3D environment of Le Meridien Hotel's Esplanade Ballroom. Featuring over three unique stage designs inspired by traditional New Orleans themes, the project showcased advanced 3D modeling and PBR lighting techniques, paired with ongoing client collaboration to ensure each detail aligned with their vision."/>
      <ProjectsRight image="https://cdnb.artstation.com/p/assets/images/images/087/528/723/large/preston-schnell-indianapolis-final-render.jpg?1746023185" name="Hilton Indianapolis" description="For the Hilton Indianapolis Christmas Event 2025, I designed a festive 3D environment using Autodesk Maya, Adobe Creative Cloud, Unreal Engine, and Substance Painter. This project deepened my expertise in PBR texturing and lighting techniques, while also refining my client communication skills to ensure an accurate and visually engaging pre-production render of the event." />
      <ProjectsLeft image="https://cdnb.artstation.com/p/assets/images/images/087/529/189/large/preston-schnell-cfbhof-render-02.jpg?1746024053" name="SEC Media Day" description="For SEC Media Day 2025 at the College Football Hall of Fame in Atlanta, I created an immersive 3D environment using Autodesk Maya, Adobe Creative Cloud, and custom tooling to streamline object attribute manipulation. The design blends bold architectural elements with dynamic lighting to capture the energy and prestige of college football’s biggest stage."   />
      <VideoRight name="Brave Ones RPG" description="Brave Ones is a turn-based RPG built in PyGame featuring AI-driven enemy behavior that adapts dynamically to player actions based on health, turn order, and damage probabilities. The game includes a custom frame-based animation system and a responsive UI with real-time feedback, blending AI concepts with immersive visual design to create a compelling gameplay experience." />
      <Contact />
    </div>
  )
}

export default App
