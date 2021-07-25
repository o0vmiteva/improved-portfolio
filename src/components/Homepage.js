import React from 'react'
import '../styles/home.css'
import logo from '../assets/svg/logo-svg.svg'
import shadow from '../assets/svg/logo-dark.svg'
import {Link} from 'gatsby'
export default function Homepage() {
    return (

      <div className='wrap'>
        <p className='hello'>HELLO, I am</p>
        <img className='shadow-logo' src={shadow} />
        <img className='original-logo' src={logo} />
        <p className='text'>"Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat."</p>
        <div class="svg-wrapper">
          <svg height="55" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="55" width="250" />
          </svg>
          <Link to='/projects' className='text-1 btn-1'>PROJECTS</Link>
        </div>
        <div class="svg-wrapper-2">
          <svg height="55" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="shape" height="55" width="250" />
          </svg>
          <Link to='/services' className='text-1 btn-2'>SERVICES</Link>
        </div>
        <p className='scroll'><span></span>scroll</p>
      </div>
    )
}
