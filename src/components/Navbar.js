import React from 'react'
import logo192 from '../../src/Images/logo192.png'

function Navbar() {
  return (
      <nav className='nav'>
        <div className="nav-logo-title">
          <img className='nav-logo' src={logo192}/>
          <h3>RealFacts</h3>
        </div>
        <h4>React Course - Project 1</h4>
      </nav>
  )
}

export default Navbar