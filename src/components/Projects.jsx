import React from 'react';
import './Projects.css';

// Import images
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpeg';
import project5 from '../assets/project5.jpeg';
import project6 from '../assets/realestatecap.jpg';
import project7 from '../assets/project7.png';
import project8 from '../assets/Capturefootmag.JPG';
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

  // Données des projets avec descriptions pour la galerie
  const galleryProjects = [
    {
      id: 1,
      image: project2,
      title: 'E-commerce App',
      description: 'Design and development of custom e-commerce applications, including product catalogs, shopping carts, secure payment integration, and order management systems.',
      technologies: ['React', 'Firebase'],
      category: 'Mobile Development'
    },
    {
      id: 2,
      image: project3,
      title: 'Booking app',
      description: 'Booking app development with scheduling, payments, and user management.',
      technologies: ['React', 'Node.js'],
      category: 'Web Development'
    },
    {
      id: 3,
      image: project4,
      title: 'Mobile app',
      description: 'Mobile app development with integrated payment system.',
      technologies: ['SwiftUI'],
      category: 'Full Stack'
    },
    {
      id: 4,
      image: project5,
      title: 'applepay integration',
      description: 'Payment methods integration for web and mobile apps',
      technologies: ['applepay'],
      category: 'iOS Development'
    },
    {
      id: 5,
      image: project6,
      title: 'Real Estate Platform',
      description: 'Real estate platform with advanced search features',
      technologies: ['React', 'Three.js', 'Express.js'],
      category: 'Web Development'
    },
    {
      id: 6,
      image: project7,
      title: 'geolocation app',
      description: '"App with geolocation features and real-time tracking',
      technologies: ['React Native', 'Google Maps API', 'Firebase'],
      category: 'Mobile Development'
    },
    {
      id: 7,
      image: project8,
      title: 'Digital magazine app',
      description: 'Digital magazine with dynamic and interactive content',
      technologies: ['React', 'Django', 'PostgreSQL'],
      category: 'Full Stack'
    },
    {
      id: 8,
      image: project9,
      title: 'Travel App',
      description: 'Travel app with booking, itinerary, and map features',
      technologies: ['Swift', 'Core Data'],
      category: 'iOS Development'
    },
    {
      id: 9,
      image: project10,
      title: 'Event Management Platform',
      description: '"Event management platform with ticketing and participant management',
      technologies: ['React', 'Stripe', 'Node.js'],
      category: 'Web Development'
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

      <h2 className="gallery-title">From Idea to Reality</h2>
      <div className="gallery-grid">
        {galleryProjects.map((project) => (
          <div key={project.id} className="gallery-item">
            <img 
              src={project.image} 
              alt={project.title} 
              className="gallery-image" 
            />
            <div className="project-overlay">
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;