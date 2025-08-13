import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'
// Import images
import Profil from './assets/IMG-1375.jpg';

function App() {
  return (
    <div className="portfolio-container">
      <Header 
        name="Samir Bensalah" 
        title="Web & Mobile iOS Developer" 
        profileImage={Profil} // ✅ syntaxe correcte avec des accolades
      />

      <About />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppButton />
    </div>
  )
}

export default App