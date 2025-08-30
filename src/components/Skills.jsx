import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    'React', 'Swift', 'JavaScript', 
    'TypeScript', 'Node.js', 'iOS Development', 'php', 'html'
  ];

  return (
    <section className="skills-section">
      <h2>Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;