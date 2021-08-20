import React from 'react'
import '../styles/about.css'
import Layout from '../components/Layout'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'


export default function About() {
  return (
    <Layout>
      <div className='about-wrap'>
        <h1 className='about-me'>About me</h1>
        <div className='bg-change'>
          <p className='vmiteva'>o0vmiteva</p>
          <div className='html-icon'>
          < AiFillHtml5 size='3.5em' color='#66fcf1'/>
          </div>
          <div className='css-icon'>
          < DiCss3 size='3.5em'color='#66fcf1'/>
          </div>
          <div className='js-icon'>
          < IoLogoJavascript size='3.5em'color='#66fcf1'/>
          </div>
          <div className='react-icon'>
          < FaReact size='3.5em'color='#66fcf1'/>
          </div>
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
          <FaGithub size='3em' color='white'/>
        </div>
        <div className='linkedin-icon'>
          <GrLinkedin size='3em' color='white'/>
        </div>
        
      </div>
    </Layout>
  )
}
