import React, { useState, useEffect } from "react";

//Front Svg
import frontSkillsData from "../assets/data/frontendSkills.json";
import backSkillsData from "../assets/data/backendSkills.json";
import technosSkillsData from "../assets/data/technosSkills.json";

export default function SkillsBox() {
  const [frontSkills, setFrontSkills] = useState([]);
  const [backSkills, setBackSkills] = useState([]);
  const [technosSkills, setTechnosSkills] = useState([]);

  useEffect(() => {
    setFrontSkills(frontSkillsData.frontSkills);
    setBackSkills(backSkillsData.backSkills);
    setTechnosSkills(technosSkillsData.technosSkills); // Accès au tableau "technosSkills"
  }, []);

  return (
    <div className="skillsBox-container">
      <section>
        <div className="skills">
          <h1>Front</h1>
          <div className="skills-box">
            <span className="logos">
              {frontSkills.map((skill) => (
                <a href={skill.url}target="_blank">
                  <img
                    className="skill-logo"
                    src={skill.image}
                    alt={`logo ${skill.name}`}
                    title={skill.name}
                  />
                </a>
              ))}
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="skills">
          <h1>Back</h1>
          <div className="skills-box">
            <span className="logos">
              {backSkills.map((skill) => (
                <a href={skill.url}target="_blank">
                  <img
                    className="skill-logo"
                    src={skill.image}
                    alt={`logo ${skill.name}`}
                    title={skill.name}
                  />
                </a>
              ))}
            </span>
          </div>
        </div>
      </section>

      <section>
        <div className="skills">
          <h1>Technos</h1>
          <div className="skills-box">
            <span className="logos">
              {technosSkills.map((skill) => (
                <div key={skill.name}>
                  <a href={skill.url}target="_blank">
                    <img
                      className="skill-logo"
                      src={skill.image}
                      alt={skill.name}
                      title={skill.name}
                    />
                  </a>
                </div>
              ))}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
