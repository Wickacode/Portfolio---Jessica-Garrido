import React from "react";
import SkillsBox from "../components/SkillsBox";

export default function Skills() {
  return (
    <div className="skills-container width-contain">
      <div className="title-description">
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          eveniet?
        </p>
      </div>
      <div className="skills-container">
        <SkillsBox />

        <div className="profile-container">
          {/* <div className="profile-box">
            <h3>Atouts</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              vel earum cupiditate rem, molestias ipsum.
            </p>
          </div>
          <div className="profile-box">
            <h3>Parcours</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              vel earum cupiditate rem, molestias ipsum.
            </p>
          </div>
          <div className="profile-box">
            <h3>Langues</h3>
            <ul>
              <li>Espagnol bilingue</li>
              <li>Anglais intermédiaire</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
