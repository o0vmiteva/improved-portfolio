import React from 'react'
import '../styles/nav.css'
import { HomeOutline, PersonOutline, FolderOpenOutline, BriefcaseOutline, CallOutline } from 'react-ionicons'
import logo from '../assets/svg/logo.svg'
import { useState } from 'react'
import { Link } from 'gatsby'


export default function Navigation() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }


    return (

        <div className={`navigation ${showLinks ? "show-nav" : "hide-nav"}` }>
            <div className='nav'>
                <img className='nav-logo' src={logo} />
                <button className='navbar-burger' onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>
            </div>
            <ul className='navbar-links'>
                <li className='list slideInDown-1'>
                    <Link activeClassName='active' to='/'>
                        <span className='icon'><HomeOutline color={'#ffff'} /></span>
                        <span className='title'>Home</span>
                    </Link>
                </li>
                <li className='list slideInDown-2'>
                    <Link activeClassName='active' to='/About'>
                        <span className='icon'><PersonOutline color={'#ffff'} font-size='1.5em' z-index='1' /></span>
                        <span className='title'>About us</span>
                    </Link>
                </li>
                <li className='list slideInDown-3'>
                    <Link activeClassName='active' to='#'>
                        <span className='icon'><BriefcaseOutline color={'#ffff'} /></span>
                        <span className='title'>Projects</span>
                    </Link>
                </li>
                <li className='list slideInDown-4'>
                    <Link activeClassName='active' to='#'>
                        <span className='icon'><FolderOpenOutline color={'#ffff'} /></span>
                        <span className='title'>Services</span>
                    </Link>
                </li>
                <li className='list slideInDown-5'>
                    <Link activeClassName='active' to='#'>
                        <span className='icon'><CallOutline color={'#ffff'} /></span>
                        <span className='title'>Contact</span>
                    </Link>
                </li>
            </ul>
        
        </div>


    )
}
