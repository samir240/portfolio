import React from 'react';
import './Header.css';

function Header({ name, title }) {
  return (
    <header className="portfolio-header">
      <div className="header-content">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </header>
  );
}

export default Header;