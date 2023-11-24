import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Technology = () => {
  return (
    <div className='technology'>
      <div className='technology-title'>
        <h5>03 <span>SPACE LAUNCH 101</span></h5>
      </div>

      <nav className="tech-navbar">
              <button><NavLink to = "/technology/">1</NavLink></button>
              <button><NavLink to = "/technology/technology2">2</NavLink></button>
              <button><NavLink to = "/technology/technology3">3</NavLink></button>
            
        </nav>
        <Outlet/>
       
    </div>
  )
}

export default Technology