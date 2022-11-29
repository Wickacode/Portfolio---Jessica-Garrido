import React from "react";

export default function SkillsBox() {
  return (
    <div className="skills">
      <ul>
        <h2>Front</h2>
        <div className="list-skills">
          <li>React</li>
          <li>Vuejs</li>
          <li>Sass</li>
          <li>Bootstrap</li>
        </div>
      </ul>
      <ul>
        <h2>Back</h2>
        <div className="list-skills">
          <li>Nodejs</li>
        </div>
      </ul>
      <ul>
        <h2>Outils</h2>
        <div className="list-skills">
          <li>Github</li>
          <li>Visual Studio Code</li>
          <li>MongoDB</li>
          <li>MySQL</li>
        </div>
      </ul>
    </div>
  );
}
