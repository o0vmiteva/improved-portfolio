import React, { useState, useEffect, useRef } from 'react';
import '../styles/gallery.scss'
import shadow from '../assets/svg/logo-dark.svg'
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';
import { Link } from 'gatsby'
import work1 from '../assets/jpg/veneta.png'
import work2 from '../assets/jpg/tatqna.png'
import work3 from '../assets/jpg/ibz.png'
import cn from 'classnames'

const images = [work1, work2, work3]

function GalleryItem({src}){

  const ref = useRef(null);

  const [clipMaskRadius, setClipMaskRadius] = useState(0);
  const [clipMask, setClipMask] = useState({x:0, y: 0})

  const [reveal, setReveal] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 100)
  }, [])


  useEffect(() => {

    function getCoordinates(mouse){

    }
    ref.current.addEventListener('mousemove', (mouse)=>{
      console.log(mouse)
      getCoordinates(mouse);
    })
  }, [])


  return (
    <div className={cn('gallery-item-wrapper', { 'is-reveal': reveal })} >
    <div className='gallery-item'>
      <div 
        className='gallery-item-image sepia'
        style={{ backgroundImage: `url(${src})` }}
        ></div>

        <div
        className='gallery-item-image masked'
        style={{
          backgroundImage: `url(${src})`
        }}
        
        ></div>
    </div>
    </div>
  )
  
}

export default function Gallery() {
  return (

        <div className='gallery'>
          {images.map((src) => (
            <GalleryItem key={src} src={src} />
            ))}
        
        </div>




    // <div className='projects-wrap'>
    //   <h1 className='my-work'>
    //         <Bounce top>
    //           <Reveal effect='jump'>
    //             <div className='a'>M</div>
    //           </Reveal>
    //         </Bounce>
    //       <Bounce top delay={400}>
    //         <Reveal effect='lighting'>
    //           <div className='rest'>y</div>
    //         </Reveal>
    //       </Bounce>
    //       <Bounce top delay={800}>
    //         <Reveal effect='lighting'>

    //           <div className='rest'>W</div>
    //         </Reveal>
    //       </Bounce>
    //       <Bounce top delay={1200}>
    //         <Reveal effect='lighting'>

    //           <div className='rest'>o</div>
    //         </Reveal>
    //       </Bounce>
    //       <Bounce top delay={1600}>
    //         <Reveal effect='lighting'>
    //           <div className='rest'>r</div>
    //         </Reveal>
    //       </Bounce>
    //       <Bounce top delay={2000}>
    //         <Reveal effect='lighting'>
    //           <div className='rest'>k</div>
    //         </Reveal>
    //       </Bounce>
    //     </h1>
    //     </div>
  )
}
