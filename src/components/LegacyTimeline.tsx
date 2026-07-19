import React from 'react';
import { Award, Briefcase, Settings, Landmark, ShieldCheck } from 'lucide-react';

export default function LegacyTimeline() {
  const milestones = [
    {
      period: '2025 - Present',
      title: 'Robotic Welding Automation & 12kW Upgrades',
      category: 'Advanced Systems',
      bullets: [
        'Commissioned dual-arm automated robotic TIG/MIG welding cells to triple architectural part output.',
        'Installed our premium 12kW Fiber Optic Laser, expanding cutting limits up to 25mm heavy plate.',
        'Established full digital twin tracing for high-load aeronautic structures.'
      ]
    },
    {
      period: '2021 - 2024',
      title: 'ISO 9001 & AWS D1.1/D1.5 Certification',
      category: 'Quality Standards',
      bullets: [
        'Achieved full registration for ISO 9001:2015 Quality Management Standards across all engineering bays.',
        'Qualified all core shop welders to certified structural AWS standards.',
        'Constructed custom testing lab for ultrasonic, dye-penetrant, and magnetic particle weld inspections.'
      ]
    },
    {
      period: '2016 - 2020',
      title: 'Architectural Curved Steel Specialization',
      category: 'Market Expansion',
      bullets: [
        'Onboarded 250-ton heavy press rollers and expanded into double-helical and architectural steel works.',
        'Delivered the landmark Helix Museum Facade Project (118 metric tons of custom architectural profiles).',
        'Built full software pipelines to convert Revit BIM designs directly to cutting nested codes.'
      ]
    },
    {
      period: '2010 - 2015',
      title: 'Establishment of Forgelinea Custom Forge',
      category: 'Foundations',
      bullets: [
        'Founded with a single laser cutter in a 5,000 sq ft warehouse facility.',
        'Built a stellar reputation for delivering structural steel columns and high-quality local metalworks.',
        'Pioneered CAD/CAM optimization in the local fabrication space.'
      ]
    }
  ];

  return (
    <section id="milestones" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs text-accent-blue uppercase tracking-widest font-bold">CORPORATE EVOLUTION</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-2">
            Professional Milestones <br />
            & Standards Achieved
          </h2>
        </div>

        {/* Minimalistic, container-free 2x2 grid for milestones and categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="flex flex-col space-y-3.5">
              <div className="flex items-center space-x-3.5">
                <span className="font-mono text-xs text-accent-blue font-bold uppercase tracking-widest">
                  {milestone.category}
                </span>
                <span className="text-slate-300 text-xs">|</span>
                <span className="font-mono text-xs text-slate-500 font-semibold">
                  {milestone.period}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                {milestone.title}
              </h3>

              <ul className="space-y-2.5 pt-1">
                {milestone.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx} className="flex items-start space-x-2.5 text-slate-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue/50 shrink-0 mt-2" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
