'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';

const team = [
    {
        id: 'akhil',
        name: 'AKHIL',
        role: 'Backend Engineer',
        stack: 'Node.js · PostgreSQL · Redis',
        image: '/images/person2.png',
        description: "He doesn't write code. He writes infrastructure. The kind that doesn't break at 3AM when everything matters. Every API, every database, every silent system running beneath the surface — that's Akhil's architecture holding it all together.",
    },
    {
        id: 'sanjay',
        name: 'SANJAY',
        role: 'UI/UX Designer',
        stack: 'Figma · Framer · CSS',
        image: '/images/person4.png',
        description: "He sees what others skip. The 2px that makes something feel right. The pause before an animation that makes it feel alive. Sanjay doesn't design interfaces — he designs the feeling of using them.",
    },
    {
        id: 'neha',
        name: 'NEHA',
        role: 'Mobile Developer',
        stack: 'Flutter · Dart · Firebase',
        image: '/images/person1.png',
        description: "She builds for the hand, the thumb, the split-second decision. Every screen Neha ships is a product people carry in their pocket and trust with their time. Flutter is her language. Precision is her standard.",
    },
    {
        id: 'priya',
        name: 'PRIYA',
        role: 'AI & Research',
        stack: 'Python · LLMs · HuggingFace',
        image: '/images/person3.png',
        description: "She reads papers the way others read news. Priya is the mind behind our models — training, refining, pushing LLMs past their defaults. Where the rest of us build products, she builds the intelligence inside them.",
    },
];

const figureVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.13,
            duration: 0.75,
            ease: [0.25, 0.46, 0.45, 0.94] as Easing,
        },
    }),
};

export default function Team() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section ref={ref} style={{ background: '#f0eeea', padding: '6vw 4vw 4vw', overflow: 'hidden' }}>

            {/* ── PART 1: TOP HERO SPLIT ── */}
            <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '8vw' }}>

                {/* LEFT */}
                <div style={{ flex: '0 0 55%', paddingRight: '4vw' }}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.4)', margin: '0 0 2vw 0' }}
                    >
                        THE BUILDERS
                    </motion.p>

                    {['ATHERA LABS', 'IS MORE THAN', 'JUST CODE.'].map((line, i) => (
                        <motion.h2
                            key={line}
                            initial={{ opacity: 0, y: 35 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + i * 0.15, duration: 0.75 }}
                            style={{
                                fontFamily: i === 2 ? 'Cormorant Garamond, serif' : 'DM Sans, sans-serif',
                                fontStyle: i === 2 ? 'italic' : 'normal',
                                fontSize: '7.5vw',
                                fontWeight: i === 2 ? 400 : 900,
                                lineHeight: 0.88,
                                color: '#0a0a0a',
                                margin: 0,
                            }}
                        >
                            {line}
                        </motion.h2>
                    ))}

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.55 }}
                        style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.82vw', color: 'rgba(10,10,10,0.55)', lineHeight: 1.75, maxWidth: '36vw', margin: '2.5vw 0 0 0' }}
                    >
                        We are a stealth-mode collective of builders, researchers, and designers
                        operating at the edge of AI and product design. Every product we ship
                        is engineered to think, adapt, and create value before the market asks for it.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7 }}
                        style={{
                            marginTop: '2.5vw',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.7vw',
                            border: '1px solid rgba(10,10,10,0.3)',
                            padding: '0.8vw 2vw',
                            background: 'transparent',
                            color: '#0a0a0a',
                            cursor: 'pointer',
                            letterSpacing: '0.1em',
                            transition: 'all 0.25s ease',
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a'; (e.currentTarget as HTMLElement).style.color = '#f0eeea' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
                    >
                        MEET THE TEAM →
                    </motion.button>
                </div>

                {/* RIGHT — CEO */}
                <div style={{ flex: '0 0 45%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <div style={{ position: 'absolute', top: 0, right: 0, zIndex: 2, border: '1px solid rgba(10,10,10,0.25)', padding: '0.3vw 0.8vw' }}>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.55vw', color: 'rgba(10,10,10,0.5)', letterSpacing: '0.15em' }}>FOUNDER · 01</span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3, duration: 0.9 }}
                        style={{ position: 'relative', width: '100%', height: '58vw', maxHeight: '680px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
                    >
                        <img
                            src="/images/ceo.png"
                            alt="Vishnu"
                            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center' }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* ── PART 2: 4-MEMBER LINEUP ── */}
            <div style={{ marginBottom: '3vw', textAlign: 'center' }}>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', color: 'rgba(10,10,10,0.35)', letterSpacing: '0.3em', margin: 0 }}
                >
                    THE TEAM
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 900, fontSize: '3.5vw', color: '#0a0a0a', margin: '0.8vw 0 0 0' }}
                >
                    5 BUILDERS. 3 SYSTEMS. 1 VISION.
                </motion.h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: '100%', gap: 0, background: '#f0eeea' }}>
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
                            opacity: hoveredId && hoveredId !== member.id ? 0.3 : 1,
                            transition: 'opacity 0.35s ease',
                            cursor: 'default',
                        }}
                    >
                        {/* Figure */}
                        <div style={{ position: 'relative', width: '100%', height: '55vw', maxHeight: '640px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center',
                                    transform: hoveredId === member.id ? 'scale(1.03)' : 'scale(1)',
                                    transformOrigin: 'bottom center',
                                    transition: 'transform 0.4s ease',
                                }}
                            />
                        </div>

                        {/* Text */}
                        <div style={{ textAlign: 'center', padding: '1.5vw 1vw 2vw', maxWidth: '20vw' }}>
                            <p style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '1.3vw',
                                fontWeight: 800,
                                color: '#0a0a0a',
                                margin: '0 0 0.3vw',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase'
                            }}>
                                {member.name}
                            </p>
                            <p style={{
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '0.65vw',
                                color: 'rgba(10,10,10,0.5)',
                                margin: '0 0 1vw',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}>
                                {member.role}
                            </p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ delay: i * 0.13 + 0.4 }}
                                style={{
                                    fontFamily: 'DM Mono, monospace',
                                    fontSize: '0.68vw',
                                    color: 'rgba(10,10,10,0.45)',
                                    lineHeight: 1.8,
                                    fontStyle: 'italic',
                                    margin: 0,
                                }}
                            >
                                {member.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── BOTTOM BAR ── */}
            <div style={{ borderTop: '1px solid rgba(10,10,10,0.1)', marginTop: '3vw', paddingTop: '1.5vw', display: 'flex', justifyContent: 'space-between' }}>
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
