import { useState, useEffect, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';
import { AnimatedButton } from './AnimatedButton';
import { navigationConfig } from '@/config';

export function Navigation() {
  if (!navigationConfig.logo && navigationConfig.links.length === 0) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Fade in navbar after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-[9999] transition-all duration-400 ease-in-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
          isScrolled
            ? 'bg-black/60 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent border-none'
        )}
      >
        <div className="w-full px-[4vw] min-h-[72px] flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6vw' }}>
                {isScrolled && (
                  <img
                    src="/images/eagle-logo.png"
                    alt="Athera Labs"
                    style={{
                      width: '2.6vw',
                      height: 'auto',
                      mixBlendMode: 'screen',
                      filter: 'brightness(1.2)',
                      opacity: 1,
                      transition: 'opacity 400ms ease',
                    } as React.CSSProperties}
                  />
                )}
                <span style={{
                  fontWeight: 900,
                  fontSize: '1vw',
                  letterSpacing: '0.2em',
                  color: '#FFFFFF',
                }}>
                  ATHERA LABS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            {navigationConfig.links.length > 0 && (
              <div className="hidden lg:flex items-center gap-[2.5vw]">
                {navigationConfig.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-[0.75vw] tracking-[0.15em] uppercase transition-colors duration-200 font-vinte",
                      "text-white/60 hover:text-white"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Contact Button */}
            {navigationConfig.contactLabel && (
              <div className="hidden lg:block">
                <a
                  href={navigationConfig.contactHref || "#contact"}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full transition-all duration-200 uppercase font-medium tracking-[0.15em]",
                    "bg-transparent text-white border border-white/40 text-[0.75vw] px-[1.2vw] py-[0.5vw]",
                    "hover:bg-white/10"
                  )}
                >
                  {navigationConfig.contactLabel}
                </a>
              </div>
            )}

            {/* Mobile Menu Button */}
            {navigationConfig.links.length > 0 && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative w-8 h-6 flex flex-col justify-between"
                aria-label="Toggle menu"
              >
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center bg-white',
                    isMenuOpen && 'translate-y-[10px] rotate-[-45deg]'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-300 ease-out-quad bg-white',
                    isMenuOpen && 'scale-0 opacity-0'
                  )}
                />
                <span
                  className={cn(
                    'w-full h-0.5 transition-all duration-500 ease-out-quad origin-center bg-white',
                    isMenuOpen && '-translate-y-[10px] rotate-[45deg]'
                  )}
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navigationConfig.links.length > 0 && (
        <div
          className={cn(
            'fixed inset-0 z-40 bg-white transition-all duration-500 ease-out-cubic lg:hidden',
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navigationConfig.links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  'text-3xl font-semibold text-exvia-black transition-all duration-500 ease-out-quart',
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
            {navigationConfig.contactLabel && (
              <AnimatedButton
                href={navigationConfig.contactHref || "#contact"}
                variant="primary"
                size="lg"
                className={cn(
                  'mt-4 transition-all duration-500 ease-out-quart',
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: isMenuOpen ? '400ms' : '0ms' }}
              >
                {navigationConfig.contactLabel}
              </AnimatedButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}
