'use client';
import { useEffect, useState } from 'react';

export default function MobileBlock({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const check = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        check();
        setChecking(false);
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    if (checking) return null;

    if (isMobile) return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8vw',
            zIndex: 999999,
        }}>
            <style>{`
        @keyframes mfadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

            {/* Eagle */}
            <img
                src="/images/eagle-logo.png"
                style={{
                    width: '18vw',
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.3)',
                    marginBottom: '8vw',
                    animation: 'mfadeUp 0.8s ease forwards',
                    opacity: 0,
                } as React.CSSProperties}
            />

            {/* ATHERA LABS */}
            <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 900,
                fontSize: '7vw',
                color: '#fff',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                margin: '0 0 4vw 0',
                textAlign: 'center',
                animation: 'mfadeUp 0.8s ease 0.2s forwards',
                opacity: 0,
            }}>
                ATHERA LABS
            </p>

            {/* Divider */}
            <div style={{
                width: '12vw',
                height: '1px',
                background: 'rgba(255,255,255,0.15)',
                marginBottom: '6vw',
                animation: 'mfadeUp 0.8s ease 0.3s forwards',
                opacity: 0,
            }} />

            {/* Icon */}
            <p style={{
                fontSize: '10vw',
                margin: '0 0 4vw 0',
                animation: 'mfadeUp 0.8s ease 0.4s forwards',
                opacity: 0,
            }}>
                🖥️
            </p>

            {/* Main message */}
            <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '5.5vw',
                color: '#fff',
                textAlign: 'center',
                margin: '0 0 3vw 0',
                lineHeight: 1.3,
                animation: 'mfadeUp 0.8s ease 0.5s forwards',
                opacity: 0,
            }}>
                Desktop Only Experience
            </p>

            {/* Sub message */}
            <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '3.2vw',
                color: 'rgba(255,255,255,0.35)',
                textAlign: 'center',
                letterSpacing: '0.05em',
                lineHeight: 1.8,
                margin: '0 0 8vw 0',
                animation: 'mfadeUp 0.8s ease 0.6s forwards',
                opacity: 0,
            }}>
                This experience was crafted for desktop.{'\n'}
                Please visit on a laptop or desktop{'\n'}
                for the full Athera Labs experience.
            </p>

            {/* Bottom tag */}
            <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '2.8vw',
                color: 'rgba(255,255,255,0.15)',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                textAlign: 'center',
                margin: 0,
                animation: 'mfadeUp 0.8s ease 0.7s forwards',
                opacity: 0,
            }}>
                ATHERA LABS · 2026 · STEALTH MODE
            </p>

        </div>
    );

    return <>{children}</>;
}
