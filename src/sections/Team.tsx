'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';

const team = [
    {
        id: 'vishnu',
        name: 'VISHNU',
        role: 'Founder & Lead Dev',
        stack: 'Next.js · Python · AI · React',
        image: '/images/ceo.png',
        badge: 'FOUNDER',
        featured: true,
    },
    {
        id: 'akhil',
        name: 'AKHIL',
        role: 'Backend Engineer',
        stack: 'Node.js · PostgreSQL · Redis',
        image: '/images/person2.png',
        featured: false,
    },
    {
        id: 'sanjay',
        name: 'SANJAY',
        role: 'UI/UX Designer',
        stack: 'Figma · Framer · CSS',
        image: '/images/person4.png',
        featured: false,
    },
    {
        id: 'neha',
        name: 'NEHA',
        role: 'Mobile Developer',
        stack: 'Flutter · Dart · Firebase',
        image: '/images/person1.png',
        featured: false,
    },
    {
        id: 'priya',
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
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as Easing }
    })
};

export default function Team() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section
            ref={ref}
            style={{ background: '#080808', padding: '10vw 4vw 6vw', overflow: 'hidden' }}
        >
            {/* HEADER */}
            <div style={{ marginBottom: '6vw', position: 'relative' }}>
                {/* "THE BUILDERS" label */}
                <motion.p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5vw' }}>
                    THE BUILDERS
                </motion.p>

                {/* Rule */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    style={{ height: '1px', background: 'rgba(255,255,255,0.08)', marginBottom: '2.5vw' }}
                />

                {/* Big headline */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9vw', fontWeight: 900, lineHeight: 0.9, color: '#fff', margin: 0 }}
                        >
                            ATHERA
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.32 }}
                            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9vw', fontWeight: 900, lineHeight: 0.9, color: '#fff', margin: 0 }}
                        >
                            LABS <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontWeight: 400 }}>Team.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                            style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9vw', color: 'rgba(255,255,255,0.35)', fontStyle: 'italic', marginTop: '1.5vw', margin: '1.5vw 0 0 0' }}
                        >
                            "Five minds. One direction."
                        </motion.p>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.7vw', color: 'rgba(255,255,255,0.3)', alignSelf: 'flex-start', margin: 0 }}
                    >
                        05 BUILDERS · 2026
                    </motion.p>
                </div>
            </div>

            {/* FIGURE STRIP */}
            <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                width: '100%',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                gap: 0,
            }}>
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
                            flex: member.featured ? '1.25' : '1',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            opacity: hoveredId && hoveredId !== member.id ? 0.35 : 1,
                            transition: 'opacity 0.3s ease',
                        }}
                    >
                        {/* FOUNDER BADGE */}
                        {member.badge && (
                            <div style={{
                                position: 'absolute',
                                top: '1vw',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                padding: '0.3vw 0.8vw',
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '0.5vw',
                                color: 'rgba(255,255,255,0.5)',
                                letterSpacing: '0.2em',
                                zIndex: 2,
                            }}>
                                {member.badge}
                            </div>
                        )}

                        {/* IMAGE */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: member.featured ? '52vw' : '48vw', /* Adjusted to look good across screens */
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
                                    mixBlendMode: 'luminosity',
                                    filter: hoveredId === member.id ? 'brightness(1.15) scale(1.03)' : 'brightness(0.95)',
                                    transformOrigin: 'bottom center',
                                    transition: 'all 0.3s ease-out',
                                }}
                            />
                        </div>

                        {/* TEXT LABELS */}
                        <div style={{ padding: '1.2vw 0.5vw 2vw', textAlign: 'center', width: '100%' }}>
                            <p style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: member.featured ? '1.4vw' : '1.1vw',
                                fontWeight: 700,
                                color: '#fff',
                                margin: '0 0 0.3vw',
                                letterSpacing: '0.05em',
                                textShadow: hoveredId === member.id ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
                                transition: 'text-shadow 0.3s ease',
                                textTransform: 'uppercase'
                            }}>
                                {member.name}
                            </p>
                            <p style={{
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '0.65vw',
                                color: 'rgba(255,255,255,0.4)',
                                margin: '0 0 0.4vw',
                            }}>
                                {member.role}
                            </p>
                            <p style={{
                                fontFamily: 'DM Mono, monospace',
                                fontSize: '0.55vw',
                                color: 'rgba(255,255,255,0.22)',
                                margin: 0
                            }}>
                                {member.stack}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* BOTTOM BAR */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '1.5vw',
            }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6vw', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', margin: 0 }}>
                    ATHERA LABS · STEALTH MODE · 2026
                </p>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6vw', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', margin: 0 }}>
                    BUILDING INTELLIGENT PRODUCTS
                </p>
            </div>
        </section>
    );
}
