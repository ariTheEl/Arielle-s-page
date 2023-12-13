import React from "react";
import './Intro.css'
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import instgram from "../../images/instagram.png";
import vec1 from "../../images/vector1.png";
import vec2 from "../../images/vector2.png";
import girl from "../../images/girl.png";
import thumbup from "../../images/thumbup.png";
import crown from "../../images/crown.png";
import glassesmoji from "../../images/glassesmoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";


const Intro = () => {
    return (
      <div className="intro">
        <div className="i-left">
          <div className="i-name">
            <span>Hi! I am</span>
            <span>N.A. Eloho.</span>
            <span>
              Frontend Developer with a passion for creative, functional and
              aesthetically pleasing web design, development and optimization.
            </span>
          </div>
          <button className="button i-button">Open to Work</button>
          <div className="i-icons">
            {/* Install React router and add the links */}
            <a href="/">
              <img src={github} alt="" />
            </a>
            <a href="/">
              <img src={linkedin} alt="" />
            </a>
            <a href="/">
              <img src={instgram} alt="" />
            </a>
          </div>
        </div>

        <div className="i-right">
          <img src={vec1} alt="Blue background " />
          <img src={vec2} alt="Yellow background " />
          <img src={girl} alt="Lady pointing right" />
          <img src={glassesmoji} alt="Emoji wearing glasses" />
          <div style={{ top: "-4%", left: "68%" }}>
            <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
          </div>
          <div style={{ top: "18rem", left: "-2rem" }}>
            <FloatingDiv
              image={thumbup}
              txt1="Promising Developer"
              txt2="Award"
            />
          </div>
          <div className="blur purpleblur"></div>
          <div className="blur blueblur"></div>
        </div>
      </div>
    );
}

export default Intro