import React from 'react'
import photo from "../images/technologysc.jpg"

const Technology3 = () => {
  return (
    <div className="technology1">
      <div className="technology-text">
        <h5>THE TERMINOLOGY…</h5>
        <h1>SPACE CAPSULE</h1>
        <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
      </div>
      <div className="technology-img">
        <img src={photo} alt='technology'/>
      </div>

    </div>
  )
}

export default Technology3