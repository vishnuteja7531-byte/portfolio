'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';

const team = [
    {
        id: 'vishnu',
        num: '01',
        name: 'VISHNU',
        role: 'Founder & Lead Dev',
        stack: 'Next.js · Python · AI · React',
        image: '/images/ceo.png',
        badge: 'FOUNDER · 01',
        featured: true,
    },
    {
        id: 'akhil',
        num: '02',
        name: 'AKHIL',
        role: 'Backend Engineer',
        stack: 'Node.js · PostgreSQL · Redis',
        image: '/images/person2.png',
        featured: false,
    },
    {
        id: 'sanjay',
        num: '03',
        name: 'SANJAY',
        role: 'UI/UX Designer',
        stack: 'Figma · Framer · CSS',
        image: '/images/person4.png',
        featured: false,
    },
    {
        id: 'neha',
        num: '04',
        name: 'NEHA',
        role: 'Mobile Developer',
        stack: 'Flutter · Dart · Firebase',
        image: '/images/person1.png',
        featured: false,
    },
    {
        id: 'priya',
        num: '05',
        name: 'PRIYA',
        role: 'AI & Research',
        stack: 'Python · LLMs · HuggingFace',
        image: '/images/person3.png',
        featured: false,
    },
];

const figureVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as Easing }
    })
};

export default function Team() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section ref={ref} style={{ background: '#f0eeea', padding: '6vw 4vw 4vw', overflow: 'hidden' }}>

            {/* PART 1 — TOP SPLIT */}
            <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '0' }}>

                {/* LEFT — Text content */}
                <div style={{ flex: '0 0 60%', paddingRight: '4vw' }}>

                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.4)', marginBottom: '2vw' }}
                    >
                        THE BUILDERS
                    </motion.p>

                    {/* Big headline */}
                    {['ATHERA LABS', 'IS MORE THAN', 'JUST CODE.'].map((line, i) => (
                        <motion.h2
                            key={line}
                            initial={{ opacity: 0, y: 35 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.15, duration: 0.75 }}
                            style={{
                                fontFamily: i === 2 ? 'Cormorant Garamond, serif' : 'DM Sans, sans-serif',
                                fontStyle: i === 2 ? 'italic' : 'normal',
                                fontSize: '7vw',
                                fontWeight: i === 2 ? 400 : 900,
                                lineHeight: 0.88,
                                color: '#0a0a0a',
                                margin: 0,
                            }}
                        >
                            {line}
                        </motion.h2>
                    ))}

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }}
                        style={{
                            fontFamily: 'DM Mono, monospace', fontSize: '0.85vw', color: 'rgba(10,10,10,0.55)',
                            lineHeight: 1.7, maxWidth: '38vw', marginTop: '2.5vw'
                        }}
                    >
                        We are a stealth-mode collective of builders, researchers, and designers
                        operating at the edge of AI and product design. Every product we ship
                        is engineered to think, adapt, and create value before the market asks for it.
                    </motion.p>

                    {/* Button */}
                    <motion.button
                        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
                        style={{
                            marginTop: '2.5vw', fontFamily: 'DM Mono, monospace', fontSize: '0.7vw',
                            border: '1px solid rgba(10,10,10,0.3)', padding: '0.8vw 2vw',
                            background: 'transparent', color: '#0a0a0a', cursor: 'pointer',
                            letterSpacing: '0.1em', transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => { (e.target as HTMLElement).style.background = '#0a0a0a'; (e.target as HTMLElement).style.color = '#f0eeea' }}
                        onMouseLeave={e => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#0a0a0a' }}
                    >
                        MEET THE TEAM →
                    </motion.button>
                </div>

                {/* RIGHT — Featured Vishnu figure */}
                <div style={{ flex: '0 0 40%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <div style={{ position: 'absolute', top: '1vw', left: '1vw', zIndex: 2, border: '1px solid rgba(10,10,10,0.25)', padding: '0.3vw 0.8vw' }}>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.55vw', color: 'rgba(10,10,10,0.5)', letterSpacing: '0.15em' }}>FOUNDER · 01</span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.9 }}
                        style={{ position: 'relative', width: '100%', height: '55vw', maxHeight: '650px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                    >
                        <img src="/images/ceo.png" alt="Vishnu" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }} />
                    </motion.div>
                </div>
            </div>

            {/* PART 2 — DIVIDER RULE */}
            <motion.div
                initial={{ width: 0 }} animate={inView ? { width: '100%' } : {}} transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
                style={{ height: '1px', background: 'rgba(10,10,10,0.12)', margin: '4vw 0 0' }}
            />

            {/* PART 3 — BOTTOM FIGURE STRIP */}
            <div style={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                {team.map((member, i) => (
                    <motion.div
                        key={member.id}
                        custom={i}
                        variants={figureVariants}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        onMouseEnter={() => setHoveredId(member.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            borderRight: i < team.length - 1 ? '1px solid rgba(10,10,10,0.1)' : 'none',
                            padding: '0 1vw',
                            opacity: hoveredId && hoveredId !== member.id ? 0.35 : 1,
                            transition: 'opacity 0.3s ease',
                            cursor: 'default',
                        }}
                    >
                        {/* Number */}
                        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.55vw', color: 'rgba(10,10,10,0.3)', alignSelf: 'flex-start', marginBottom: '0.5vw' }}>
                            {member.num}
                        </p>

                        {/* Figure */}
                        <div style={{ position: 'relative', width: '100%', height: '42vw', maxHeight: '520px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center',
                                    transform: hoveredId === member.id ? 'scale(1.02)' : 'scale(1)',
                                    transformOrigin: 'bottom center',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </div>

                        {/* Rule */}
                        <div style={{ width: '100%', height: '1px', background: 'rgba(10,10,10,0.12)' }} />

                        {/* Labels */}
                        <div style={{ padding: '1vw 0 1.5vw', textAlign: 'center' }}>
                            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1vw', fontWeight: 700, color: '#0a0a0a', margin: '0 0 0.3vw', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                                {member.name}
                            </p>
                            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6vw', color: 'rgba(10,10,10,0.45)', margin: '0 0 0.35vw' }}>
                                {member.role}
                            </p>
                            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.52vw', color: 'rgba(10,10,10,0.28)', margin: 0 }}>
                                {member.stack}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* PART 4 — BOTTOM BAR */}
            <div style={{ borderTop: '1px solid rgba(10,10,10,0.1)', marginTop: '2vw', paddingTop: '1.5vw', display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6vw', color: 'rgba(10,10,10,0.25)', letterSpacing: '0.15em', margin: 0 }}>
                    ATHERA LABS · STEALTH MODE · 2026
                </p>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6vw', color: 'rgba(10,10,10,0.25)', letterSpacing: '0.15em', margin: 0 }}>
                    5 BUILDERS. 3 SYSTEMS. 1 VISION.
                </p>
            </div>

        </section>
    );
}
