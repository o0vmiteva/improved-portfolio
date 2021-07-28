import React from 'react'
import '../styles/home.css'
import logo from '../assets/svg/logo-svg.svg'
import shadow from '../assets/svg/logo-dark.svg'
import { Link } from 'gatsby'
import Stack from './Stack'


export default function Homepage() {
  return (

    <div className='wrap'>
      <p className='hello'>HELLO, I am Velichka Miteva. <span className='web'>WEB DEVELOPER</span></p>
      <img className='shadow-logo' src={shadow} />
      <img className='original-logo' src={logo} />
      <div className='stack'>
        <Stack />
      </div>
      <div class="svg-wrapper">
        <svg height="55" width="250" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape shape1" height="55" width="250" />
        </svg>
        <Link to='/projects' className='text-1 btn-1'>CONTACT ME</Link>
      </div>
      <div class="svg-wrapper-2">
        <svg height="55" width="250" xmlns="http://www.w3.org/2000/svg">
          <rect class="shape" height="55" width="250" />
        </svg>
        <Link to='/services' className='text-1 btn-2'>PROJECTS</Link>
      </div>
      <div className='square1'></div>
      <div className='square2'></div>
      <div className='square3'></div>
      <div className='square4'></div>
      <div className='square5'></div>

    </div>
  )
}
