import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  number: string;
  image: string;
  tags: string[];
  title: string;
  description: string;
  index: number;
}

function ServiceCard({ number, image, tags, title, description, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-[#0a0a0a] min-h-[40vw] flex flex-col cursor-pointer overflow-hidden p-[4vw]"
    >
      {/* Left Border Accent */}
      <div className="absolute left-0 top-0 w-[2px] h-0 bg-white transition-all duration-400 ease-out group-hover:h-full z-20" />

      {/* Top Row: Number & Arrow */}
      <div className="flex justify-between items-start mb-[3vw]">
        <span className="text-[3vw] md:text-[0.7vw] tracking-[0.3em] font-geist-mono text-white/25 uppercase">
          {number}
        </span>
        <ArrowUpRight
          className="text-white/20 transition-all duration-300 group-hover:text-white group-hover:translate-x-[4px] group-hover:-translate-y-[4px] w-[5vw] h-[5vw] md:w-[1.2vw] md:h-[1.2vw]"
        />
      </div>

      {/* Image Container */}
      <div className="relative w-full h-[50vw] md:h-[18vw] overflow-hidden rounded-[4px] mb-[2.5vw]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.8] saturate-[0.9] transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-100 group-hover:saturate-100"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-[8px] mb-[1.5vw]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="border border-white/12 rounded-full px-[12px] py-[3px] text-[2.5vw] md:text-[0.6vw] tracking-[0.2em] uppercase text-white/40"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-[6vw] md:text-[2vw] font-bold text-white mb-[1vw] tracking-[-0.02em]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-[3.5vw] md:text-[0.85vw] text-white/50 leading-[1.9] max-w-[380px]" style={{ fontFamily: "'Playfair Display', serif" }}>
          {description}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="mt-[2.5vw] pt-[1.5vw] border-t border-white/6 group-hover:border-white/10 transition-colors">
        <span className="text-[3vw] md:text-[0.75vw] tracking-[0.2em] uppercase text-white/35 transition-colors group-hover:text-white flex items-center gap-2">
          View Work <span>→</span>
        </span>
      </div>

      {/* Subtle Background Shift */}
      <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const services = [
    {
      number: "01",
      image: "/images/brand-identity.jpg",
      tags: ["IDENTITY", "BRANDING", "LOGO", "STRATEGY"],
      title: "Brand Identity",
      description: "We build brand identities that feel inevitable. From visual language to strategy — every mark we create carries meaning and memory."
    },
    {
      number: "02",
      image: "/images/uiux.jpg",
      tags: ["UI DESIGN", "UX RESEARCH", "PROTOTYPING", "SYSTEMS"],
      title: "UI/UX Design",
      description: "Interfaces that feel like they were made for the person using them. We design with empathy, precision, and an obsession for detail."
    },
    {
      number: "03",
      image: "/images/webdesign.jpg",
      tags: ["WEB DESIGN", "RESPONSIVE", "ANIMATION", "NEXT.JS"],
      title: "Web Design",
      description: "Websites that don't just look good — they perform. Built with modern frameworks, designed to convert, and crafted to be remembered."
    },
    {
      number: "04",
      image: "/images/motiondesign.jpg",
      tags: ["MOTION", "ANIMATION", "3D", "VISUAL STORYTELLING"],
      title: "Motion Design",
      description: "Motion is the language of attention. We create animations and visual sequences that give brands a heartbeat — and make audiences stop scrolling."
    }
  ];

  return (
    <section
      id="services"
      className="w-full bg-[#0a0a0a] border-t border-white/6"
    >
      {/* Header */}
      <header
        ref={headerRef}
        className="px-[8vw] py-[8vw] lg:pb-[5vw] flex flex-col md:flex-row justify-between items-end gap-[4vw]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="block text-[3vw] md:text-[0.7vw] tracking-[0.5em] uppercase text-white/35 mb-[2vw]">
            WHAT WE OFFER
          </span>
          <h2 className="text-[10vw] md:text-[clamp(3rem,5.5vw,5.5rem)] font-black text-white leading-[1.05] tracking-[-0.03em]">
            Creative Services<br />
            Built for Impact.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[4.5vw] md:text-[0.95vw] text-white/45 max-w-[380px] leading-[1.9] mb-[0.5vw]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We craft digital experiences that define brands,
          move people, and drive results. Every project
          is an obsession — not a deliverable.
        </motion.p>
      </header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/6 px-[8vw] mt-[2vw]">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>


    </section>
  );
}
