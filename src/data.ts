import { Project, Testimonial } from './types';

export const projectsData: Project[] = [
  {
    id: 'proj-01',
    title: 'AeroCrest Cantilever Roof Frame',
    category: 'structural',
    description: 'High-tolerance structural cantilever framework engineered for a modern airport terminal wing, featuring custom-welded structural tubes.',
    details: [
      'Engineered with high-tensile structural carbon steel to withstand extreme wind shear and cantilever loads.',
      'Achieved strict tolerances of ±1.0mm over a 24-meter span using robotic fixture alignment.',
      'Completed full AWS-certified structural welds with 100% ultrasonic non-destructive testing (NDT) passing rate.'
    ],
    specs: {
      material: 'ASTM A500 Grade B Structural Carbon Steel',
      tolerance: '± 1.0mm span-wide',
      weight: '42,500 kg',
      dimensions: '24m x 12m cantilever'
    },
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200', // Industrial construction / steel frame
    tags: ['Heavy Structural', 'High-Tensile Weld', 'Aeronautical Space'],
    year: '2025'
  },
  {
    id: 'proj-02',
    title: 'The Helix Spiral Steel Facade',
    category: 'architectural',
    description: 'Architectural helical carbon-steel facade wrapping a 12-story high-rise museum, using custom-rolled structural hollow sections.',
    details: [
      'Individually laser-profiled custom steel plates welded seamlessly with custom-rolled heavy tubing.',
      'Coated with multi-layered architectural-grade anti-corrosive marine paint finish.',
      'Integrated hidden architectural lighting channels and seismic joint fasteners.'
    ],
    specs: {
      material: 'ASTM A36 Plate & Rolled Hollow Profiles',
      tolerance: '± 2.0mm curvature offset',
      weight: '118,000 kg',
      dimensions: '45m total spiral height'
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200', // Modern metal building facade
    tags: ['Architectural Steel', 'Helical Rolling', 'Seismic Fastening'],
    year: '2026'
  },
  {
    id: 'proj-03',
    title: 'Ultra-Precision Aviation Turbine Brackets',
    category: 'laser-cutting',
    description: 'High-precision aerospace support brackets fabricated with 10kW fiber optic laser cutting followed by automated CNC press brake forming.',
    details: [
      'Processed using high-pressure nitrogen assist gas to ensure 100% oxide-free, clean cutting edges.',
      'Achieved micro-tolerances of ±0.05mm using automated visual nesting and thermal distortion compensation.',
      'Followed by multi-axis CNC bending and automated deburring for aviation-ready finishes.'
    ],
    specs: {
      material: 'AISI 316L Stainless Steel',
      tolerance: '± 0.05mm critical hole-to-hole',
      weight: '1.2 kg per unit',
      dimensions: '340mm x 180mm x 4mm'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200', // Laser cutting spark closeup or machinery
    tags: ['10kW Fiber Laser', 'Aerospace Tolerance', 'Oxide-Free Edge'],
    year: '2025'
  },
  {
    id: 'proj-04',
    title: 'Quarrymaster Heavy Chassis Frame',
    category: 'heavy-industrial',
    description: 'Ultra-duty customized steel chassis for a large-scale quarry screening machine, requiring custom heavy bevel prep and multi-pass MIG welding.',
    details: [
      'Built using extreme wear-resistant Hardox steel plates combined with heavy structural I-beams.',
      'Multi-pass heavy-duty MIG welding (FCAW) executed by ASME Section IX certified welders.',
      'Thermally stress-relieved and blast-cleaned to SA 2.5 standards before epoxy primer sealing.'
    ],
    specs: {
      material: 'Hardox 450 Wear Plates & ASTM A572 I-Beams',
      tolerance: '± 1.5mm diagonal alignment',
      weight: '18,600 kg',
      dimensions: '9.2m x 3.1m x 1.8m'
    },
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1200', // Factory production heavy machinery
    tags: ['Heavy Industrial', 'MIG Multi-Pass', 'Wear-Resistant Steel'],
    year: '2024'
  },
  {
    id: 'proj-05',
    title: 'Quantum Tech CNC Enclosures',
    category: 'laser-cutting',
    description: 'Custom acoustic and safety steel enclosures for high-speed automated semiconductor testing machines, with micro-ventilation patterns.',
    details: [
      'High-speed fiber-laser cut with complex micro-ventilation patterns (over 4,000 sub-millimeter perforations).',
      'Constructed with cold-rolled electro-galvanized steel sheets to provide excellent EMI/RFI shielding.',
      'Finished with electrostatic industrial powder coating in durable fine texture matte finish.'
    ],
    specs: {
      material: 'Electro-Galvanized Cold Rolled Steel (SECC)',
      tolerance: '± 0.1mm sheet-to-sheet',
      weight: '145 kg per enclosure',
      dimensions: '1800mm x 1200mm x 900mm'
    },
    image: 'https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&q=80&w=1200', // Metal server racks or CNC boxes
    tags: ['Perforated Patterns', 'EMI Shielding', 'Powder Coating'],
    year: '2025'
  },
  {
    id: 'proj-06',
    title: 'Solaris Suspended Pedestrian Archway',
    category: 'structural',
    description: 'Suspended architectural double-arch steel bridge linking two high-security green energy research campuses across a central ravine.',
    details: [
      'Tubular steel tension arch design engineered to distribute asymmetric pedestrian loads.',
      'High-performance duplex stainless steel detailing on cable attachment lugs for high salt spray resistance.',
      'Erected in pre-assembled sections to minimize environmental impact on the protected ravine.'
    ],
    specs: {
      material: 'S355J2H Structural Hollow Profiles & Duplex 2205 Details',
      tolerance: '± 3.0mm cable-stay tensioners',
      weight: '67,000 kg',
      dimensions: '38m span length'
    },
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1200', // Modern architectural steel bridge
    tags: ['Bridges & Arches', 'Duplex Stainless', 'Assembled Modular'],
    year: '2026'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Marcus Vialli',
    role: 'Lead Structural Engineer',
    company: 'Vanguard Infrastructure Partners',
    quote: 'The level of structural precision Forgelinea delivered on our airport cantilever terminal was exceptional. Their AWS-certified welders and robotic alignments held tighter tolerances than any other shop in the industry. They are our go-to partner.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    avatarAlt: 'Marcus Vialli'
  },
  {
    id: 'test-02',
    name: 'Jessica James',
    role: 'Principal Architectural Designer',
    company: 'AeroCrest Design Lab',
    quote: 'Our helical museum facade required extreme curved profiles that most shops deemed impossible. Forgelinea worked alongside us in CAD/CAM, delivered gorgeous custom rolled members, and installed them ahead of schedule. Truly flawless visual execution.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    avatarAlt: 'Jessica James'
  },
  {
    id: 'test-03',
    name: 'Dr. Anika Reinhardt',
    role: 'Director of Advanced Robotics',
    company: 'Quantum Tech Systems',
    quote: 'For our semiconductor enclosures, thermal dissipation and EMI shielding were critical. Forgelinea’s 10kW fiber laser produced perfect, oxide-free micro-perforated grids. Their engineering prowess is visible in every single bend and fitment.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    avatarAlt: 'Dr. Anika Reinhardt'
  },
  {
    id: 'test-04',
    name: 'James Okonkwo',
    role: 'Director of Procurement',
    company: 'Heavy-Quarry Mining Corp',
    quote: 'We operate heavy shaker chassis in severe abrasion environments. Forgelinea’s MIG multi-pass welding on Hardox wear plates has proven indestructible. They provided complete ultrasonic and magnetic particle testing records. Complete transparency, unbeatable durability.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    avatarAlt: 'James Okonkwo'
  }
];

export const laserSimulatorPresets = [
  {
    id: 'stainless',
    materialName: 'Stainless Steel 316L',
    maxThickness: '15mm',
    optimalThickness: '6mm',
    laserPower: 10, // kW
    cuttingSpeed: 4.8, // m/min
    gasAssist: 'Nitrogen (High Pressure)',
    nozzleDiameter: '2.5mm',
    difficulty: 'Moderate',
    sparksColor: 'rgba(255, 255, 255, 0.95)', // bright white-blue sparks
    sparksCount: 120,
    accentGlow: 'rgba(46, 139, 192, 0.8)' // electric blue
  },
  {
    id: 'carbon-steel',
    materialName: 'Structural Carbon Steel A36',
    maxThickness: '25mm',
    optimalThickness: '12mm',
    laserPower: 12, // kW
    cuttingSpeed: 2.2, // m/min
    gasAssist: 'Oxygen (Low Pressure)',
    nozzleDiameter: '3.5mm',
    difficulty: 'Low',
    sparksColor: 'rgba(255, 120, 0, 0.95)', // hot orange-yellow sparks
    sparksCount: 180,
    accentGlow: 'rgba(255, 90, 0, 0.8)' // bright hot amber
  },
  {
    id: 'aluminum',
    materialName: 'Aluminum 6061-T6',
    maxThickness: '12mm',
    optimalThickness: '4mm',
    laserPower: 8, // kW
    cuttingSpeed: 6.5, // m/min
    gasAssist: 'Nitrogen / Air Assist',
    nozzleDiameter: '2.0mm',
    difficulty: 'High (Highly Reflective)',
    sparksColor: 'rgba(220, 240, 255, 0.95)', // cool white-cyan sparks
    sparksCount: 90,
    accentGlow: 'rgba(0, 220, 255, 0.7)' // deep cyan
  },
  {
    id: 'titanium',
    materialName: 'Titanium Grade 5 (Ti-6Al-4V)',
    maxThickness: '10mm',
    optimalThickness: '3mm',
    laserPower: 10, // kW
    cuttingSpeed: 3.5, // m/min
    gasAssist: 'Argon (Ultra-Pure Inert)',
    nozzleDiameter: '2.2mm',
    difficulty: 'Extreme (Highly Reactive)',
    sparksColor: 'rgba(255, 255, 180, 0.95)', // brilliant intense white sparks
    sparksCount: 150,
    accentGlow: 'rgba(255, 255, 255, 0.8)' // blinding white-silver
  }
];

export const industriesMarquee = [
  'STRUCTURAL ARCHITECTURE',
  'AEROSPACE DEFENSE',
  'AUTOMOTIVE ASSEMBLY',
  'INFRASTRUCTURE PROJECTS',
  'HEAVY INDUSTRIAL MINING',
  'ENERGY & POWER STATIONS',
  'MARINE ENGINEERING',
  'BESPOKE STEEL SCULPTURES'
];
