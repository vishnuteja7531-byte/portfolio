import { useState, useEffect, useRef } from 'react';

const TEAM = [
    { initial: "V", name: "Vishnu", role: "Founder & Lead Dev", stack: ["Next.js", "Python", "AI", "React"], status: "online", commits: 247, tasks: 12, activity: [4, 7, 5, 9, 8, 11, 10, 13, 12, 15, 14, 16] },
    { initial: "A", name: "Akhil", role: "Backend Engineer", stack: ["Node.js", "PostgreSQL", "Redis"], status: "online", commits: 183, tasks: 8, activity: [3, 5, 4, 7, 6, 8, 7, 9, 8, 10, 9, 11] },
    { initial: "S", name: "Sanjay", role: "UI/UX Designer", stack: ["Figma", "Framer", "CSS"], status: "away", commits: 94, tasks: 6, activity: [2, 4, 3, 5, 4, 6, 5, 7, 6, 8, 7, 9] },
    { initial: "N", name: "Neha", role: "Mobile Developer", stack: ["Flutter", "Dart", "Firebase"], status: "online", commits: 156, tasks: 9, activity: [3, 4, 5, 6, 5, 7, 6, 8, 7, 9, 8, 10] },
    { initial: "P", name: "Priya", role: "AI & Research", stack: ["Python", "LLMs", "Colab", "HuggingFace"], status: "busy", commits: 201, tasks: 14, activity: [5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 15, 18] },
];

const PROJECTS = [
    { id: "stealth", name: "[STEALTH] SaaS Platform", type: "Full-Stack · AI-Powered", status: "ACTIVE", progress: 68, velocity: "+19.2%", stack: ["Next.js", "React", "Python", "PostgreSQL", "AI Core"], dataPoints: [20, 28, 25, 35, 32, 42, 40, 50, 48, 58, 55, 68] },
    { id: "llm", name: "AI Model Refinement", type: "LLM Fine-Tuning · Research", status: "RESEARCH", progress: 45, velocity: "+8.4%", stack: ["Python", "Colab", "HuggingFace", "LLM", "RLHF"], dataPoints: [10, 14, 12, 18, 16, 22, 20, 28, 26, 32, 38, 45] },
    { id: "mobile", name: "Mobile AI Agent", type: "Flutter · Real-time Reasoning", status: "PLANNING", progress: 22, velocity: "+4.1%", stack: ["Flutter", "Dart", "AI", "Firebase"], dataPoints: [2, 4, 3, 6, 5, 8, 7, 10, 9, 14, 18, 22] },
    { id: "research", name: "Research Agent Pipeline", type: "Autonomous Agents · RAG", status: "RESEARCH", progress: 38, velocity: "+11.3%", stack: ["Python", "LangChain", "Pinecone", "GPT-4"], dataPoints: [5, 8, 7, 12, 10, 16, 14, 20, 18, 26, 32, 38] },
    { id: "automation", name: "Automation Engine", type: "AI Workflows · API Integration", status: "PLANNING", progress: 15, velocity: "+2.8%", stack: ["Python", "n8n", "Webhooks", "OpenAI"], dataPoints: [1, 2, 2, 3, 3, 5, 4, 7, 6, 10, 12, 15] },
];

const AGENT_LOGS = [
    { time: "09:42", agent: "Research Agent", action: "Scraped 847 papers from arXiv", status: "done" },
    { time: "09:38", agent: "LLM Trainer", action: "Epoch 3/10 completed — loss: 1.102", status: "done" },
    { time: "09:31", agent: "Automation Engine", action: "Webhook trigger received from Shopify", status: "done" },
    { time: "09:28", agent: "AI Agent", action: "Running inference on 2.3k token context", status: "active" },
    { time: "09:21", agent: "Research Agent", action: "Knowledge graph updated with 312 nodes", status: "done" },
    { time: "09:15", agent: "LLM Trainer", action: "Fine-tuning batch 982k/1.25M steps", status: "active" },
    { time: "09:08", agent: "Mobile AI Agent", action: "Flutter build compiled successfully", status: "done" },
];

