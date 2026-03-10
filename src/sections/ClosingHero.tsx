import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AtheraLabsDashboard from '@/components/AtheraLabsDashboard';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/dm-sans/900.css';
import '@fontsource/dm-mono/400.css';
import '@fontsource/dm-mono/500.css';

interface StatItemProps {
    number: string;
    label: string;
}

function StatItem({ number, label }: StatItemProps) {
    return (
        <div className="flex flex-col gap-1">
            <span className="text-[2.5vw] font-black text-white leading-none tracking-tight">{number}</span>
            <span className="text-[0.6vw] text-white/30 tracking-[0.3em] uppercase font-geist-mono">{label}</span>
        </div>
    );
}

export function ClosingHero() {
    const brandRef = useRef(null);
    const descriptorRef = useRef(null);

    const isBrandInView = useInView(brandRef, { once: true });

    return (
        <section id="dashboard" className="relative w-full bg-[#080808]" style={{ paddingTop: 0, marginTop: 0 }}>
            <div className="relative z-10">
                {/* PART 1 â€” HERO BRAND CENTERPIECE */}
                <div ref={brandRef} className="pt-[2vw] pb-0 mb-[2vw] text-center">
                    <motion.img
                        src="/images/eagle-logo.png"
                        alt="Athera Labs Logo"
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={isBrandInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-[10vw] h-auto mx-auto mb-[2vw] mix-blend-screen brightness-[1.2] contrast-[1.1]"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={isBrandInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-[10vw] md:text-[clamp(4rem,10vw,12rem)] font-black leading-[0.95] tracking-[-0.04em] mb-[1.5vw] uppercase"
                    >
                        <span
                            className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/75"
                        >
                            ATHERA LABS
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isBrandInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-[1.2vw] text-white/40 tracking-[0.3em] uppercase font-geist-mono"
                    >
                        Building Intelligent Products for the Future.
                    </motion.p>
                </div>

                {/* PART 2 â€” AESTHETIC DESCRIPTOR TEXTS */}
                <div ref={descriptorRef} className="px-[8vw] mt-0 pt-[4vw] mb-[6vw]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] border-y border-white/10 p-[4vw_0]">
                        {/* Column 1: THE TEAM */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left"
                        >
                            <h5 className="text-[0.6vw] tracking-[0.3em] uppercase text-white/30 font-geist-mono mb-[1.5vw]">THE TEAM</h5>
                            <p className="text-[0.9vw] text-white/50 leading-[2] italic mb-[2vw]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                "Five minds. One direction. We are builders, researchers, and designers who believe that the best products are born from obsession â€” not just skill."
                            </p>
                            <div className="space-y-[0.2vw]">
                                {["Vishnu — Founder & Lead Dev", "Akhil — Backend Engineer", "Sanjay — UI/UX Designer", "Neha — Mobile Developer", "Priya — AI & Research"].map((name) => (
                                    <p key={name} className="text-[0.75vw] text-white/35 font-geist-mono tracking-wider leading-[2.2]">{name}</p>
                                ))}
                            </div>
                        </motion.div>

                        {/* Column 2: THE COMPANY */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 }}
                            className="text-center md:text-left"
                        >
                            <h5 className="text-[0.6vw] tracking-[0.3em] uppercase text-white/30 font-geist-mono mb-[1.5vw]">THE COMPANY</h5>
                            <p className="text-[0.9vw] text-white/50 leading-[2] mb-[2vw]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Athera Labs is a stealth-mode startup operating at the edge of AI and product design. We build software that thinks, adapts, and creates value before the market asks for it.
                            </p>
                            <div className="grid grid-cols-2 gap-[2vw]">
                                <StatItem number="17" label="Founder's Age" />
                                <StatItem number="5" label="Team Size" />
                                <StatItem number="2+" label="Live Projects" />
                                <StatItem number="âˆž" label="Ambition" />
                            </div>
                        </motion.div>

                        {/* Column 3: THE VISION */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-center md:text-left"
                        >
                            <h5 className="text-[0.6vw] tracking-[0.3em] uppercase text-white/30 font-geist-mono mb-[1.5vw]">THE VISION</h5>
                            <p className="text-[0.9vw] text-white/50 leading-[2] mb-[2vw]" style={{ fontFamily: "'Playfair Display', serif" }}>
                                We are not chasing trends. We are setting them. The products Athera Labs builds today will define how people work, create, and automate â€” tomorrow.
                            </p>
                            <div className="border-left-[2px] border-white/15 pl-[1.5vw]">
                                <p className="text-[0.85vw] text-white/35 leading-[2] italic" style={{ fontFamily: "'Playfair Display', serif", borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: '1.5vw' }}>
                                    "The future belongs to those who build it before it arrives."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Dashboard redesign */}
                <div style={{ padding: '0 8vw', paddingBottom: '6vw' }}>
                    <AtheraLabsDashboard />
                </div>
            </div>
        </section>
    );
}
