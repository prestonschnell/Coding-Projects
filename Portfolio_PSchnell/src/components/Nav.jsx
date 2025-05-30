import React from 'react';
import logo from '../../public/logo.png';
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="buttons">
            <li><button onClick={()=> {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              })
            }}>Home</button></li>
            <li><button onClick={()=> {
              window.scroll({
                top: 1325,
                behavior: 'smooth'
              })
            }}>About</button></li>
            <li><button onClick={()=> {
              window.scroll({
                top: 3135,
                behavior: 'smooth'
              })
            }}>Projects</button></li>
            <li><button onClick={()=> {
              window.scroll({
                top: 9999999,
                behavior: 'smooth'
              })
            }}>Contact</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
