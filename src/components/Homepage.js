import React from 'react'
import '../styles/home.css'
import logo from '../assets/svg/logo-svg.svg'
import shadow from '../assets/svg/logo-dark.svg'
import { Link } from 'gatsby'
import Stack from './Stack'
import Bounce from 'react-reveal/Bounce';


export default function Homepage() {
  return (

    <div className='wrap'>
      <p className='hello'>HELLO, I am Velichka Miteva. <span className='web'>WEB DEVELOPER</span></p>
      <Bounce left>
        <img className='shadow-logo' src={shadow} />
      </Bounce>
      <Bounce left delay={400}>
        <img className='original-logo' src={logo} />
      </Bounce>
      <div className='stack'>
        <Stack />
      </div>
       <Link to='/projects' className='contact-button btn'><span>C</span>ontact me</Link>

       <Link to='/services' className='projects-button btn'><span>P</span>rojects</Link>



      {/* <div class="svg-wrapper">
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
      </div> */}
      <div className='container'>
        <div className='square'></div>
          <div className='square'></div>
            <div className='square'></div>
              <div className='square'></div>
                <div className='square'></div>
                  <div className='square'></div>
                    <div className='square'></div>
                      <div className='square'></div>
                        <div className='square'></div>
                          <div className='square'></div>
      </div>
    </div>
  )
}
