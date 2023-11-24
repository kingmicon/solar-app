import React from 'react'
import pic from "../images/Bitmapeuropa.png"

const Europa = () => {
  return (
    <div className="moon">
      <div className="moon-pic">
        <img src={pic} alt='moon'/>
      </div>
      <div className='moon-text'>
        <h1>EUROPA</h1>
        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
        <hr></hr>

        <div className='moon-text2'>
          <h2>AVG. DISTANCE</h2>
          <h2>EST. TRAVEL TIME</h2>
        </div>
        <div className='moon-text3'>
          <p>628 MIL.KM</p>
          <p>3 YEARS</p>
        </div>
      </div>
    </div>
  )
}

export default Europa