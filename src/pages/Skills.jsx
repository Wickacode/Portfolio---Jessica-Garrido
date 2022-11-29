import React from "react";
import SkillsBox from "../components/SkillsBox";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="title-description">
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          eveniet?
        </p>
      </div>
      <div className="skills-container">
        <SkillsBox />
      </div>
    </div>
  );
}
