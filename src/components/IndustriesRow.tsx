import React from 'react';
import { industriesMarquee } from '../data';

export default function IndustriesRow() {
  // Triple the items to make the marquee transition seamless across all widths
  const marqueeItems = [...industriesMarquee, ...industriesMarquee, ...industriesMarquee];

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200/50 py-6 overflow-hidden relative z-10">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="flex items-center space-x-12 whitespace-nowrap">
        {/* Animated conveyor wrapper */}
        <div className="flex space-x-12 animate-marquee items-center">
          {marqueeItems.map((item, index) => (
            <div key={`marq-1-${index}`} className="flex items-center space-x-6">
              {/* Custom metal washer/bolt vector divider */}
              <svg className="w-4 h-4 text-accent-blue/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
                <line x1="12" y1="1" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="23" />
                <line x1="1" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="23" y2="12" />
              </svg>
              <span className="font-display font-bold text-xs sm:text-sm text-slate-500 tracking-[0.2em] uppercase hover:text-slate-900 transition-colors duration-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
