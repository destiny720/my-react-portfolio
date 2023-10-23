import React from 'react';
import './HeroImage.css';
import IntroImg from '../assets/michal.jpg'
import {Link} from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-Img' src={IntroImg} alt='IntoImg'/>
        </div>
        <div className='content'>
            <p>HI, I'M A FREELENCER.</p> 
            <h1><span></span> Developer.</h1>
        <div>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
        </div>
        </div>

    </div>
  )
}

export default HeroImage