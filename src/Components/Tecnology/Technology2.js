import React from 'react'
import photo from "../images/technologs.jpg"

const Technology2 = () => {
  return (
    <div className="technology1">
      <div className="technology-text">
        <h5>THE TERMINOLOGY…</h5>
        <h1>SPACEPORT</h1>
        <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
      </div>
      <div className="technology-img">
        <img src={photo} alt='technology'/>
      </div>

    </div>
  )
}

export default Technology2