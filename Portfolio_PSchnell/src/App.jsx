import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsLeft from './components/ProjectsLeft'
import ProjectsRight from './components/ProjectsRight'
import Contact from './components/Contact'
import Headers from './components/Headers'
import VideoLeft from './components/VideoLeft'
import Brave from './components/Brave'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StoneBridge from './components/StoneBridge'
import SEC from './components/SEC'
import Hilton from './components/Hilton'
import NASA from './components/NASA'
import Simon from './components/Simon'
import Wireframe from './components/Wireframe'
import ToDo from './components/toDo'


const App = () => {
  return (
    <div>
      <Hero/>
      <Nav/>
      <Headers headers="About Me"/>
      <About/>
      <Headers headers="Projects"/>
      <VideoLeft  name="ZenScape" description="ZenScape is an immersive VR experience designed to help users train task management in a VR office space. It provides cognitive tasks amidst various sensory distractions. The difficulty of these distractions is controlled by the user's heart rate, monitored by a pulse sensor, as heart rate is a good indicator of cognitive load which directly affects task management abilities. We utilized Unity as our game engine to create an immersive and realistic VR experience. By simulating fine motor skills and providing realistic auditory and visual feedback, users are engaged in a highly interactive environment."  />
      <NASA name="NASA Summer Internship" description="During my Summer 2023 internship at NASA’s Michoud Assembly Facility, I created detailed 3D models of industrial scaffolding, precision weld tools, and rocket assembly structures as part of a digital twin initiative in Unreal Engine 5. Each project required me to quickly learn new tools, optimize geometry for performance, and apply real world reference materials under tight deadlines of two to three days. These projects strengthened my ability to manage complex tasks efficiently, communicate across technical teams, and deliver production ready assets with a high level of accuracy."/>
      <Hilton name="Hilton Indianapolis" description="For the Hilton Indianapolis Christmas Event 2025, I designed a festive 3D environment using Autodesk Maya, Adobe Creative Cloud, Unreal Engine, and Substance Painter. This project deepened my expertise in PBR texturing and lighting techniques, while also refining my client communication skills to ensure an accurate and visually engaging pre-production render of the event." />
      <SEC name="SEC Media Day" description="For SEC Media Day 2025 at the College Football Hall of Fame in Atlanta, I created an immersive 3D environment using Autodesk Maya, Adobe Creative Cloud, and custom tooling to streamline object attribute manipulation. The design blends bold architectural elements with dynamic lighting to capture the energy and prestige of college football’s biggest stage."   />
      <Brave name="Brave Ones RPG" description="Brave Ones is a turn-based RPG built in PyGame featuring AI-driven enemy behavior that adapts dynamically to player actions based on health, turn order, and damage probabilities. The game includes a custom frame-based animation system and a responsive UI with real-time feedback, blending AI concepts with immersive visual design to create a compelling gameplay experience." />
      <StoneBridge name="StoneBridge" description="For Stonebridge's annual leadership conference in New Orleans, I designed, modeled, and rendered a complete 3D environment of Le Meridien Hotel's Esplanade Ballroom. Featuring over three unique stage designs inspired by traditional New Orleans themes, the project showcased advanced 3D modeling and PBR lighting techniques, paired with ongoing client collaboration to ensure each detail aligned with their vision."/>
      <Simon name="Simon Says Game" description="This interactive memory game simulates the classic Simon Game using JavaScript and jQuery, demonstrating a strong understanding of event handling, DOM manipulation, and logic control. The code dynamically generates color sequences, tracks user input, and provides immediate feedback through sound and animation, showcasing principles of state management and recursion through function calls like `nextSequence()` and `checkAnswer()`. It reflects an ability to build event-driven applications and apply core computer science skills such as arrays, conditionals, and modular function design."/>
      <Wireframe name="OpenGL Wireframe Cube" description="This project demonstrates a rotating wireframe cube rendered using Python with OpenGL and Pygame, built entirely from manually defined vertex and triangle data. By structuring the cube through raw geometry and rendering logic, I gained a deeper understanding of 3D transformations, projection matrices, and low-level graphics programming. The result reflects foundational skills in computer graphics and real-time rendering pipelines."/>
      <ToDo name="To-Do List App" description="This to-do list app offers a clean, functional interface for adding, checking off, and deleting tasks, with persistent storage handled through localStorage. The project reflects practical knowledge of DOM manipulation, event handling, and client-side data persistence. It’s a simple yet effective example of building interactive web applications with vanilla JavaScript."/>
      <Contact />
    </div>
  )
}

export default App
