import React from 'react';
import './Passions.css';

function Passions() {
  const passions = [
    {
      key: 'football-data',
      title: 'Football Data',
      description:
        "Performance analysis, data scouting, xG, visualizations and insights for decision making.",
      tags: ['xG', 'Tracking', 'Scouting', 'Visualization'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="passion-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z" fill="#0ea5e9" opacity="0.12"/>
          <path d="M7 12l3 3 7-7" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      key: 'gps-tech',
      title: 'New Technologies & GPS',
      description:
        "Sensors, IoT, geolocation, mapping, Maps APIs, geo-fencing and contextual experiences.",
      tags: ['GPS', 'IoT', 'Maps API', 'Geofencing'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="passion-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21s7-5.686 7-11a7 7 0 10-14 0c0 5.314 7 11 7 11Z" stroke="#22c55e" strokeWidth="2"/>
          <circle cx="12" cy="10" r="2.5" fill="#22c55e"/>
        </svg>
      )
    },
    {
      key: 'digital-com',
      title: 'Digital Communication',
      description:
        "Content strategy, SEO/SEA, social media, analytics and automation to amplify impact.",
      tags: ['SEO', 'Analytics', 'Social', 'Automation'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="passion-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5h18v10H3z" stroke="#a855f7" strokeWidth="2"/>
          <path d="M7 19h10" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="passions-section">
      <div className="passions-header">
        <h2>Passions</h2>
        <p className="passions-intro">What drives me daily</p>
      </div>
      <div className="passions-grid">
        {passions.map(({ key, title, description, tags, icon }) => (
          <div key={key} className="passion-card">
            <div className="passion-icon-wrap">{icon}</div>
            <h3 className="passion-title">{title}</h3>
            <p className="passion-description">{description}</p>
            <div className="passion-tags">
              {tags.map((tag) => (
                <span key={tag} className="passion-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Passions;
