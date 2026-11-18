import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ExperienceAndAchievements from './components/ExperienceAndAchievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#08090d] text-[#ededef]">
      {/* Fixed Sticky Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <ExperienceAndAchievements />
        <Contact />
      </main>
    </div>
  );
}
