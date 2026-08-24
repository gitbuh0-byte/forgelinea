import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import img0 from './assets/images/img0.jpg';
import img01 from './assets/images/img01.jpg';
import img02 from './assets/images/img02.jpg';
import img03 from './assets/images/img03.jpg';
import logoLight from './assets/images/logoo.png';
import logoDark from './assets/images/logoo1.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const projects = [
    { image: img01, title: 'Marine & Port Infrastructure', label: 'Structural Engineering' },
    { image: img02, title: 'Precision Fabrication', label: 'Industrial Equipment' },
    { image: img03, title: 'Custom Steel Assemblies', label: 'Special Projects' },
    { image: img0, title: 'Engineered for the field', label: 'Installation & Support' },
  ];

  return (
    <div className="site-shell">
      <header className="site-header" id="header-nav">
        <button className="brand" onClick={() => go('hero')}><img src={logoLight} alt="Forgelinea" /><span>FORGELINEA<br /><small>ENGINEERING</small></span></button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <button onClick={() => go('hero')}>Home</button><button onClick={() => go('about')}>About Us</button><button onClick={() => go('services')}>Services</button><button onClick={() => go('sustainability')}>Sustainability</button><button onClick={() => go('projects')}>Projects</button><button onClick={() => go('contact')}>Contact</button>
        </nav>
        <div className="header-contact"><span>forgelineaeng@gmail.com<br />+254 722 210 380</span><button className="red-button" onClick={() => go('contact')}>Get a Quote <ArrowUpRight size={14} /></button></div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="hero" className="hero-section"><div className="hero-overlay" /><div className="hero-copy"><p className="eyebrow">ENGINEERING · PRECISION MANUFACTURING · FABRICATION</p><h1>Precision in<br />every cut.<br /><em>Excellence.</em></h1><p className="hero-text">Engineering and fabrication solutions built to specification, delivered with discipline, and made to perform across demanding industries.</p><div className="button-row"><button className="red-button" onClick={() => go('contact')}>Start a project <ArrowUpRight size={14} /></button><button className="ghost-button" onClick={() => go('services')}>Explore capabilities <ArrowUpRight size={14} /></button></div><div className="hero-stats"><div><b>2025</b><span>Founded in Nairobi</span></div><div><b>6</b><span>Core disciplines</span></div><div><b>±0.5mm</b><span>Laser tolerance</span></div><div><b>100%</b><span>Quality commitment</span></div></div></div></section>

        <section className="partner-strip"><p className="eyebrow">TRUSTED BY INDUSTRY LEADERS</p><h2>Partnering with the operators<br />powering global energy</h2></section>

        <section id="about" className="about-section page-width"><img src={img0} alt="Industrial offshore engineering" /><div><p className="eyebrow">01 · ABOUT FORGELINEA ENGINEERING</p><h2>Where engineering precision meets industrial craft.</h2><p><strong>Forgelinea Engineering Ltd.</strong> is a precision fabrication and industrial engineering company headquartered in Nairobi, Kenya. We design, fabricate, and install structural steelwork, architectural metalwork, and laser-cut components for commercial, industrial, agricultural, automotive, architectural, and government clients.</p><p>ForgeLinea brings the craft of shaping metal together with the geometry and discipline of modern engineering. Every project passes through precise specification, careful material selection, controlled fabrication, and verified quality before delivery.</p><button className="text-link" onClick={() => go('promise')}>Read our company promise <ArrowUpRight size={15} /></button></div></section>

        <section className="glance-section"><div className="page-width"><div><p className="eyebrow">02 · COMPANY AT A GLANCE</p><h2>Built for accurate work<br />and accountable delivery.</h2></div><div className="glance-grid"><div><b>Headquarters</b><span>Tui Agricultural Engineers, Building 21, Industrial Area, Butere Road, Nairobi</span></div><div><b>Markets</b><span>Nairobi and East Africa, with regional growth underway</span></div><div><b>Technology</b><span>CNC laser cutting, MIG/TIG welding, forming and finishing</span></div><div><b>Delivery coverage</b><span>Site installation across Kenya with regional mobilisation</span></div></div></div></section>

        <section id="projects" className="projects-section page-width"><div className="section-heading"><div><p className="eyebrow">OUR PROJECTS</p><h2>Delivering at the scale<br />of global infrastructure.</h2></div><button className="text-link">All projects <ArrowUpRight size={15} /></button></div><div className="project-grid">{projects.map((project) => <article key={project.title}><img src={project.image} alt={project.title} /><div><p>{project.label}</p><h3>{project.title}</h3><ArrowUpRight size={18} /></div></article>)}</div></section>

        <section id="services" className="services-section"><div className="page-width"><p className="eyebrow">05 · WHAT WE DO</p><h2>Engineering solutions across<br />six core disciplines.</h2><div className="service-list"><article><b>01</b><h3>Structural steel</h3><p>Columns, beams, trusses, mezzanines, platforms, roof structures and verified-tolerance reinforcement.</p></article><article><b>02</b><h3>Architectural metalwork</h3><p>Gates, balustrades, staircases, pergolas, canopies, decorative screens and custom interiors.</p></article><article><b>03</b><h3>Specialized welding</h3><p>Expert MIG, TIG and arc welding for aluminum, stainless steel, copper, brass, alloys and repairs.</p></article><article><b>04</b><h3>Laser cutting</h3><p>High-precision CNC cutting for mild steel, stainless, specialty components, signage and prototypes.</p></article><article><b>05</b><h3>Automotive engineering</h3><p>Custom grills, bull bars, chassis modifications, brackets, utility bodies and exhaust systems.</p></article><article><b>06</b><h3>Electrical fabrication</h3><p>Trunks, conduits, junction boxes, cable management, equipment frames and power systems.</p></article></div></div></section>

        <section className="materials-section"><div className="page-width"><p className="eyebrow">07 · MATERIALS &amp; FINISHES</p><h2>Engineered materials.<br />Exceptional finishes.</h2><div className="material-row"><span>Mild steel</span><span>Stainless steel</span><span>Aluminum</span><span>Galvanized steel</span><span>Corten steel</span></div><p className="section-note">Material and finish selection is guided by structural requirements, environmental exposure, durability expectations, and the desired aesthetic. Our treatments include hot-dip galvanizing, powder coating, industrial painting, polishing, brushing and specialist surface treatments.</p></div></section>

        <section className="process-section"><div className="page-width"><p className="eyebrow">10 · OUR PROJECT DELIVERY PROCESS</p><h2>A structured route from<br />concept to completion.</h2><div className="process-row"><span><b>01</b>Consult</span><span><b>02</b>Design</span><span><b>03</b>Proposal</span><span><b>04</b>Fabricate</span><span><b>05</b>Install</span></div><p className="section-note">Site visits, technical consultation, CAD drawings, material selection, itemized proposals, CNC cutting, fabrication, inspection, installation and client handover are coordinated through one accountable team.</p></div></section>

        <section id="sustainability" className="quote-section page-width"><p className="eyebrow">06 · INDUSTRIES WE SERVE</p><h2>Tailored solutions for<br />demanding environments.</h2><div className="industry-grid"><span>Commercial &amp; real estate</span><span>Industrial &amp; manufacturing</span><span>Government infrastructure</span><span>Agriculture &amp; agribusiness</span><span>Automotive &amp; transport</span><span>Healthcare &amp; medical</span><span>Architecture &amp; interiors</span><span>Energy &amp; utilities</span></div></section>

        <section className="quality-section"><div className="page-width quality-inner"><div><p className="eyebrow">11 · QUALITY &amp; HSE</p><h2>Precision. Safety.<br />Reliability.</h2></div><p>Quality is engineered into every stage, from material inspection and engineering verification to in-process checks, final inspection, and client approval. We protect people and the environment through PPE, risk assessments, equipment safety, responsible material handling, steel recycling, and continuous improvement.</p></div></section>

        <section id="promise" className="promise-section page-width"><p className="eyebrow">18 · THE FORGELINEA PROMISE</p><h2>Engineering every project<br />with precision, integrity<br />and lasting value.</h2><div className="promise-grid"><span>Precision engineering</span><span>Quality without compromise</span><span>Trusted partnerships</span><span>Reliable delivery</span><span>Innovation</span><span>Sustainable growth</span></div></section>

        <section id="contact" className="contact-section"><div className="page-width contact-inner"><div><p className="eyebrow">19 · LET'S BUILD TOGETHER</p><h2>Have a critical scope?<br /><em>Let's mobilize.</em></h2><p>Whether you have detailed drawings or are starting with a concept, our engineering team is ready to scope, quote, and deliver.</p></div><button className="red-button" onClick={() => window.location.href = 'mailto:forgelineaeng@gmail.com'}>Get in touch <ArrowUpRight size={15} /></button></div><footer className="page-width footer-line"><span className="footer-brand"><img src={logoDark} alt="Forgelinea Engineering" />FORGELINEA ENGINEERING</span><span>Tui Agricultural Engineers, Building 21 · Nairobi, Kenya</span><span>forgelineaeng@gmail.com · +254 722 210 380</span></footer></section>
      </main>
    </div>
  );
}
