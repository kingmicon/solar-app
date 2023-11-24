import React from 'react'
import photo from "../images/technologyv.jpg"

const Technology1 = () => {
  return (
    <div className="technology1">
      <div className="technology-text">
        <h5>THE TERMINOLOGY…</h5>
        <h1>LAUNCH VEHICLE</h1>
        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
      </div>
      <div className="technology-img">
        <img src={photo} alt='technology'/>
      </div>

    </div>
  )
}

export default Technology1