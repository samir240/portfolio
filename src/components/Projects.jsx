import React from 'react';
import './Projects.css';

// Import images
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';
import project8 from '../assets/project8.PNG';
import project9 from '../assets/project9.PNG';
import project10 from '../assets/project10.PNG';
import project11 from '../assets/project11.PNG';
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

  const carouselImages = [
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11
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

      <h2 className="gallery-title">Project Gallery</h2>
      <div className="gallery-grid">
        {carouselImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Project ${index + 1}`} 
              className="gallery-image" 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;