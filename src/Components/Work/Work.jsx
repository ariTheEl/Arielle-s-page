import React from 'react'
import './Work.css'  
import upwork from '../../images/upwork.png'
import fiverr from "../../images/fiverr.png";
import amazon from "../../images/amazon.png";
import shopify from "../../images/shopify.png";
import facebook from "../../images/facebook.png";

const Work = () => {
  return (
    <div className="work">
      {/*Left Side*/}
      <div className="w-left">
        <span>Worked on:</span>
        <span>Brands and Designs</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Incidunt totam sequi pariatur quidem aperiam commodi quo quam
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </span>
        <button className="button s-button">HIRE ME</button>
        <div
          className="blueblur s-blur1 blur"
          style={{ background: "#abf1ff94" }}
        ></div>
      </div>

      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={upwork} alt="upwork logo" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="fiverr logo" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="amazon logo" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={shopify} alt="shopify logo" />
          </div>
          <div className="w-secCircle">
            <img src={facebook} alt="facebook logo" />
          </div>
        </div>
        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Work