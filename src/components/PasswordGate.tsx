import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
    const [unlocked, setUnlocked] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [shake, setShake] = useState(false);
    const [checking, setChecking] = useState(true);
    const [videoEnded, setVideoEnded] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [hideTitle, setHideTitle] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const saved = sessionStorage.getItem('athera_unlocked');
        if (saved === 'true') setUnlocked(true);
        setChecking(false);

        // 8.5s fallback timeout (8s video + 0.5s buffer)
        const timeout = setTimeout(() => {
            setVideoEnded(true);
        }, 8500);
        return () => clearTimeout(timeout);
    }, []);

    const handleSubmit = () => {
        if (input === 'VortexiumX7') {
            sessionStorage.setItem('athera_unlocked', 'true');
            setUnlocked(true);
        } else {
            setError(true);
            setShake(true);
            setInput('');
            setTimeout(() => setShake(false), 600);
            setTimeout(() => setError(false), 2000);
        }
    };

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSubmit();
    };

    if (checking) return null;
    if (unlocked) return <>{children}</>;

    return (
        <div style={{ background: '#000000', position: 'fixed', inset: 0, zIndex: 99999 }}>
            <style>{`
                .gate-input:focus { outline:none; border-color:rgba(255,255,255,0.4) !important; }
                .gate-input::placeholder { color:rgba(255,255,255,0.2); }
                .gate-btn:hover { background:rgba(255,255,255,0.1) !important; color:#fff !important; }
                @keyframes shake {
                  0%, 100% { transform: translateX(0); }
                  20% { transform: translateX(-10px); }
                  40% { transform: translateX(10px); }
                  60% { transform: translateX(-8px); }
                  80% { transform: translateX(8px); }
                }
            `}</style>

            {/* Cinematic Video Background */}
            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={() => setVideoEnded(true)}
                onTimeUpdate={(e) => {
                    const t = (e.target as HTMLVideoElement).currentTime
                    if (t >= 3.5 && !showTitle) {
                        setShowTitle(true)
                        setTimeout(() => setHideTitle(true), 1500)
                    }
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            >
                <source src="/videos/nun-walking.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Title Card */}
            <AnimatePresence>
                {showTitle && !hideTitle && (
                    <motion.div
                        key="title"
                        initial={{ opacity: 0, letterSpacing: '0.8em' }}
                        animate={{ opacity: 1, letterSpacing: '0.15em' }}
                        exit={{ opacity: 0, letterSpacing: '0.5em' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                        }}
                    >
                        <p style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: '7vw',
                            fontWeight: 300,
                            fontStyle: 'italic',
                            color: 'rgba(255,255,255,0.92)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            margin: 0,
                            textAlign: 'center',
                            lineHeight: 1,
                        }}>
                            She is Coming.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Initial Dark Overlay */}
            <div style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.45)',
                zIndex: 1,
            }} />

            {/* Post-Video Fade Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.55)',
                    zIndex: 2,
                    pointerEvents: 'none',
                }}
            />

            {/* Password UI Overlay */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: videoEnded ? 1 : 0, y: videoEnded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                style={{
                    position: 'fixed',
                    bottom: '6vh',
                    left: '0',
                    right: '0',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5vw',
                    pointerEvents: videoEnded ? 'all' : 'none',
                }}
            >
                {/* Logo + Brand Block */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8vw' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.8 }}>
                        <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="white" />
                    </svg>
                    <p style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '1.2vw',
                        fontWeight: 900,
                        color: '#fff',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        margin: 0,
                    }}>
                        ATHERA LABS
                    </p>
                </div>

                {/* Input Field and Enter Button */}
                <div style={{
                    display: 'flex',
                    width: '28vw',
                    animation: shake ? 'shake 0.6s ease' : 'none'
                }}>
                    <input
                        className="gate-input"
                        type="password"
                        placeholder="ACCESS CODE"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        style={{
                            flex: 1,
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${error ? 'rgba(255,80,80,0.4)' : 'rgba(255,255,255,0.08)'}`,
                            borderRight: 'none',
                            padding: '0.9vw 1.2vw',
                            color: '#fff',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.65vw',
                            letterSpacing: '0.2em',
                            borderRadius: '0',
                            transition: 'all 0.2s',
                        }}
                    />
                    <button
                        className="gate-btn"
                        onClick={handleSubmit}
                        style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: `1px solid ${error ? 'rgba(255,80,80,0.4)' : 'rgba(255,255,255,0.08)'}`,
                            color: 'rgba(255,255,255,0.5)',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.55vw',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            padding: '0 2vw',
                            cursor: 'pointer',
                            borderRadius: '0',
                            transition: 'all 0.2s',
                        }}
                    >
                        ACCESS
                    </button>
                </div>

                {/* Status Message */}
                <div style={{ minHeight: '1vw' }}>
                    {error && (
                        <p style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.5vw',
                            color: 'rgba(255,80,80,0.8)',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            margin: 0,
                        }}>
                            INVALID ACCESS CODE — ATTEMPT LOGGED
                        </p>
                    )}
                    {!error && (
                        <p style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.5vw',
                            color: 'rgba(255,255,255,0.2)',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            margin: 0,
                        }}>
                            SECURED ENTRY POINT
                        </p>
                    )}
                </div>
            </motion.div>

            {/* Bottom Left Label */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: 'absolute',
                    bottom: '2.5vw',
                    left: '3vw',
                    zIndex: 4,
                }}
            >
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.5vw',
                    color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    margin: 0,
                }}>ATHERA LABS · 2026 · STEALTH MODE</p>
            </motion.div>

            {/* Bottom Right Label */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    position: 'absolute',
                    bottom: '2.5vw',
                    right: '3vw',
                    zIndex: 4,
                }}
            >
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.5vw',
                    color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    margin: 0,
                }}>BUILDING INTELLIGENT PRODUCTS</p>
            </motion.div>

        </div>
    );
}
