import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <Header 
        name="Your Name" 
        title="Web & Mobile iOS Developer" 
      />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App