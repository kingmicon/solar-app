import React from 'react'
import pic from "../images/Bitmapmars.png"

const Mars = () => {
  return (
    <div className="moon">
      <div className="moon-pic">
        <img src={pic} alt='moon'/>
      </div>
      <div className='moon-text'>
        <h1>MARS</h1>
        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
        <hr></hr>

        <div className='moon-text2'>
          <h2>AVG. DISTANCE</h2>
          <h2>EST. TRAVEL TIME</h2>
        </div>
        <div className='moon-text3'>
          <p>225 MIL.KM</p>
          <p>9 MONTHS</p>
        </div>
      </div>
    </div>
  )
}

export default Mars