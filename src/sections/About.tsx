import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureBlockProps {
  image: string;
  tags: string[];
  title: string;
  description: string;
  isReversed?: boolean;
}

function FeatureBlock({ image, tags, title, description, isReversed }: FeatureBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col lg:flex-row items-center gap-[5vw] py-[4vw] border-t border-white/10",
        isReversed && "lg:flex-row-reverse"
      )}
    >
      {/* Image Container */}
      <motion.div
        initial={{ x: isReversed ? 60 : -60, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="flex-1 w-full lg:w-auto overflow-hidden rounded-[8px] bg-white/[0.03] border border-white/[0.06] p-[2vw]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-[50vw] md:h-[40vw] lg:h-[22vw] object-contain mix-blend-screen transition-all duration-&lsqb;600ms&rsqb; ease-out hover:scale-[1.03]"
        />
      </motion.div>

      {/* Text Container */}
      <motion.div
        initial={{ x: isReversed ? -40 : 40, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="flex-1 space-y-[1.5vw]"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-[12px]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/15 rounded-full px-[14px] py-[4px] text-[3vw] md:text-[0.65vw] tracking-[0.2em] uppercase text-white/50 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-[8vw] md:text-[2.5vw] font-bold text-white transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-[4vw] md:text-[1.05vw] text-white/60 leading-[2] max-w-[440px]"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, fontStyle: 'normal' }}
        >
          {description}
        </p>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1117 20%, #0a0f1e 40%, #0d0a1a 60%, #0a1a0f 80%, #0a0a0a 100%)'
      }}
    >

      <div className="relative z-10">
        {/* Header */}
        <header className="px-[8vw] pt-[8vw] pb-[4vw]">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block text-[3vw] md:text-[0.75vw] tracking-[0.5em] uppercase text-white/40 mb-[2vw]"
          >
            ABOUT ATHERA LABS
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[10vw] md:text-[clamp(3rem,6vw,6rem)] font-black text-white leading-[1.1] tracking-[-0.03em] mb-[1.5vw]">
              Building Intelligent <br />
              <span className="bg-white text-black px-[0.5em] py-[0.1em] inline-block mr-[0.2em]">Products</span>
              for the
              <span className="bg-white text-black px-[0.5em] py-[0.1em] inline-block ml-[0.3em] mt-[0.2em] md:mt-0">Future.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-[4.5vw] md:text-[1vw] text-white/50 max-w-[500px] leading-[1.8] mt-[1.5vw]"
          >
            Athera Labs is a team of 5 builders focused on
            SaaS development, AI systems, and intelligent automation.
            We don't just write code — we build products that think.
          </motion.p>
        </header>

        {/* Content Blocks */}
        <div className="px-[8vw] space-y-[4vw]">
          <FeatureBlock
            image="/images/llmtraining.png"
            tags={["LLM TRAINING", "DATA INGESTION", "MODEL REFINEMENT", "AI RESEARCH"]}
            title="LLM Training & Refinement"
            description="We process and refine large language models through structured data ingestion pipelines. From raw text documents to knowledge graphs — our training flow is built for precision, not approximation."
          />
          <FeatureBlock
            image="/images/research.png"
            tags={["RESEARCH AGENT", "KNOWLEDGE MAPS", "DATA ANALYSIS", "AI SYSTEMS"]}
            title="Research Intelligence"
            description="Our research agents process academic papers, datasets, and web documents to generate structured knowledge maps and analysis reports — turning raw information into actionable intelligence."
            isReversed
          />
          <FeatureBlock
            image="/images/fullstack.png"
            tags={["FULL-STACK", "WEB APPS", "API DESIGN", "SAAS"]}
            title="Full-Stack Development"
            description="We architect complete web systems — frontend interfaces, backend services, API connections, and database layers. Every product we build is production-ready, scalable, and built to last."
          />
          <FeatureBlock
            image="/images/automation.png"
            tags={["AUTOMATION", "AI AGENTS", "WORKFLOWS", "INTELLIGENT SYSTEMS"]}
            title="Intelligent Automation"
            description="We build automation engines that think. Trigger events, process data through AI analysis, execute decision logic — our systems handle complex workflows without human intervention."
            isReversed
          />
        </div>

        {/* Stats Row */}
        <footer className="px-[8vw] py-[6vw] border-t border-white/10 flex flex-wrap lg:flex-nowrap items-center gap-[6vw]">
          <div className="flex items-center gap-[6vw] flex-1">
            <StatItem number="5" label="Team Members" />
            <div className="hidden md:block w-px h-[4vw] bg-white/10" />
            <StatItem number="19+" label="Projects Shipped" />
          </div>
          <div className="flex items-center gap-[6vw] flex-1">
            <div className="hidden lg:block w-px h-[4vw] bg-white/10" />
            <StatItem number="10" label="AI Systems Built" />
            <div className="hidden md:block w-px h-[4vw] bg-white/10" />
            <StatItem number="3" label="SaaS In Progress" />
          </div>
        </footer>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[12vw] md:text-[4vw] font-black text-white leading-none">
        {number}
      </span>
      <span className="text-[3vw] md:text-[0.75vw] text-white/40 tracking-[0.3em] uppercase mt-[0.5vw]">
        {label}
      </span>
    </div>
  );
}
