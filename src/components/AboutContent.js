import React from 'react'
import './About.css'
import { Link } from 'react-router-dom';
import react1 from '../assets/images 1.png'
import react2 from '../assets/image 2.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
       <div className='left'>
        <h1>Who Am I?</h1>
        <p>Im a react and wordpress font-end developer.<br/> I create responsive
          secure website for my clients.<br/> 
          I enjoy discussing new projects and design challenges.
        </p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
       </div>
       <div className='right'>
        <div className='img-container'>
        <div className='img-stack top'>
          <img src={react1}
          className='img' alt='true' />
        </div>

        <div className='img-stack bottom'>
          <img src={react2}
          className='img' alt='true' />
        </div>

        </div>
       </div>
    </div>
  )
}

export default AboutContent;