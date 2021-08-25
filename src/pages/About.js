import React from 'react'
import '../styles/about.css'
import Layout from '../components/Layout'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import MouseParticles from 'react-mouse-particles'
import nameSvg from '../assets/svg/Group-4.svg'
import Bounce from 'react-reveal/Bounce';
import Reveal from 'react-reveal/Reveal';

export default function About() {
  return (
    <Layout>
      <div className='about-wrap'>
        <h1 className='about-me'>
            <Bounce top>
              <Reveal effect='jump'>
                <div className='a'>A</div>
              </Reveal>
            </Bounce>
          <Bounce top delay={400}>
            <Reveal effect='lighting'>
              <div className='rest'>b</div>
            </Reveal>
          </Bounce>
          <Bounce top delay={800}>
            <Reveal effect='lighting'>

              <div className='rest'>o</div>
            </Reveal>
          </Bounce>
          <Bounce top delay={1200}>
            <Reveal effect='lighting'>

              <div className='rest'>u</div>
            </Reveal>
          </Bounce>
          <Bounce top delay={1600}>
            <Reveal effect='lighting'>

              <div className='rest'>t</div>
            </Reveal>
          </Bounce>
        </h1>



        <div className='bg-change'>
          <img className='name' src={nameSvg} />
          <div className='html-bounce'>
            <Bounce left delay={1200}>
              <Reveal effect='move'>
              <div className='html-icon'>
                < AiFillHtml5 size='3.5em' color='white'/>
              </div>            
              </Reveal>
            </Bounce>
          </div>
          <Bounce left delay={800}>
            <div className='css-icon'>
              < DiCss3 size='3.5em' color='white' />
            </div>
          </Bounce>
          <Bounce left delay={400}>
            <div className='js-icon'>
              < IoLogoJavascript size='3.5em' color='white' />
            </div>
          </Bounce>
          <Bounce left>
            <div className='react-icon'>
              < FaReact size='3.5em' color='white' />
            </div>
          </Bounce>
          <p className='greeting'>Hi there, I'm Velichka = <span className='color-change'>o0vmiteva</span></p>
          <div className='short-info'>
            <p>name:</p>
            <p>working at:</p>
            <p>title:</p>
            <p>exp:</p>
            <p>stack:</p>
            <p>location:</p>
            <p>Velichka Miteva</p>
            <p>ITcreate</p>
            <p>Frontend developer</p>
            <p>1 year</p>
            <p>HTML | CSS | JS | React</p>
            <p>Berlin</p>
          </div>
        </div>
        <p className='long-info'>Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
          dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
          est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <div className='git-icon'>
          <FaGithub size='2.5em' color='#66fcf1'
            background='#1e1e24' />
        </div>
        <div className='linkedin-icon'>
          <GrLinkedin size='2.5em' color='#66fcf1'
            background='#1e1e24' />
        </div>
        {/* <MouseParticles
          g={1}
          cull="MuiSvgIcon-root,MuiButton-root"
          color={["#66fcf1", "white", "#66fcf25b"]}
          level={6}
          radius={0}
        /> */}
      </div>
    </Layout>
  )
}
