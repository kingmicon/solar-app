import React from 'react'
import pic from "../images/Bitmap3.png"

const Moon = () => {
  return (
    <div className="moon">
      <div className="moon-pic">
        <img src={pic} alt='moon'/>
      </div>
      <div className='moon-text'>
        <h1>MOON</h1>
        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        <hr></hr>

        <div className='moon-text2'>
          <h2>AVG. DISTANCE</h2>
          <h2>EST. TRAVEL TIME</h2>
        </div>
        <div className='moon-text3'>
          <p>384,400KM</p>
          <p>3 DAYS</p>
        </div>
      </div>
    </div>
  )
}

export default Moon