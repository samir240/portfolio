import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Mobile App',
      description: 'iOS application with advanced features',
      technologies: ['Swift', 'UIKit']
    },
    {
      name: 'Web Platform',
      description: 'Responsive web application',
      technologies: ['React', 'Node.js']
    }
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.join(' | ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;