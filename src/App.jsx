import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Passions from './components/Passions'
import Languages from './components/Languages'
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
        title="Digital Project Manager & Developer – From concept to fully functional web and mobile solutions." 
        profileImage={Profil} // ✅ syntaxe correcte avec des accolades
      />

      <About />
      <Passions />
      <Languages />
      <Skills />
      <Projects />
      <Contact />
      <WhatsAppButton />
    </div>
  )
}

export default App