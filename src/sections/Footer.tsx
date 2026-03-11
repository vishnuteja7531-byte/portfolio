
export function Footer() {
  return (
    <footer style={{ background: '#0a0a0a' }}>

      {/* Main footer body */}
      <div style={{
        padding: '5vw 8vw 4vw',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 2fr',
        gap: '4vw'
      }}>

        {/* Col 1 — Brand */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: '0.8vw', marginBottom: '1.5vw'
          }}>
            <img
              src="/images/eagle-logo.png"
              style={{
                width: '2vw', height: 'auto',
                mixBlendMode: 'screen',
                filter: 'brightness(1.1)'
              }}
            />
            <span style={{
              fontWeight: 900, fontSize: '0.9vw',
              letterSpacing: '0.2em', color: '#FFFFFF'
            }}>ATHERA LABS</span>
          </div>
          <p style={{
            fontFamily: 'Playfair Display',
            fontStyle: 'italic',
            fontSize: '0.8vw',
            color: 'rgba(255,255,255,0.35)',
            lineHeight: 1.9,
            maxWidth: '260px'
          }}>
            A stealth-mode startup building intelligent
            products at the edge of AI and design.
          </p>
          {/* Social icons row */}
          <div style={{
            display: 'flex', gap: '1vw',
            marginTop: '2vw'
          }}>
            {['Dribbble', 'Instagram', 'LinkedIn', 'Twitter'].map(s => (
              <a key={s} href="#" style={{
                width: '2.2vw', height: '2.2vw',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.3)',
                fontSize: '0.55vw',
                fontFamily: 'IBM Plex Mono',
                letterSpacing: '0.05em',
                textDecoration: 'none'
              }}>
                {s.charAt(0)}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Navigation */}
        <div>
          <p style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: '0.6vw',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: '1.5vw'
          }}>NAVIGATION</p>
          {['About', 'Services', 'Portfolio', 'Contact'].map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              display: 'block',
              fontFamily: 'IBM Plex Mono',
              fontSize: '0.7vw',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              marginBottom: '0.8vw',
              letterSpacing: '0.1em',
              transition: 'color 200ms'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >{link}</a>
          ))}
        </div>

        {/* Col 3 — Services */}
        <div>
          <p style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: '0.6vw',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: '1.5vw'
          }}>SERVICES</p>
          {['Brand Identity', 'UI/UX Design', 'Web Design', 'Motion Design'].map(link => (
            <a key={link} href="#services" style={{
              display: 'block',
              fontFamily: 'IBM Plex Mono',
              fontSize: '0.7vw',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              marginBottom: '0.8vw',
              letterSpacing: '0.1em',
              transition: 'color 200ms'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >{link}</a>
          ))}
        </div>

        {/* Col 4 — Connect */}
        <div>
          <p style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: '0.6vw',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: '1.5vw'
          }}>CONNECT</p>
          {[
            { label: 'Email Us', href: 'mailto:hello@atheralabs.com' },
            { label: 'LinkedIn', href: '#' },
            { label: 'Dribbble', href: '#' },
            { label: 'Instagram', href: '#' }
          ].map(link => (
            <a key={link.label} href={link.href} style={{
              display: 'block',
              fontFamily: 'IBM Plex Mono',
              fontSize: '0.7vw',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
              marginBottom: '0.8vw',
              letterSpacing: '0.1em',
              transition: 'color 200ms'
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
            >{link.label}</a>
          ))}
        </div>

        {/* Col 5 — Stay Inspired / Newsletter */}
        <div>
          <p style={{
            fontFamily: 'IBM Plex Mono',
            fontSize: '0.6vw',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.25)',
            textTransform: 'uppercase',
            marginBottom: '0.8vw'
          }}>STAY UPDATED</p>
          <p style={{
            fontFamily: 'Playfair Display',
            fontStyle: 'italic',
            fontSize: '0.75vw',
            color: 'rgba(255,255,255,0.3)',
            lineHeight: 1.8,
            marginBottom: '1.5vw'
          }}>
            Subscribe for build updates,
            behind-the-scenes insights,
            and product launches.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8vw' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '2px',
                padding: '0.8vw 1vw',
                fontFamily: 'IBM Plex Mono',
                fontSize: '0.65vw',
                color: '#FFFFFF',
                outline: 'none',
                letterSpacing: '0.1em'
              }}
            />
            <button style={{
              background: '#FFFFFF',
              color: '#000000',
              border: 'none',
              borderRadius: '2px',
              padding: '0.8vw 1vw',
              fontFamily: 'IBM Plex Mono',
              fontSize: '0.65vw',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontWeight: 700
            }}>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        padding: '1.5vw 8vw',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: 'IBM Plex Mono',
          fontSize: '0.55vw',
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: '0.2em',
          margin: 0
        }}>© 2026 Athera Labs. All rights reserved.</p>
        <p style={{
          fontFamily: 'IBM Plex Mono',
          fontSize: '0.55vw',
          color: 'rgba(255,255,255,0.15)',
          letterSpacing: '0.2em',
          margin: 0
        }}>Built by Vishnu.</p>
      </div>

    </footer>
  );
}
