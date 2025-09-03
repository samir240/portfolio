import React, { useState, useEffect } from 'react';
import './Projects.css';

// Import images
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/realestatecap.jpg';
import project7 from '../assets/project7.png';
import project8 from '../assets/Capturefootmag.JPG';
import project9 from '../assets/project9.PNG';
import project10 from '../assets/project10.PNG';
import project11 from '../assets/project11.PNG';

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Données des projets avec descriptions pour la galerie
  const galleryProjects = [
    {
      id: 1,
      image: project2,
      title: 'E-commerce App',
      description: 'Design and development of custom e-commerce applications, including product catalogs, shopping carts, secure payment integration, and order management systems.',
      technologies: ['React', 'Firebase'],
      category: 'Mobile Development',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      image: project3,
      title: 'Booking app',
      description: 'Booking app development with scheduling, payments, and user management.',
      technologies: ['React', 'Node.js'],
      category: 'Web Development',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      image: project4,
      title: 'Mobile app',
      description: 'Mobile app development with integrated payment system.',
      technologies: ['SwiftUI'],
      category: 'Full Stack',
      color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      image: project5,
      title: 'applepay integration',
      description: 'Payment methods integration for web and mobile apps',
      technologies: ['applepay'],
      category: 'iOS Development',
      color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      image: project6,
      title: 'Real Estate Platform',
      description: 'Real estate platform with advanced search features',
      technologies: ['React', 'Three.js', 'Express.js'],
      category: 'Web Development',
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      image: project7,
      title: 'geolocation app',
      description: 'App with geolocation features and real-time tracking',
      technologies: ['React Native', 'Google Maps API', 'Firebase'],
      category: 'Mobile Development',
      color: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 7,
      image: project8,
      title: 'Digital magazine app',
      description: 'Digital magazine with dynamic and interactive content',
      technologies: ['React', 'Django', 'PostgreSQL'],
      category: 'Full Stack',
      color: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
    {
      id: 8,
      image: project9,
      title: 'Travel App',
      description: 'Travel app with booking, itinerary, and map features',
      technologies: ['Swift', 'Core Data'],
      category: 'iOS Development',
      color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      id: 9,
      image: project10,
      title: 'Event Management Platform',
      description: 'Event management platform with ticketing and participant management',
      technologies: ['React', 'Stripe', 'Node.js'],
      category: 'Web Development',
      color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)'
    }
  ];

  return (
    <section className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="projects-header">
        <div className="header-content">
          <h2 className="section-title">
            <span className="title-line"></span>
            <span className="title-line">Portfolio</span>
          </h2>
          <p className="section-subtitle">
            From concept to deployment
          </p>
        </div>
        <div className="header-decoration">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>

      <div className="projects-container">
        <div className="masonry-grid">
          {galleryProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card masonry-item ${activeProject === project.id ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            >
              <div className="card-background" style={{ background: project.color }}></div>
              <div className="card-content">
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="project-info">
                  <div className="project-header">
                    <span className="project-category" style={{ background: project.color }}>
                      {project.category}
                    </span>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  
                  <div className="project-details">
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions">
                    {/*<button className="view-project-btn">
                      <span>View Project</span>
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>*/}
                  </div>
                </div>
              </div>
              
              <div className="card-glow" style={{ background: project.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;