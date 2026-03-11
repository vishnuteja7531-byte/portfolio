'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const team = [
    {
        id: 'vishnu',
        name: 'VISHNU',
        role: 'Founder & Lead Dev',
        stack: 'Next.js · Python · AI · React',
        image: '/images/ceo.png',
        description: "The architect of the collective's vision. Bridging the gap between high-level AI research and premium product execution, engineering systems that define the future of Athera Labs.",
    },
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

function TeamRow({ member, index }: { member: any; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-15%' });

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                minHeight: member.id !== 'vishnu' ? '65vh' : '90vh',
                borderBottom: '1px solid rgba(10,10,10,0.08)',
                overflow: 'hidden',
            }}
        >
            {/* ━━━ FIGURE SIDE ━━━ */}
            <motion.div
                initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                style={{
                    flex: '0 0 48%',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    height: member.id !== 'vishnu' ? '65vh' : 'auto',
                    maxHeight: member.id !== 'vishnu' ? '65vh' : 'none',
                    width: '100%',
                }}
            >
                <img
                    src={member.image}
                    alt={member.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: member.id === 'neha' ? 'cover' : 'contain',
                        objectPosition: member.id === 'neha' ? 'center 8%' : (member.id === 'vishnu' ? 'bottom center' : 'center center'),
                    }}
                />
            </motion.div>

            {/* ━━━ TEXT SIDE ━━━ */}
            <div style={{
                flex: '0 0 52%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: member.id !== 'vishnu' ? '3vw 4vw' : '5vw 5vw',
                position: 'relative',
            }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.15, duration: 0.9 }}
                    style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.62vw',
                        letterSpacing: '0.25em',
                        color: 'rgba(10,10,10,0.35)',
                        marginBottom: member.id !== 'vishnu' ? '1.2vw' : '2vw',
                        textTransform: 'uppercase',
                        margin: member.id !== 'vishnu' ? `0 0 1.2vw 0` : '0 0 2vw 0'
                    }}
                >
                    {member.role}
                </motion.p>

                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.9 }}
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: member.id !== 'vishnu' ? '7vw' : '10vw',
                        fontWeight: 900,
                        lineHeight: member.id !== 'vishnu' ? 0.88 : 0.85,
                        color: '#0a0a0a',
                        margin: member.id !== 'vishnu' ? '0 0 1.5vw 0' : '0 0 2vw 0',
                        letterSpacing: '-0.03em',
                        textTransform: 'uppercase'
                    }}
                >
                    {member.name}
                </motion.h2>

                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    style={{ height: '1px', background: 'rgba(10,10,10,0.12)', marginBottom: member.id !== 'vishnu' ? '1.5vw' : '2vw' }}
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.9 }}
                    style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: member.id !== 'vishnu' ? '0.58vw' : '0.6vw',
                        color: 'rgba(10,10,10,0.28)',
                        letterSpacing: '0.1em',
                        margin: member.id !== 'vishnu' ? '0 0 1.8vw 0' : '0 0 2.5vw 0',
                        textTransform: 'uppercase'
                    }}
                >
                    {member.stack}
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.9 }}
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: member.id !== 'vishnu' ? '1.1vw' : '1.6vw',
                        fontStyle: 'italic',
                        fontWeight: 400,
                        color: 'rgba(10,10,10,0.65)',
                        lineHeight: member.id !== 'vishnu' ? 1.75 : 1.7,
                        maxWidth: member.id !== 'vishnu' ? '36vw' : '38vw',
                        margin: 0
                    }}
                >
                    {member.description}
                </motion.p>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section style={{ background: '#f0eeea', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '4vw 5vw 2vw',
                borderBottom: '1px solid rgba(10,10,10,0.08)',
            }}>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', letterSpacing: '0.3em', color: 'rgba(10,10,10,0.4)', margin: 0 }}>
                    THE BUILDERS
                </p>
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65vw', letterSpacing: '0.2em', color: 'rgba(10,10,10,0.3)', margin: 0 }}>
                    ATHERA LABS · 05 MEMBERS · 2026
                </p>
            </div>

            {team.map((member, i) => (
                <TeamRow key={member.id} member={member} index={i} />
            ))}

            {/* Bottom Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '2vw 5vw',
                borderTop: '1px solid rgba(10,10,10,0.08)',
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
