import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Download, Activity, Cpu, ShieldAlert, Crosshair } from 'lucide-react';

interface HeroProps {
  onCtaclick: () => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  const [selectedWireframe, setSelectedWireframe] = useState<'h-beam' | 'hollow' | 'helical' | 'bracket'>('h-beam');
  const [systemPower, setSystemPower] = useState(10.0);
  const [temp, setTemp] = useState(1450);
  const [laserArmed, setLaserArmed] = useState(true);

  // System telemetry simulation to match the "high-tech" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemPower((prev) => {
        const delta = (Math.random() - 0.5) * 0.1;
        return parseFloat(Math.max(9.8, Math.min(10.2, prev + delta)).toFixed(2));
      });
      setTemp((prev) => {
        const delta = Math.round((Math.random() - 0.5) * 8);
        return Math.max(1430, Math.min(1470, prev + delta));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCapabilities = () => {
    // Standard capability statement mock download
    const dummyText = `FORGELINEA CUSTOM STEEL & FABRICATION - CAPACITY STATEMENT 2026\n\n` +
      `- 10kW Fiber Laser Cutting (Tolerances up to ±0.05mm)\n` +
      `- Heavy Structural Welding (AWS D1.1 & D1.5 Certified)\n` +
      `- Multi-Axis CNC Bending & Plate Rolling\n` +
      `- Design, CAD/CAM Integration, & Finite Element Analysis\n` +
      `- ISO 9001:2015 Registered Facility\n\n` +
      `Contact: projects@forgelinea.com | Tel: +1 (800) 555-FORGE`;
    
    const blob = new Blob([dummyText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'forgelinea_capabilities_statement.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden radial-glow bg-white"
    >
      
      {/* Light blue ambient glow elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10 w-full">
        {/* Left Side: Large Typographic Slogan and Action Buttons */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          {/* Large display headline as requested: "We build your dreams to reality." */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#0D1F33] tracking-tight leading-[1.1]">
            We build your dreams <br />
            to <span className="text-[#0D1F33]">reality.</span>
          </h1>

          {/* Slogan details and scope description based on PDF details */}
          <p className="font-sans text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            ForgeLinea Engineering Ltd. is Nairobi's premier partner for precision steel fabrication, heavy load-bearing structural frames, architectural metalwork, and 10kW fiber laser cutting engineered to sub-millimeter tolerances.
          </p>

          {/* Action buttons with light theme / professional high contrast styling */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={onCtaclick}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full overflow-hidden font-display text-sm font-bold tracking-wide text-white bg-slate-900 border border-slate-900 transition-all duration-300 cursor-pointer shadow-md hover:shadow-accent-blue/15"
            >
              <div className="absolute inset-0 w-0 bg-accent-blue transition-all duration-300 ease-out group-hover:w-full" />
              <span className="relative flex items-center space-x-2 z-10">
                <span>Initiate Consult</span>
                <ArrowUpRight className="w-4.5 h-4.5" />
              </span>
            </button>

            <button
              onClick={handleDownloadCapabilities}
              className="group inline-flex items-center space-x-2 px-8 py-3.5 rounded-full border border-slate-200 hover:border-accent-blue bg-slate-50 text-slate-800 font-display text-sm font-bold tracking-wide hover:bg-slate-100 transition-all duration-300 cursor-pointer"
            >
              <span>Capabilities Statement</span>
              <Download className="w-4 h-4 text-accent-blue group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Micro structural metrics widget from PDF specifications */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 max-w-md">
            <div>
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold">LASER LIMIT</p>
              <p className="font-display font-bold text-xl sm:text-2xl text-slate-950 mt-1">±0.5mm</p>
              <p className="font-sans text-xs text-accent-blue font-medium">Standard tolerance</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold">THICKNESS</p>
              <p className="font-display font-bold text-xl sm:text-2xl text-slate-950 mt-1">Up to 8mm</p>
              <p className="font-sans text-xs text-accent-blue font-medium">Steel & Stainless</p>
            </div>
            <div>
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-bold">LOCATION</p>
              <p className="font-display font-bold text-xl sm:text-2xl text-slate-950 mt-1">Nairobi</p>
              <p className="font-sans text-xs text-accent-blue font-medium">Butere Rd Workshop</p>
            </div>
          </div>

        </div>

        {/* Right Side: High-End Industrial 3D Rendering & Details from PDF */}
        <div className="lg:col-span-5 relative flex justify-center items-center w-full">
          {/* Subtle blue accent glow */}
          <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

          {/* Clean modern image of the laser steel cutter without any surrounding container */}
          <img 
            src="/src/assets/images/laser_cutting_device_1784332337230-removebg-preview.png" 
            alt="10kW Fiber Optic CNC Laser Steel Cutter" 
            referrerPolicy="no-referrer"
            className="w-full max-w-[520px] h-auto object-contain relative z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
