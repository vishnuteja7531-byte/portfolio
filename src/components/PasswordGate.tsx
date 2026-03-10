'use client';
import { useState, useEffect } from 'react';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
    const [unlocked, setUnlocked] = useState(false);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [shake, setShake] = useState(false);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        const saved = sessionStorage.getItem('athera_unlocked');
        if (saved === 'true') setUnlocked(true);
        setChecking(false);
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
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#080808',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: '8vw',
            overflow: 'hidden',
        }}>
            <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes shake {
          0%,100% { transform:translateX(0); }
          20%     { transform:translateX(-10px); }
          40%     { transform:translateX(10px); }
          60%     { transform:translateX(-8px); }
          80%     { transform:translateX(8px); }
        }
        .gate-input:focus { outline:none; border-color:rgba(255,255,255,0.5) !important; }
        .gate-input::placeholder { color:rgba(255,255,255,0.25); }
        .gate-btn:hover { background:rgba(255,255,255,0.15) !important; }
      `}</style>

            {/* Background image */}
            <img
                src="/images/nun.jpg"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    animation: 'fadeIn 1.2s ease forwards',
                    opacity: 0,
                } as React.CSSProperties}
            />

            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
            }} />

            <div style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.4vw',
                padding: '3.5vw 4vw',
                minWidth: '32vw',
                animation: 'fadeUp 1s ease 0.3s forwards',
                opacity: 0,
            } as React.CSSProperties}>

                {/* ATHERA LABS */}
                <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '1.8vw',
                    fontWeight: 900,
                    color: '#fff',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    margin: 0,
                    lineHeight: 1,
                    animation: 'fadeUp 0.8s ease 0.2s forwards',
                    opacity: 0,
                }}>
                    ATHERA LABS
                </p>

                {/* RESTRICTED ACCESS label */}
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.55vw',
                    color: 'rgba(255,255,255,0.3)',
                    letterSpacing: '0.35em',
                    textTransform: 'uppercase',
                    margin: '0 0 0.5vw 0',
                    animation: 'fadeUp 0.8s ease 0.5s forwards',
                    opacity: 0,
                }}>
                    RESTRICTED ACCESS
                </p>

                {/* Input row */}
                <div style={{
                    display: 'flex',
                    width: '100%',
                    animation: shake ? 'shake 0.6s ease' : 'fadeUp 0.8s ease 0.6s forwards',
                    opacity: 0,
                }}>
                    <input
                        className="gate-input"
                        type="password"
                        placeholder="Enter access code"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        style={{
                            flex: 1,
                            background: 'rgba(255,255,255,0.04)',
                            border: `1px solid ${error ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.1)'}`,
                            borderRight: 'none',
                            padding: '0.9vw 1.2vw',
                            color: '#fff',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.7vw',
                            letterSpacing: '0.15em',
                            borderRadius: '2px 0 0 2px',
                            transition: 'border-color 0.2s',
                        }}
                    />
                    <button
                        className="gate-btn"
                        onClick={handleSubmit}
                        style={{
                            background: 'rgba(255,255,255,0.08)',
                            border: `1px solid ${error ? 'rgba(255,80,80,0.6)' : 'rgba(255,255,255,0.1)'}`,
                            color: '#fff',
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.58vw',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            padding: '0.9vw 1.5vw',
                            cursor: 'pointer',
                            borderRadius: '0 2px 2px 0',
                            transition: 'all 0.2s',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        ENTER
                    </button>
                </div>

                {/* Error */}
                {error && (
                    <p style={{
                        fontFamily: 'DM Mono, monospace',
                        fontSize: '0.52vw',
                        color: 'rgba(255,80,80,0.9)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        margin: 0,
                    }}>
                        ACCESS DENIED — INVALID CODE
                    </p>
                )}

                {/* Bottom label */}
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.48vw',
                    color: 'rgba(255,255,255,0.12)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    margin: '0.5vw 0 0 0',
                    animation: 'fadeUp 0.8s ease 0.7s forwards',
                    opacity: 0,
                }}>
                    AUTHORIZED PERSONNEL ONLY
                </p>

            </div>

            {/* Bottom left watermark */}
            <div style={{
                position: 'absolute',
                bottom: '2vw',
                left: '2.5vw',
                zIndex: 2,
                animation: 'fadeUp 1s ease 0.8s forwards',
                opacity: 0,
            }}>
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.5vw',
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    margin: 0,
                }}>ATHERA LABS · 2025 · STEALTH MODE</p>
            </div>

            {/* Bottom right watermark */}
            <div style={{
                position: 'absolute',
                bottom: '2vw',
                right: '2.5vw',
                zIndex: 2,
                animation: 'fadeUp 1s ease 0.8s forwards',
                opacity: 0,
            }}>
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.5vw',
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    margin: 0,
                }}>BUILDING INTELLIGENT PRODUCTS</p>
            </div>

        </div>
    );
}
