import React from 'react';
import { motion } from 'motion/react';

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] // Premium cubic-bezier easeOut
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function CapabilitiesBento() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      
      {/* Mesh radiant accent light */}
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title matching Mercer design hierarchy */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mt-2">
            Why Partner with Forgelinea ?
          </h2>
          <p className="font-sans text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-xl">
            We operate at the convergence of advanced software automation and heavy metallurgy. This enables us to solve structural and aesthetic steel challenges other fabricators turn down.
          </p>
        </motion.div>

        {/* 2x2 Evenly Aligned Grid with 3% Border Radius Images */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          
          {/* Item 1: 10kW Laser Cutting */}
          <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
            <div className="aspect-[16/10] w-full rounded-[3%] overflow-hidden bg-slate-50 border border-slate-100/60 mb-2">
              <img 
                src="/src/assets/images/laser_cutting_device_1784332337230.jpg" 
                alt="Ultra-Precision 10kW Fiber Laser Cutting" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102 rounded-[3%]"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-[#13476B]">
              Ultra-Precision 10kW Fiber Laser Cutting
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              We utilize state-of-the-art 10,000-watt fiber optic laser arrays to cut carbon steel and stainless steel. Our high-pressure nitrogen assist gas delivery system guarantees 100% oxide-free, clean cutting edges that require zero secondary dressing or post-processing.
            </p>
          </motion.div>

          {/* Item 2: BIM & CAD/CAM Software Integration */}
          <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
            <div className="aspect-[16/10] w-full rounded-[3%] overflow-hidden bg-slate-50 border border-slate-100/60 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800" 
                alt="BIM & CAD/CAM Software Integration" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102 rounded-[3%]"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-[#13476B]">
              BIM & CAD/CAM Software Integration
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              We bridge the gap between abstract architectural designs and raw mechanical reality. We ingest files directly from Revit, Tekla, SolidWorks, and AutoCAD, executing automated sheet metal nesting algorithms to maximize material yield and minimize scrap, keeping your project highly cost-efficient.
            </p>
          </motion.div>

          {/* Item 3: AWS Structural Welding Compliance */}
          <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
            <div className="aspect-[16/10] w-full rounded-[3%] overflow-hidden bg-slate-50 border border-slate-100/60 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                alt="AWS Structural Welding Compliance" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102 rounded-[3%]"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-[#13476B]">
              AWS Structural Welding Compliance
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              All structural steel welding is performed strictly to AWS D1.1 and D1.5 bridge codes. We provide certified Welding Procedure Specifications (WPS) and 100% NDT (ultrasonic/magnetic particle) records for all heavy welds, guaranteeing complete legal and physical load compliance.
            </p>
          </motion.div>

          {/* Item 4: Multi-Axis CNC Rolling & Forming */}
          <motion.div className="flex flex-col space-y-4" variants={itemVariants}>
            <div className="aspect-[16/10] w-full rounded-[3%] overflow-hidden bg-slate-50 border border-slate-100/60 mb-2">
              <img 
                src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=800" 
                alt="Multi-Axis CNC Rolling & Forming" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102 rounded-[3%]"
              />
            </div>
            <h3 className="font-display font-bold text-xl text-[#13476B]">
              Multi-Axis CNC Rolling & Forming
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base leading-relaxed">
              Using our heavy-duty 250-ton multi-axis press brakes and automated steel-rolling cylinders, we achieve highly complex spatial shapes and curved profiles. We are experts in fabricating helical stair structures, curved facade arches, and thick steel plate rollings.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