export default function AtheraLabsDashboard() {

    const [activeProject, setActiveProject] = useState(PROJECTS[0]);
    const [visibleLogs, setVisibleLogs] = useState(AGENT_LOGS.slice(0, 4));

    const [animProgress, setAnimProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleLogs(prev => {
                const next = (AGENT_LOGS.indexOf(prev[0]) + 1) % AGENT_LOGS.length;
                return [AGENT_LOGS[next], ...prev.slice(0, 3)];
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setAnimProgress(0);
        const timer = setTimeout(() => {
            let p = 0;
            const iv = setInterval(() => { p += 0.05; if (p >= 1) { clearInterval(iv); p = 1; } setAnimProgress(p); }, 16);
            return () => clearInterval(iv);
        }, 100);
        return () => clearTimeout(timer);
    }, [activeProject.id]);

    const data = activeProject.dataPoints;
    const W = 400, H = 120;
    const max = Math.max(...data);
    const visibleCount = Math.max(2, Math.floor(animProgress * data.length));
    const visibleData = data.slice(0, visibleCount);
    const pts = visibleData.map((v, i) => `${(i / (data.length - 1)) * W},${H - ((v / max)) * H * 0.85}`).join(" ");
    const lastX = visibleData.length > 0 ? ((visibleData.length - 1) / (data.length - 1)) * W : 0;
    const lastY = visibleData.length > 0 ? H - ((visibleData[visibleData.length - 1] / max)) * H * 0.85 : H;
    const areaPoints = visibleData.length > 1 ? `0,${H} ${pts} ${lastX},${H}` : null;

    const card: React.CSSProperties = { background: '#0d0d0d', padding: '2vw' };
    const mono: React.CSSProperties = { fontFamily: 'DM Mono, IBM Plex Mono, monospace' };
    const sans: React.CSSProperties = { fontFamily: 'DM Sans, sans-serif' };

    return (
        <div style={{ padding: '0 8vw', paddingBottom: '6vw' }}>
            <style>{`
        .adash-proj:hover{background:rgba(255,255,255,0.03)!important}
        .adash-proj.aactive{background:rgba(255,255,255,0.05)!important}
        .adash-team:hover{border-color:rgba(255,255,255,0.12)!important;transform:translateY(-2px)}
        .adash-log{animation:adashSlide 0.4s ease}
        @keyframes adashSlide{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
        .adash-pulse{animation:adashPulse 2s infinite}
        @keyframes adashPulse{0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.3)}50%{box-shadow:0 0 0 4px rgba(255,255,255,0)}}
      `}</style>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2vw 0 1.5vw', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '1.5vw' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                    <img src="/images/eagle-logo.png" style={{ width: '1.8vw', mixBlendMode: 'screen', filter: 'brightness(1.2)' }} />
                    <div>
                        <p style={{
                            ...sans,
                            fontSize: '1vw',
                            fontWeight: 700,
                            color: '#fff',
                            letterSpacing: '-0.02em',
                            margin: 0
                        }}>
                            Athera{' '}
                            <span style={{
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '3px',
                                padding: '0 6px',
                                color: '#fff',
                            }}>Dashboard</span>
                        </p>
                        <p style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0 }}>Build Intelligence System · 2026</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1vw' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.4vw 0.9vw', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px' }}>
                        <div className="adash-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }} />
                        <span style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>STEALTH MODE</span>
                    </div>
                    <span style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>MARCH 2026</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1px' }}>
                {[
                    { label: 'TOTAL BUILDS', value: '5', sub: '3 active · 2 pipeline', delta: '+2' },
                    { label: 'AVG PROGRESS', value: '38%', sub: 'across all systems', delta: '+6.2%' },
                    { label: 'TEAM COMMITS', value: '881', sub: 'this month total', delta: '+47' },
                    { label: 'LAUNCHING', value: 'Q3', sub: '2026 · stealth mode', delta: 'on track' },
                ].map((m, i) => (
                    <div key={i} style={card}>
                        <p style={{ ...mono, fontSize: '0.55vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 1vw 0' }}>{m.label}</p>
                        <p style={{ ...sans, fontSize: '3.2vw', fontWeight: 900, color: '#fff', letterSpacing: '-0.05em', margin: '0 0 0.4vw 0', lineHeight: 1 }}>{m.value}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5vw' }}>
                            <span style={{ ...mono, fontSize: '0.6vw', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)', padding: '1px 6px', borderRadius: '2px' }}>{m.delta}</span>
                            <span style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.2)' }}>{m.sub}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1px' }}>
                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2vw' }}>
                        <div>
                            <p style={{ ...mono, fontSize: '0.55vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 0.5vw 0' }}>BUILD VELOCITY — {activeProject.name}</p>
                            <p style={{ ...sans, fontSize: '2.2vw', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', margin: 0, lineHeight: 1 }}>{activeProject.velocity}</p>
                            <p style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.25)', margin: '0.3vw 0 0 0' }}>vs last month</p>
                        </div>
                        <div style={{ display: 'flex', gap: '0.4vw' }}>
                            {['24h', 'Week', 'Month'].map((t, i) => (
                                <span key={t} style={{ ...mono, fontSize: '0.5vw', letterSpacing: '0.15em', padding: '0.3vw 0.7vw', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '2px', color: i === 2 ? '#fff' : 'rgba(255,255,255,0.25)', background: i === 2 ? 'rgba(255,255,255,0.08)' : 'transparent', cursor: 'pointer' }}>{t}</span>
                            ))}
                        </div>
                    </div>
                    <div style={{ height: '8vw' }}>
                        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: '100%', overflow: 'visible' }} preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="aDashGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                                </linearGradient>
                            </defs>
                            {[0, 25, 50, 75, 100].map(pct => { const y = H - (pct / 100) * H * 0.85; return <line key={pct} x1="0" y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />; })}
                            {areaPoints && <polygon points={areaPoints} fill="url(#aDashGrad)" />}
                            {visibleData.length > 1 && <polyline points={pts} fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
                            {visibleData.length > 1 && <>
                                <circle cx={lastX} cy={lastY} r="4" fill="#fff" />
                                <circle cx={lastX} cy={lastY} r="8" fill="rgba(255,255,255,0.1)" />
                                <rect x={lastX - 30} y={lastY - 22} width={60} height={16} rx="2" fill="rgba(20,20,20,0.95)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                                <text x={lastX} y={lastY - 11} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="DM Mono,monospace">{activeProject.progress}% · Mar 29</text>
                            </>}
                            {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((m, i) => (
                                <text key={m} x={(i / 5) * W} y={H + 12} fill="rgba(255,255,255,0.15)" fontSize="6" fontFamily="DM Mono,monospace">{m}</text>
                            ))}
                        </svg>
                    </div>
                    <div style={{ marginTop: '1.5vw' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4vw' }}>
                            <span style={{ ...mono, fontSize: '0.5vw', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>OVERALL PROGRESS</span>
                            <span style={{ ...mono, fontSize: '0.6vw', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>{activeProject.progress}%</span>
                        </div>
                        <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.06)', borderRadius: '1px', overflow: 'hidden' }}>
                            <div style={{ width: `${activeProject.progress}%`, height: '100%', background: 'rgba(255,255,255,0.7)', transition: 'width 0.8s ease' }} />
                        </div>
                    </div>
                </div>

                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5vw' }}>
                        <p style={{ ...mono, fontSize: '0.55vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: 0 }}>ALL PROJECTS</p>
                        <span style={{ ...mono, fontSize: '0.5vw', color: 'rgba(255,255,255,0.15)' }}>05 total</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 0.6fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.6vw', marginBottom: '0.3vw' }}>
                        {['PROJECT', 'PROG.', 'TREND'].map(h => (<span key={h} style={{ ...mono, fontSize: '0.48vw', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase' }}>{h}</span>))}
                    </div>
                    {PROJECTS.map((p) => {
                        const pmax = Math.max(...p.dataPoints);
                        const ppts = p.dataPoints.map((v, i) => `${(i / (p.dataPoints.length - 1)) * 60},${20 - ((v / pmax)) * 18}`).join(" ");
                        return (
                            <div key={p.id} className={`adash-proj ${activeProject.id === p.id ? 'aactive' : ''}`}
                                onClick={() => setActiveProject(p)}
                                style={{ display: 'grid', gridTemplateColumns: '2fr 0.6fr 1fr', padding: '0.9vw 0.4vw', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center', borderRadius: '2px', cursor: 'pointer', transition: 'background 0.15s' }}>
                                <div>
                                    <p style={{ ...sans, fontWeight: 600, fontSize: '0.85vw', color: activeProject.id === p.id ? '#fff' : 'rgba(255,255,255,0.6)', margin: '0 0 0.15vw 0', letterSpacing: '-0.01em' }}>{p.name}</p>
                                    <p style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.2)', margin: 0, letterSpacing: '0.05em' }}>{p.type}</p>
                                </div>
                                <p style={{ ...mono, fontSize: '0.85vw', fontWeight: 500, color: p.progress > 50 ? '#fff' : p.progress > 30 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)', margin: 0 }}>{p.progress}%</p>
                                <svg viewBox="0 0 60 20" style={{ width: '60px', height: '20px', overflow: 'visible' }}>
                                    <polyline points={ppts} fill="none" stroke={activeProject.id === p.id ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.25)'} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1px' }}>
                <div style={card}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5vw' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6vw' }}>
                            <div className="adash-pulse" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.8)' }} />
                            <p style={{ ...mono, fontSize: '0.62vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: 0 }}>LIVE AGENT ACTIVITY</p>
                        </div>
                        <span style={{ ...mono, fontSize: '0.5vw', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>AUTO-UPDATING</span>
                    </div>
                    {visibleLogs.map((log, i) => (
                        <div key={`${log.time}-${i}`} className="adash-log" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1fr 2.5fr 0.5fr', gap: '0.8vw', padding: '0.8vw 0', borderBottom: '1px solid rgba(255,255,255,0.03)', alignItems: 'center', opacity: 1 - i * 0.18 }}>
                            <span style={{ ...mono, fontSize: '0.55vw', color: 'rgba(255,255,255,0.2)' }}>{log.time}</span>
                            <span style={{ ...mono, fontSize: '0.6vw', color: 'rgba(255,255,255,0.35)' }}>{log.agent}</span>
                            <span style={{ ...sans, fontSize: '0.72vw', color: i === 0 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}>{log.action}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: log.status === 'active' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)' }} />
                                <span style={{ ...mono, fontSize: '0.45vw', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{log.status}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={card}>
                    <p style={{ ...mono, fontSize: '0.62vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 1.5vw 0' }}>ACTIVE PROJECT — TECH STACK</p>
                    <p style={{ ...sans, fontWeight: 800, fontSize: '1.4vw', color: '#fff', letterSpacing: '-0.03em', margin: '0 0 0.4vw 0' }}>{activeProject.name}</p>
                    <p style={{ ...mono, fontSize: '0.6vw', color: 'rgba(255,255,255,0.25)', margin: '0 0 1.5vw 0', letterSpacing: '0.1em' }}>{activeProject.type}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5vw', marginBottom: '2vw' }}>
                        {activeProject.stack.map(tag => (
                            <span key={tag} style={{ ...mono, fontSize: '0.55vw', letterSpacing: '0.15em', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '2px', padding: '0.4vw 0.8vw', color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.03)' }}>{tag}</span>
                        ))}
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5vw', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1vw' }}>
                        {[
                            { label: 'Progress', value: `${activeProject.progress}%` },
                            { label: 'Velocity', value: activeProject.velocity },
                            { label: 'Status', value: activeProject.status },
                        ].map(s => (
                            <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.8vw', borderRadius: '2px' }}>
                                <p style={{ ...mono, fontSize: '0.48vw', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.3vw 0' }}>{s.label}</p>
                                <p style={{ ...sans, fontWeight: 700, fontSize: '0.9vw', color: '#fff', margin: 0 }}>{s.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
                {TEAM.map((member, i) => {
                    const amax = Math.max(...member.activity);
                    const apts = member.activity.map((v, j) => `${(j / (member.activity.length - 1)) * 90},${24 - ((v / amax)) * 22}`).join(" ");
                    return (
                        <div key={i} className="adash-team" style={{ ...card, cursor: 'default', border: '1px solid rgba(255,255,255,0.04)', transition: 'all 0.25s' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2vw' }}>
                                <div style={{ width: '2.8vw', height: '2.8vw', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.05)' }}>
                                    <span style={{ ...sans, fontSize: '1vw', color: 'rgba(255,255,255,0.6)', fontWeight: 700 }}>{member.initial}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: member.status === 'online' ? 'rgba(255,255,255,0.8)' : member.status === 'busy' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)' }} />
                                    <span style={{ ...mono, fontSize: '0.48vw', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{member.status}</span>
                                </div>
                            </div>
                            <p style={{ ...sans, fontWeight: 700, fontSize: '1.1vw', color: '#fff', margin: '0 0 0.2vw 0', letterSpacing: '-0.02em' }}>{member.name}</p>
                            <p style={{ ...mono, fontSize: '0.58vw', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 1vw 0' }}>{member.role}</p>
                            <svg viewBox="0 0 90 24" style={{ width: '90px', height: '24px', marginBottom: '1vw', overflow: 'visible' }}>
                                <polyline points={apts} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx={90} cy={24 - ((member.activity[member.activity.length - 1] / amax)) * 22} r="2" fill="rgba(255,255,255,0.7)" />
                            </svg>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '0.8vw', marginBottom: '0.8vw' }}>
                                <div>
                                    <p style={{ ...mono, fontSize: '0.48vw', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.2vw 0' }}>COMMITS</p>
                                    <p style={{ ...sans, fontSize: '0.95vw', fontWeight: 700, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{member.commits}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ ...mono, fontSize: '0.48vw', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase', letterSpacing: '0.2em', margin: '0 0 0.2vw 0' }}>TASKS</p>
                                    <p style={{ ...sans, fontSize: '0.95vw', fontWeight: 700, color: 'rgba(255,255,255,0.6)', margin: 0 }}>{member.tasks}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                {member.stack.slice(0, 3).map(s => (
                                    <span key={s} style={{ ...mono, fontSize: '0.45vw', letterSpacing: '0.1em', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '2px', padding: '2px 6px', color: 'rgba(255,255,255,0.2)' }}>{s}</span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                marginTop: '1px',
                padding: '1.2vw 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
                    {['Next.js', 'React', 'Python', 'Flutter', 'LangChain', 'HuggingFace', 'PostgreSQL', 'Firebase'].map(t => (
                        <span key={t} style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.5vw',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.15)',
                        }}>{t}</span>
                    ))}
                </div>
                <span style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.5vw',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.15)',
                }}>ATHERA LABS · 2026 · STEALTH MODE</span>
            </div>

            <div style={{
                background: '#080808',
                padding: '4vw 2vw 2vw',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
            }}>
                {(() => {
                    const [visible, setVisible] = useState(false);
                    const ref = useRef<HTMLParagraphElement>(null);

                    useEffect(() => {
                        const observer = new IntersectionObserver(
                            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
                            { threshold: 0.3 }
                        );
                        if (ref.current) observer.observe(ref.current);
                        return () => observer.disconnect();
                    }, []);

                    return (
                        <p
                            ref={ref}
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '4.5vw',
                                fontWeight: 900,
                                color: visible ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.06)',
                                letterSpacing: '-0.04em',
                                lineHeight: 1,
                                margin: 0,
                                textTransform: 'uppercase',
                                transition: 'color 1.2s cubic-bezier(0.16,1,0.3,1)',
                                userSelect: 'none',
                            }}
                        >
                            5 BUILDERS.<br />3 SYSTEMS.<br />1 VISION.
                        </p>
                    );
                })()}
                <p style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '0.6vw',
                    color: 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    textAlign: 'right',
                    margin: 0,
                    lineHeight: 2,
                }}>
                    STEALTH MODE<br />
                    LAUNCHING Q3 2026<br />
                    ATHERA LABS
                </p>
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.06)',
                marginTop: '1px',
                padding: '3vw 2vw',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gap: '1px',
                background: 'rgba(255,255,255,0.06)',
            }}>
                <div style={{ background: '#0d0d0d', padding: '2vw' }}>
                    <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '0.5vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 0.8vw 0' }}>MISSION</p>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85vw', fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>Building intelligent products that shouldn't exist yet — at 17, from scratch, in stealth.</p>
                </div>
                <div style={{ background: '#0d0d0d', padding: '2vw' }}>
                    <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '0.5vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 0.8vw 0' }}>CURRENT FOCUS</p>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85vw', fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>LLM fine-tuning, autonomous research agents, and a SaaS platform launching Q3 2026.</p>
                </div>
                <div style={{ background: '#0d0d0d', padding: '2vw' }}>
                    <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '0.5vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 0.8vw 0' }}>STACK PHILOSOPHY</p>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85vw', fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>We build fast and build right. Every system is AI-native, every decision is data-driven.</p>
                </div>
                <div style={{ background: '#0d0d0d', padding: '2vw' }}>
                    <p style={{ fontFamily: 'DM Mono,monospace', fontSize: '0.5vw', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', margin: '0 0 0.8vw 0' }}>ATHERA LABS · 2026</p>
                    <p style={{ fontFamily: 'DM Sans,sans-serif', fontSize: '0.85vw', fontWeight: 600, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>5 builders. 3 active systems. 1 vision. Stealth mode until launch.</p>
                </div>
            </div>

        </div>
    );
}
