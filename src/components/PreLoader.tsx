'use client';
import { useEffect, useState } from 'react';

export default function PreLoader() {
    const [phase, setPhase] = useState<'enter' | 'hold' | 'exit' | 'done'>('enter');

    useEffect(() => {
        const t1 = setTimeout(() => setPhase('hold'), 1000);
        const t2 = setTimeout(() => setPhase('exit'), 2500);
        const t3 = setTimeout(() => setPhase('done'), 3500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    if (phase === 'done') return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2vw',
            opacity: phase === 'exit' ? 0 : 1,
            transition: phase === 'exit' ? 'opacity 1s ease' : 'none',
            pointerEvents: phase === 'exit' ? 'none' : 'all',
        }}>
            <style>{`
        @keyframes logoIn {
          from { opacity: 0; transform: scale(0.6) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes textIn {
          from { opacity: 0; transform: translateY(30px); letter-spacing: 0.6em; }
          to   { opacity: 1; transform: translateY(0); letter-spacing: 0.35em; }
        }
        @keyframes tagIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 6vw; }
        }
      `}</style>

            {/* Eagle Logo */}
            <img
                src="/images/eagle-logo.png"
                style={{
                    width: '8vw',
                    mixBlendMode: 'screen',
                    filter: 'brightness(1.3)',
                    animation: 'logoIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
                    opacity: 0,
                } as React.CSSProperties}
            />

            {/* ATHERA LABS */}
            <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '7vw',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '0.35em',
                margin: 0,
                lineHeight: 1,
                textTransform: 'uppercase',
                animation: 'textIn 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
                opacity: 0,
            }}>
                ATHERA LABS
            </p>

            {/* Line */}
            <div style={{
                height: '1px',
                background: 'rgba(255,255,255,0.2)',
                animation: 'lineGrow 0.8s ease 0.8s forwards',
                width: 0,
            }} />

            {/* Tagline */}
            <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '0.7vw',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                margin: 0,
                animation: 'tagIn 0.8s ease 1s forwards',
                opacity: 0,
            }}>
                Building Intelligent Products for the Future
            </p>

        </div>
    );
}
