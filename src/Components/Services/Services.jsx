import React from 'react'
import './Services.css'
import glasses from '../../images/glasses.png'
import heartmoji from "../../images/heartmoji.png";
import humble from "../../images/humble.png";

const Services = () => {
  return (
    <div className='services'>
        {/* Left Side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>services</span>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Incidunt totam sequi pariatur quidem aperiam commodi quo quam
            </span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur"></div>
        </div>

        {/* Right Side */}
        <div className="cards">
            Right Side
        </div>
    </div>
  )
}

export default Services