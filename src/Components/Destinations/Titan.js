import React from 'react'
import pic from "../images/Bitmaptitian.png"

const Titan = () => {
  return (
    <div className="moon">
      <div className="moon-pic">
        <img src={pic} alt='moon'/>
      </div>
      <div className='moon-text'>
        <h1>TITAN</h1>
        <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
        <hr></hr>

        <div className='moon-text2'>
          <h2>AVG. DISTANCE</h2>
          <h2>EST. TRAVEL TIME</h2>
        </div>
        <div className='moon-text3'>
          <p>1.6 BIL.KM</p>
          <p>7 YEARS</p>
        </div>
      </div>
    </div>
  )
}

export default Titan