/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TimelineSection from './components/TimelineSection';
import Projects from './components/Projects';
import Objectives from './components/Objectives';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <Navbar 
        onOpenCV={() => setCvModalOpen(true)} 
        onContactClick={handleContactClick} 
      />

      {/* Main Content Sections in Order */}
      <main>
        {/* 1. Page d'accueil / Hero */}
        <Hero onOpenCV={() => setCvModalOpen(true)} />

        {/* 2. À propos de moi */}
        <About />

        {/* 3. Mes compétences */}
        <Skills />

        {/* 4. Mon parcours / formations */}
        <TimelineSection />

        {/* 5 & 6. Mes projets & Détails des projets */}
        <Projects />

        {/* 7. Objectifs professionnels */}
        <Objectives />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Modal */}
      <CVModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </div>
  );
}

