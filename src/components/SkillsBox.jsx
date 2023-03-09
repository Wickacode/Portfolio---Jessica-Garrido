import React, { useState, useEffect } from "react";
import frontLogos from "../assets/data/frontendSkills.json ";

export default function SkillsBox() {
return (
<div className="skillsBox-container">
<section>
<div className="skills">
<h1>Front</h1>
<div className="skills-box">
<span className="logos">
{frontLogos.map((logo, index) => (
<img
               key={index}
               className="skill-logo"
               src={logo.image}
               alt={logo.alt}
               title={logo.title}
             />
))}
</span>
</div>
</div>
</section>
</div>
);
}