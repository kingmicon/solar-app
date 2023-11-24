import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Destination = () => {
  return (
    <div className="destination-body">
      <div className='destination-title'>
        <h1>01 <span>PICK YOUR DESTINATION</span></h1>
      </div>

      <div classname="destination-navbar">

        <nav className="navbar">
          <ul>
            <li><NavLink to = "/destination/">MOON</NavLink></li>
            <li><NavLink to = "/destination/mars">MARS</NavLink></li>
            <li><NavLink to = "/destination/europa">EUROPA</NavLink></li>
            <li><NavLink to = "/destination/titan">TITAN</NavLink></li>
          </ul>
        </nav>
        <Outlet />
        <div className="footer">
      <p>Design by Ajiri</p>
    </div>
      </div>


    </div>
  )
}

export default Destination