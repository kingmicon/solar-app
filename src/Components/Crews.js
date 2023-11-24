import React from 'react'
import pic1 from "./images/image-removebg-preview(289).png"
import pic2 from "./images/image-removebg-preview(262).png"
import pic3 from "./images/image-removebg-preview(288).png"
import pic4 from "./images/image-removebg-preview(265).png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Crew = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='crew'>
      <div className='crew-heading'>
      <h5>02 <span>MEET YOUR CREW</span></h5>
      </div>
      
      <div className='crew-member1'>
      <Slider {...settings}>
        <div>
      <div className='crew-member'>
        <div className='crew-text'>
          <h3>COMMANDER</h3>
          <h1>DOUGLAS HURLEY</h1>
          <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <div className='crew-pic'>
          <img src={pic1} alt='commander'/>
        </div>
      </div>
      </div>

      <div>
      <div className='crew-member'>
        <div className='crew-text'>
          <h3>MISSION SPECIALIST</h3>
          <h1>MARK SHUTTLEWORTH</h1>
          <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
        </div>
        <div className='crew-pic'>
          <img src={pic2} alt='commander'/>
        </div>
      </div>
      </div>

      <div>
      <div className='crew-member'>
        <div className='crew-text'>
          <h3>PILOT</h3>
          <h1>VICTOR GLOVER</h1>
          <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
        </div>
        <div className='crew-pic'>
          <img src={pic3} alt='commander'/>
        </div>
      </div>
      </div>
      
      <div>
      <div className='crew-member'>
        <div className='crew-text'>
          <h3>FLIGHT ENGINEER</h3>
          <h1>ANOUSHEH ANSARI</h1>
          <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
        </div>
        <div className='crew-pic'>
          <img src={pic4} alt='commander'/>
        </div>
      </div>
      </div>

      </Slider>
      </div>
      
    </div>
  )
}

export default Crew