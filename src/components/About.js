import React from 'react'
import '../styles/about.css'
import Layout from '../components/Layout'
import about from '../assets/jpg/about.jpg'
import { FaGithub } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'


export default function About() {
  return (
    <Layout>
      <div className='about-wrap'>
        <h1>About me</h1>
        <img className='about-image' src={about} />
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
        <p className='long-info'>Lorem ipsum dolor sit amet, consetetur sadipscing 
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus 
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
        takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <div className='github'>
          <FaGithub />
        </div>
        <div className='linkedin'>
          <GrLinkedin />
        </div>
        <div className='box=container'>
          <div className='box'></div>
            <div className='box'></div>
              <div className='box'></div>
                <div className='box'></div>
                  <div className='box'></div>
                    <div className='box'></div>
                      <div className='box'></div>
                        <div className='box'></div>
                          <div className='box'></div>
                            <div className='box'></div>
        </div>
      </div>
    </Layout>
  )
}
