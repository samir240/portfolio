import React from 'react';
import './Languages.css';

function Languages() {
  const languages = [
    {
      name: 'French',
      level: 'Bilingual',
      proficiency: 100,
      flag: '🇫🇷',
      description: 'Native language - Complete mastery'
    },
    {
      name: 'Arabic',
      level: 'Bilingual',
      proficiency: 100,
      flag: '🇩🇿',
      description: 'Native language - Complete mastery'
    },
    {
      name: 'English',
      level: 'Intermediate',
      proficiency: 85,
      flag: '🇬🇧',
      description: 'Professional level - TOEIC 850+'
    }
  ];

  return (
    <section className="languages-section">
      <div className="languages-header">
        <h2>Languages</h2>
        <p className="languages-intro">Language skills</p>
      </div>
      
      <div className="languages-grid">
        {languages.map((language, index) => (
          <div key={index} className="language-card">
            <div className="language-header">
              <div className="language-flag">{language.flag}</div>
              <div className="language-info">
                <h3 className="language-name">{language.name}</h3>
                <span className="language-level">{language.level}</span>
              </div>
            </div>
            
            
            
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;
