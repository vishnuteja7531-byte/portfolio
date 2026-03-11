import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PasswordGate({ children }: { children: React.ReactNode }) {
    const [unlocked, setUnlocked] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [shake, setShake] = useState(false)
    const [videoEnded, setVideoEnded] = useState(false)
    const [showTitle, setShowTitle] = useState(false)
    const [hideTitle, setHideTitle] = useState(false)
    const [showFinal, setShowFinal] = useState(false)
    const [videoReady, setVideoReady] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const unlocked = sessionStorage.getItem('unlocked')
        if (unlocked === 'true') setUnlocked(true)
    }, [])

    useEffect(() => {
        const fallback = setTimeout(() => {
            setVideoReady(true)
            videoRef.current?.play()
        }, 8000)
        return () => clearTimeout(fallback)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => setVideoEnded(true), 8500)
        return () => clearTimeout(timeout)
    }, [])

    const handleSubmit = () => {
        if (password === 'VortexiumX7') {
            sessionStorage.setItem('unlocked', 'true')
            setUnlocked(true)
        } else {
            setError(true)
            setShake(true)
            setTimeout(() => setShake(false), 600)
        }
    }

    if (unlocked) return <>{children}</>

    return (
        <div style={{ position: 'fixed', inset: 0, background: '#000', overflow: 'hidden', zIndex: 99999 }}>

            <AnimatePresence>
                {!videoReady && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: '#0a0a0a',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2vw',
                        }}
                    >
                        {/* Eagle logo pulsing */}
                        <motion.img
                            src="/images/eagle-logo.png"
                            alt="Athera Labs"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            style={{
                                width: '4vw',
                                height: '4vw',
                                objectFit: 'contain',
                                mixBlendMode: 'screen',
                            }}
                        />

                        {/* ATHERA LABS */}
                        <p style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: 'clamp(10px, 0.8vw, 14px)',
                            fontWeight: 700,
                            color: 'rgba(255,255,255,0.85)',
                            letterSpacing: '0.4em',
                            margin: 0,
                            textTransform: 'uppercase',
                        }}>
                            ATHERA LABS
                        </p>

                        {/* Thin animated progress line */}
                        <div style={{
                            width: '20vw',
                            height: '1px',
                            background: 'rgba(255,255,255,0.1)',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                                style={{
                                    position: 'absolute',
                                    top: 0, left: 0,
                                    width: '50%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                                }}
                            />
                        </div>

                        {/* Loading text */}
                        <p style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: 'clamp(8px, 0.6vw, 11px)',
                            color: 'rgba(255,255,255,0.25)',
                            letterSpacing: '0.3em',
                            margin: 0,
                            textTransform: 'uppercase',
                        }}>
                            Loading Experience...
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <video
                ref={videoRef}
                autoPlay={false}
                muted
                playsInline
                poster="/images/nun-poster.jpeg"
                onCanPlayThrough={() => {
                    setVideoReady(true)
                    videoRef.current?.play()
                }}
                onEnded={() => setVideoEnded(true)}
                onTimeUpdate={(e) => {
                    const t = (e.target as HTMLVideoElement).currentTime
                    if (t >= 3.5 && !showTitle) {
                        setShowTitle(true)
                        setTimeout(() => setHideTitle(true), 1800)
                    }
                    if (t >= 6.5 && !showFinal) {
                        setShowFinal(true)
                    }
                }}
                style={{
                    position: 'fixed',
                    top: 0, left: 0,
                    width: '100%',
                    height: '110%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    zIndex: 0,
                    opacity: videoReady ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                }}
            >
                <source src="/videos/nun-walking.mp4" type="video/mp4" />
            </video>

            {/* DARK OVERLAY */}
            <div style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.45)',
                zIndex: 1,
            }} />

            {/* GOLD ATHERA LABS TITLE — stays whole video, fades out when password UI appears */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 0 : 1 }}
                transition={{ duration: 0.8 }}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                    gap: '0.5vw',
                }}
            >
                {/* ATHERA LABS big gold */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(60px, 9vw, 140px)',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        lineHeight: 0.9,
                        background: 'linear-gradient(180deg, #d4a843 0%, #f5d57a 35%, #8b6914 60%, #c9952a 80%, #f5d57a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        textAlign: 'center',
                        filter: 'drop-shadow(0 0 40px rgba(180,120,20,0.6))',
                    }}
                >
                    ATHERA LABS
                </motion.h1>

                {/* Gold rule */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '30vw' }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    style={{
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, #c9952a, transparent)',
                        margin: '1vw 0',
                    }}
                />

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                    style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 'clamp(12px, 1.1vw, 18px)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(180deg, #c9952a, #f5d57a)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        margin: 0,
                        textAlign: 'center',
                        filter: 'drop-shadow(0 0 15px rgba(180,120,20,0.4))',
                    }}
                >
                    Building Intelligent Products for the Future.
                </motion.p>
            </motion.div>

            {/* SHE IS COMING — at 3.5s, lower center */}
            <AnimatePresence>
                {showTitle && !hideTitle && (
                    <motion.div
                        key="she-is-coming"
                        initial={{ opacity: 0, letterSpacing: '0.8em' }}
                        animate={{ opacity: 1, letterSpacing: '0.12em' }}
                        exit={{ opacity: 0, letterSpacing: '0.5em' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 3,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            paddingBottom: '22vh',
                            pointerEvents: 'none',
                        }}
                    >
                        <p style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(40px, 6vw, 96px)',
                            fontWeight: 300,
                            fontStyle: 'italic',
                            color: 'rgba(255,255,255,0.92)',
                            letterSpacing: '0.12em',
                            margin: 0,
                            textAlign: 'center',
                            textShadow: '0 0 60px rgba(255,255,255,0.15)',
                        }}>
                            She is Coming.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PROVE YOU BELONG — at 6.5s, bottom center */}
            <AnimatePresence>
                {showFinal && !videoEnded && (
                    <motion.div
                        key="prove"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 3,
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            paddingBottom: '24vh',
                            pointerEvents: 'none',
                        }}
                    >
                        <p style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontSize: 'clamp(30px, 4.5vw, 72px)',
                            fontWeight: 300,
                            fontStyle: 'italic',
                            color: 'rgba(255,255,255,0.85)',
                            letterSpacing: '0.1em',
                            margin: 0,
                            textAlign: 'center',
                            textShadow: '0 0 40px rgba(255,255,255,0.1)',
                        }}>
                            Prove you belong.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* PASSWORD UI — fades in when video ends */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: videoEnded ? 1 : 0, y: videoEnded ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                    position: 'fixed',
                    bottom: '6vh',
                    left: 0,
                    right: 0,
                    zIndex: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1vw',
                    pointerEvents: videoEnded ? 'auto' : 'none',
                }}
            >
                {/* Eagle logo */}
                <img
                    src="/images/eagle-logo.png"
                    alt="Athera Labs"
                    style={{
                        width: '3vw',
                        height: '3vw',
                        objectFit: 'contain',
                        mixBlendMode: 'screen',
                        opacity: 0.9,
                    }}
                />

                {/* ATHERA LABS */}
                <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 'clamp(10px, 0.8vw, 14px)',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.85)',
                    letterSpacing: '0.4em',
                    margin: 0,
                }}>
                    ATHERA LABS
                </p>

                {/* Password input row */}
                <motion.div
                    animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'flex', gap: '0', alignItems: 'center' }}
                >
                    <input
                        type="password"
                        placeholder="ACCESS CODE"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(false) }}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            borderRight: 'none',
                            color: '#fff',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.7vw',
                            letterSpacing: '0.2em',
                            padding: '0.8vw 1.5vw',
                            outline: 'none',
                            width: 'clamp(200px, 18vw, 320px)',
                            caretColor: '#fff',
                        }}
                    />
                    <button
                        onClick={handleSubmit}
                        style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            color: '#fff',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.7vw',
                            letterSpacing: '0.2em',
                            padding: '0.8vw 1.5vw',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                    >
                        ACCESS
                    </button>
                </motion.div>

                {/* ACCESS DENIED */}
                {error && (
                    <p style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.6vw',
                        color: 'rgba(255,80,80,0.9)',
                        letterSpacing: '0.2em',
                        margin: 0,
                    }}>
                        ACCESS DENIED
                    </p>
                )}
            </motion.div>

            {/* BOTTOM LEFT + RIGHT LABELS */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ position: 'fixed', bottom: '2vh', left: '2vw', zIndex: 4 }}
            >
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.55vw, 11px)', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', margin: 0 }}>
                    ATHERA LABS · 2026 · STEALTH MODE
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: videoEnded ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ position: 'fixed', bottom: '2vh', right: '2vw', zIndex: 4 }}
            >
                <p style={{ fontFamily: 'DM Mono, monospace', fontSize: 'clamp(8px, 0.55vw, 11px)', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', margin: 0 }}>
                    BUILDING INTELLIGENT PRODUCTS
                </p>
            </motion.div>

        </div>
    )
}
