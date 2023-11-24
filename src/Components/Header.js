import React from 'react'
import logo1 from "./images/Group 2.svg"
import { NavLink  } from 'react-router-dom'
import { Route, Routes,  } from 'react-router-dom'
import Destination from './Destination'
import Crew from './Crews'
import Technology from './Technologies'
import Body from './Body'
import Moon from './Destinations/Moon'
import Mars from './Destinations/Mars'
import Europa from './Destinations/Europa'
import Titan from './Destinations/Titan'
import Technology1 from './Tecnology/Technology1'
import Technology2 from './Tecnology/Technology2'
import Technology3 from './Tecnology/Technology3'
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen]  = useState(false);
  return (
    <>
    
    <div className= "header-nav">
        <div className='logo'>
            <img src={logo1} alt='logo'></img>
        </div>

        <nav className="naverbar">
      <div>
            <ul>
                <li><NavLink to = "/">00 Home</NavLink></li>
                <li><NavLink to = "/destination">01 DESTINATION</NavLink></li>
                <li><NavLink to = "/crew">02 CREW</NavLink></li>
                <li><NavLink to = "/technology">03 TECHNOLOGY</NavLink></li>
            </ul>
            </div>
        </nav>
        <div
            className="hidden max-sm:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl text-white" />
          </div>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 sm:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-sm:block fixed right-0  px-1 py-1 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full text-black ">
                <li><NavLink to = "/">00 Home</NavLink></li>
                <li><NavLink to = "/destination">01 DESTINATION</NavLink></li>
                <li><NavLink to = "/crew">02 CREW</NavLink></li>
                <li><NavLink to = "/technology">03 TECHNOLOGY</NavLink></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
    
    <Routes>
    <Route path='/' element = {<Body/>}/>
    <Route path='/destination' element = {<Destination/>}>
    <Route path='/destination/' element = {<Moon/>}/>
    <Route path='/destination/mars' element = {<Mars/>}/>
    <Route path='/destination/europa' element = {<Europa/>}/>
    <Route path='/destination/titan' element = {<Titan/>}/>

    </Route>
    <Route path='/crew' element = {<Crew/>}/>
    <Route path='/technology' element = {<Technology/>}>
    <Route path='/technology/' element = {<Technology1/>}/>
    <Route path='/technology/technology2' element = {<Technology2/>}/>
    <Route path='/technology/technology3' element = {<Technology3/>}/>
    </Route>
    
    </Routes>

    </>
  )
}

export default Header