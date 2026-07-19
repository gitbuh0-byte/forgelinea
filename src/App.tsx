import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IndustriesRow from './components/IndustriesRow';
import ProjectGallery from './components/ProjectGallery';
import CapabilitiesBento from './components/CapabilitiesBento';
import LegacyTimeline from './components/LegacyTimeline';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [prefilledProjectForQuote, setPrefilledProjectForQuote] = useState('');

  // Smooth scroll helper
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerNav = document.getElementById('header-nav');
      const offset = headerNav ? headerNav.offsetHeight : 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Pre-fill coordinate helper from project modal to contact form
  const handleSelectProjectForQuote = (projectName: string) => {
    setPrefilledProjectForQuote(projectName);
    handleScrollToSection('contact');
  };

  // Section scroll tracker for active nav highlighting
  useEffect(() => {
    const sections = ['hero', 'services', 'gallery', 'why-us', 'milestones', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180; // Offset for header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 relative overflow-hidden">
      {/* Moving and breathing blue background hue elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-blue-500/10 blur-[130px] animate-breathing-hue-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-cyan-500/10 blur-[120px] animate-breathing-hue-2" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent-blue/5 to-transparent pointer-events-none" />

      {/* Navigation Header */}
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />

      {/* Hero Intro Section with Laser 3D Device */}
      <Hero onCtaclick={() => handleScrollToSection('contact')} />

      {/* Sleek Conveyor belt of industries served */}
      <IndustriesRow />

      {/* Capabilities Bento Grid */}
      <div id="services">
        <CapabilitiesBento />
      </div>

      {/* Interactive Project Gallery */}
      <div id="gallery">
        <ProjectGallery onSelectProjectForQuote={handleSelectProjectForQuote} />
      </div>

      {/* Company milestones timeline */}
      <div id="milestones">
        <LegacyTimeline />
      </div>

      {/* Corporate feedback testimonials */}
      <Testimonials />

      {/* Responsive lead-capture Form & Steel estimator */}
      <div id="contact">
        <ContactForm initialProjectName={prefilledProjectForQuote} />
      </div>

      {/* Footnote outline branding */}
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
