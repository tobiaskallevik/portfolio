import React from 'react';
import { format } from 'date-fns';
import "./experience.css";

const Projects = ({ name, description, github, technologies }) => {

  return (
    <div >
      <h2 className="project-title">{name}</h2>
      <p className="project-technologies">
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a> &#x2022; {technologies.join(', ')} 
      </p>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default Projects;