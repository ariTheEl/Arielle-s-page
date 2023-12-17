import React from 'react'
import './Services.css'
import glasses from '../../images/glasses.png'
import heartmoji from "../../images/heartmoji.png";
import humble from "../../images/humble.png";
import Card from '../Card/Card';
import resume from './Eloho N.A..docx'

const Services = () => {
  return (
    <div className="services">
      {/* Left Side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
          Incidunt totam sequi pariatur quidem aperiam commodi quo quam
        </span>
        <a href={resume} download>
            <button className="button s-button">Download CV</button>
          </a>
        <div className="blur s-blur"></div>
      </div>

      {/* Right Side */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={heartmoji}
            heading={"Design "}
            detail={"HTML5, CSS3, Vanilla JavaScript"}
          />
        </div>
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Version Control "}
            detail={"Git and GitHub"}
          />
        </div>
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"Soft Skills "}
            detail={"Communication, Team work, Problem solving and Critical thinking"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services