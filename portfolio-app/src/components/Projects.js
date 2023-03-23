import React, { useState } from 'react';
import "./Projects.css"
import projectList from "../data/projects.json"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (index) => {
    setActiveProject(index);
  };

  const handleMouseLeave = () => {
    setActiveProject(null);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div
            className={`project-card ${activeProject === index ? "active" : ""}`}
            key={index}
            onClick={() => handleClick(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-button">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
