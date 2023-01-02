import React from "react";
import ProgressBar from "./ProgressBar";
import htmlLogo from "../assets/img/skills/front/html.svg";

export default function SkillsBox() {
  return (
    <div className="skills">
 
      <h2>Front</h2>

      <div className="skills-main">

        <div className="box-skills-container">

          <div className="box-skill">
          <i class="fa-brands fa-html5"></i>
          </div>

          <div className="box-skill-details">
            <h2>Html</h2>
            <p>Maîtrise : ""</p>
            <div className="skillBar">
              <div className="html"></div>
            </div>
          </div>
        </div>

        <div className="box-skills-container">
          <div className="box-skill">
          <i class="fa-brands fa-css3-alt"></i>
          </div>

          <div className="box-skill-details">
            <h2>Css</h2>
            <p>Maîtrise : ""</p>
            <div className="skillBar">
              <div className="css"></div>
            </div>
          </div>
        </div>

        <div className="box-skills-container">
          <div className="box-skill">
          <i class="fa-brands fa-js"></i>
          </div>

          <div className="box-skill-details">
            <h2>Javascript</h2>
            <p>Maîtrise : ""</p>
            <div className="skillBar">
              <div className="javaScript"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
