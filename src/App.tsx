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

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerNav = document.getElementById('header-nav');
      const offset = headerNav ? headerNav.offsetHeight + 16 : 96;
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

  const handleSelectProjectForQuote = (projectName: string) => {
    setPrefilledProjectForQuote(projectName);
    handleScrollToSection('contact');
  };

  useEffect(() => {
    const sections = ['hero', 'services', 'gallery', 'why-us', 'milestones', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

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

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          } else {
            entry.target.classList.remove('reveal-visible');
          }
        });
      },
      { threshold: [0, 0.15], rootMargin: '-10% 0px -10% 0px' }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[48vw] h-[48vw] max-w-[620px] max-h-[620px] rounded-full bg-accent-blue/8 blur-[130px] animate-breathing-hue-1" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] max-w-[560px] max-h-[560px] rounded-full bg-slate-700/6 blur-[120px] animate-breathing-hue-2" />
      </div>
      <Header onNavClick={handleScrollToSection} activeSection={activeSection} />
      <main className="relative z-10">
        <div className="reveal" style={{ '--reveal-delay': '0ms' } as React.CSSProperties}>
          <Hero onCtaclick={() => handleScrollToSection('contact')} />
        </div>
        <div className="reveal" style={{ '--reveal-delay': '100ms' } as React.CSSProperties}>
          <IndustriesRow />
        </div>
        <section id="services" className="reveal" style={{ '--reveal-delay': '200ms' } as React.CSSProperties}>
          <CapabilitiesBento />
        </section>
        <section id="gallery" className="reveal" style={{ '--reveal-delay': '300ms' } as React.CSSProperties}>
          <ProjectGallery onSelectProjectForQuote={handleSelectProjectForQuote} />
        </section>
        <section id="milestones" className="reveal" style={{ '--reveal-delay': '400ms' } as React.CSSProperties}>
          <LegacyTimeline />
        </section>
        <div className="reveal" style={{ '--reveal-delay': '500ms' } as React.CSSProperties}>
          <Testimonials />
        </div>
        <section id="contact" className="reveal" style={{ '--reveal-delay': '600ms' } as React.CSSProperties}>
          <ContactForm initialProjectName={prefilledProjectForQuote} />
        </section>
      </main>
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
