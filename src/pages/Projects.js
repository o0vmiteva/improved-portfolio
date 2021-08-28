import React from 'react'
import '../styles/projects.css'
import shadow from '../assets/svg/logo-dark.svg'
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'gatsby'
import work1 from '../assets/jpg/veneta.png'
import work2 from '../assets/jpg/tatqna.png'
import work3 from '../assets/jpg/ibz.png'




export default function Projects() {
  return (

        <div className='projects-wrap'>
             <h1 className='my-work'>
            <Bounce top>
               <Reveal effect='jump'>
                 <div className='a'>M</div>
               </Reveal>
               </Bounce>
           <Bounce top delay={400}>
             <Reveal effect='lighting'>
               <div className='rest'>y</div>
             </Reveal>
           </Bounce>
           <Bounce top delay={800}>
             <Reveal effect='lighting'>

              <div className='rest'>W</div>
            </Reveal>
           </Bounce>
           <Bounce top delay={1200}>
             <Reveal effect='lighting'>

               <div className='rest'>O</div>
             </Reveal>
           </Bounce>
           <Bounce top delay={1600}>
             <Reveal effect='lighting'>
               <div className='rest'>R</div>
             </Reveal>
           </Bounce>
           <Bounce top delay={2000}>
             <Reveal effect='lighting'>
               <div className='rest'>K</div>
             </Reveal>
           </Bounce>
         </h1>

        <p className='main-info'>Some text goes here Some text goes here Some text goes here 
          Some text goes here Some text goes here Some text goes here 
          Some text goes here Some text goes here Some text goes here </p>
        <Link className='more' to='/'>More Projects</Link>
        <div className='project1'>
          <p className='languages'>HTML | CSS | JavaScript | React</p>
          <h2 className='site-name'>HelleDENT</h2>
          <Link className='site' to='/'>Visit the website</Link>
          <div className='combined-images'>
            <img className='img1 work' src={work1}/>
            <img className='img2 work' src={work1}/>
          </div>
        </div>

          {/* <div className='gallery-container'>
            <img src={work1}/>
            <div className='caption'>

            </div>
          </div>
        
         <img src={work2}/>
         <img src={work3}/> */}


        </div>
    
  )
}
