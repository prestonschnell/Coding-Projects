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
            <li><button>Home</button></li>
            <li><button>About</button></li>
            <li><button>Projects</button></li>
            <li><button>Contact</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
