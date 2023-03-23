import React from "react";
import "./Skills.css";
import "devicon";
import "flag-icons";
import skills from "../data/skills.json";

function Skills() {
  const programmingSkills = skills.programmingSkills;
  const frameworkSkills = skills.frameworkSkills;
  const toolsSkills = skills.toolsSkills;
  const languageSkills = skills.languageSkills;
  return (
    <div className="skills-container">
      <h2>Programming</h2>
      <div className="skills-grid">
        {programmingSkills.map((e) => (
          <div className="skill-card">
            <div className="skill-level" style={{ "--level": e.level }}>
              {e.level}
            </div>
            <div className="skill-icon">
              <i class={e.icon}></i>
            </div>
            <div className="skill-name">{e.name}</div>
          </div>
        ))}
      </div>
      <h2>Frameworks</h2>
      <div className="skills-grid">
        {frameworkSkills.map((e) => (
          <div className="skill-card">
            <div className="skill-level" style={{ "--level": e.level }}>
              {e.level}
            </div>
            <div className="skill-icon">
              <i class={e.icon}></i>
            </div>
            <div className="skill-name">{e.name}</div>
          </div>
        ))}
      </div>
      <h2>Tools</h2>
      <div className="skills-grid">
        {toolsSkills.map((e) => (
          <div className="skill-card">
            <div className="skill-level" style={{ "--level": e.level }}>
              {e.level}
            </div>
            <div className="skill-icon">
              <i class={e.icon}></i>
            </div>
            <div className="skill-name">{e.name}</div>
          </div>
        ))}
      </div>
      <h2>Languages</h2>
      <div className="skills-grid">
        {languageSkills.map((e) => (
          <div className="skill-card">
            <div className="skill-level" style={{ "--level": e.level }}>
              {e.level}
            </div>
            <div className="skill-icon">
              <i class={e.icon} style={{ border: "solid" }}></i>
            </div>
            <div className="skill-name">{e.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
