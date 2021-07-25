import React from 'react'
import Navigation from './Navigation'
import '../styles/general.css'




export default function Layout({children}) {
  return (
    <div className='layout'>
      <Navigation />
      <div>{children}</div>
    </div>
  )
}
