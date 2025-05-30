import React from 'react'
import "./Contact.css"
import linkedIn from "../../public/linkedin.png"
import github from "../../public/github.png"
import artstation from "../../public/artstation.png"

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1>Contact me!</h1>
      <p>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible!</p>
      <div className="form-container">
        <form action="Submit">
          <label htmlFor="name">Name</label>
          <input type="text" name="fullName" id="" />
          <label htmlFor="name">Email</label>    
          <input type="text" name="email" id="" />
          <label htmlFor="name">Message</label>    
          <input type="text" name="message" id="" />
          <button type='Submit'>Submit</button>
        </form>
      </div>

      <div className="icons-container">
        <div className='icons'>
            <a href="https://www.linkedin.com/in/prestonschnell/" target="_blank"><img src={linkedIn} alt="" /></a>
           <a href="https://github.com/prestonschnell" target="_blank"><img src={github} alt="" /></a>
            <a href="https://prestonschnell.artstation.com/" target="_blank"><img src={artstation} alt="" /></a>
        </div>
      </div>
      <div className="back-container">
      <button onClick={() => {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }}>Back to Top</button>
      </div>
    </div>
  )
}

export default Contact
