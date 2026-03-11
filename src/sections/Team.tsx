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
        gridCol: '1',
        figureHeight: '72vw',
        figureMaxH: '820px',
        nameSize: '4vw',
        description: "He doesn't write code. He writes infrastructure. The kind that doesn't break at 3AM when everything matters. Every API, every database, every silent system running beneath the surface — that's Akhil's architecture holding it all together.",
    },
    {
        id: 'sanjay',
        name: 'SANJAY',
        role: 'UI/UX Designer',
        stack: 'Figma · Framer · CSS',
        image: '/images/person4.png',
        gridCol: '2',
        figureHeight: '55vw',
        figureMaxH: '640px',
        nameSize: '2.5vw',
        description: "He sees what others skip. The 2px that makes something feel right. The pause before an animation that makes it feel alive. Sanjay doesn't design interfaces — he designs the feeling of using them.",
    },
    {
        id: 'neha',
        name: 'NEHA',
        role: 'Mobile Developer',
        stack: 'Flutter · Dart · Firebase',
        image: '/images/person1.png',
        gridCol: '3',
        figureHeight: '48vw',
        figureMaxH: '560px',
        nameSize: '2.5vw',
        description: "She builds for the hand, the thumb, the split-second decision. Every screen Neha ships is a product people carry in their pocket and trust with their time. Flutter is her language. Precision is her standard.",
    },
    {
        id: 'priya',
        name: 'PRIYA',
        role: 'AI & Research',
        stack: 'Python · LLMs · HuggingFace',
        image: '/images/person3.png',
        gridCol: '4',
        figureHeight: '60vw',
        figureMaxH: '700px',
        nameSize: '3vw',
        description: "She reads papers the way others read news. Priya is the mind behind our models — training, refining, pushing LLMs past their defaults. Where the rest of us build products, she builds the intelligence inside them.",
    },
];

export default function Team() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section ref={ref} style={{ background: '#f0eeea', padding: '5vw 3vw 4vw', overflow: 'hidden', position: 'relative' }}>

            {/* ROW 1 — SECTION HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0' }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 }}
                    style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.4)', margin: 0 }}
                >
                    THE BUILDERS
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.1 }}
                    style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', color: 'rgba(10,10,10,0.3)', margin: 0 }}
                >
                    05 / 2026
                </motion.p>
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '9vw',
                    fontWeight: 900,
                    color: '#0a0a0a',
                    lineHeight: 0.85,
                    letterSpacing: '-0.03em',
                    margin: '0 0 -2vw 0',
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                ATHERA LABS TEAM
            </motion.h2>

            {/* ROW 2 — MAIN FIGURE ROW (Brutalist Grid) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1.3fr',
                gap: '0.5vw',
                alignItems: 'end',
                width: '100%',
                position: 'relative',
                zIndex: 1,
            }}>
                {team.map((member, i) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 60 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        onMouseEnter={() => setHoveredId(member.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            position: 'relative',
                            width: '100%',
                            opacity: hoveredId && hoveredId !== member.id ? 0.3 : 1,
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        {/* Figure Image Container */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: member.figureHeight,
                            maxHeight: member.figureMaxH,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}>
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

                        {/* Name Overlaid or Tight at Bottom */}
                        <div style={{
                            position: member.gridCol === '1' ? 'absolute' : 'relative',
                            bottom: member.gridCol === '1' ? '-1vw' : '0',
                            left: 0,
                            zIndex: 3,
                            textAlign: member.gridCol === '1' ? 'left' : 'center',
                            width: '100%',
                            padding: member.gridCol === '1' ? '0' : '1vw 0 0',
                        }}>
                            <h3 style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontWeight: 900,
                                fontSize: member.nameSize,
                                color: '#0a0a0a',
                                margin: 0,
                                lineHeight: 1,
                                textTransform: 'uppercase',
                            }}>
                                {member.name}
                            </h3>
                            <p style={{
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '0.65vw',
                                color: 'rgba(10,10,10,0.5)',
                                margin: '0.2vw 0 0',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                            }}>
                                {member.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ROW 3 — DESCRIPTION ROW */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1.3fr',
                    gap: '0.5vw',
                    padding: '1.5vw 0 0',
                    borderTop: '1px solid rgba(10,10,10,0.1)',
                    marginTop: '1.5vw',
                }}
            >
                {team.map((member) => (
                    <div key={`${member.id}-desc`} style={{ paddingRight: '1vw' }}>
                        <p style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.55vw',
                            color: 'rgba(10,10,10,0.28)',
                            margin: '0 0 0.8vw 0',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                        }}>
                            {member.stack}
                        </p>
                        <p style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.72vw',
                            color: 'rgba(10,10,10,0.5)',
                            fontStyle: 'italic',
                            lineHeight: 1.8,
                            margin: 0,
                        }}>
                            {member.description}
                        </p>
                    </div>
                ))}
            </motion.div>

            {/* ROW 4 — BOTTOM BAR */}
            <div style={{
                borderTop: '1px solid rgba(10,10,10,0.1)',
                marginTop: '3vw',
                paddingTop: '1.5vw',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
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
