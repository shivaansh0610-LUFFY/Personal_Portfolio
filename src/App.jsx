import React from 'react';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import PlatformStats from './components/PlatformStats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-inner">
          <div className="logo">Shivaansh.</div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#stats">Stats</a>
            <a href="#projects">Projects</a>
          </nav>
          <a href="#contact" className="btn-primary">Let's Talk</a>
        </div>
      </header>

      <main>
        <Hero />
        <Marquee />
        <PlatformStats />
        <Projects />
      </main>

      <Contact />
    </div>
  );
}

export default App;
