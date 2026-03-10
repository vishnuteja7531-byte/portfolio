import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100svh] overflow-hidden bg-neutral-900 pt-[clamp(60px,8vh,100px)]"
    >
      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Background Image - FULL SCREEN */}
      <div
        className={cn(
          'absolute inset-0 transition-opacity duration-[1800ms] z-0',
          isLoaded && imageLoaded ? 'opacity-100' : 'opacity-0'
        )}
      >
        <img
          src="/images/myimage.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0.55) 100%),
            linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 100%)
          `
        }}
      />

      {/* Specialization Note */}
      <div
        className={cn(
          'absolute top-[42%] right-[5vw] z-20 text-right max-w-[18vw] transition-all duration-[1200ms] ease-out-quart',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        )}
        style={{ transitionDelay: '500ms' }}
      >
        <div className="relative">
          {/* Vertical Line to the Left */}
          <div className="absolute -left-[1.5vw] top-0 w-px h-full bg-white/15" />

          <span className="font-vinte text-[0.75vw] tracking-[0.4em] uppercase text-[rgba(255,255,255,0.3)] block mb-[0.8vw]">
            SPECIALIZED IN
          </span>
          <p className="font-vinte italic text-[1vw] leading-[1.8] tracking-[0.05em] text-[rgba(255,255,255,0.45)]">
            LLM Prompt Engineering,<br />
            AI Agents &amp; Automation,<br />
            Model Refinement
          </p>
        </div>
      </div>

      {/* Left Text Block (I AM + VISHNU) */}
      <div
        className={cn(
          'absolute bottom-0 left-[4vw] z-30 transition-all duration-[1200ms] ease-out-quart flex flex-col',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        )}
        style={{ transitionDelay: '700ms' }}
      >
        {/* I AM */}
        <h2 className="text-[6vw] md:text-[4vw] lg:text-[7vw] font-black text-[#FFFFFF] tracking-[-0.05em] leading-none uppercase">
          I AM
        </h2>
        {/* VISHNU */}
        <h1
          className="text-[28vw] md:text-[20vw] lg:text-[18vw] font-black text-[#FFFFFF] tracking-[-0.06em] leading-[0.85] uppercase -ml-[1vw] flex"
          style={{
            fontKerning: 'normal',
            fontFeatureSettings: '"kern" 1',
            textRendering: 'optimizeLegibility'
          }}
        >
          <span style={{ display: 'inline-block' }}>
            <span style={{ letterSpacing: '0.02em' }}>V</span>
            <span style={{ letterSpacing: '0.01em' }}>I</span>
            <span>S</span>
            <span>H</span>
            <span>N</span>
            <span>U</span>
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div
        className={cn(
          'absolute bottom-[2vw] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-[0.6vw] transition-all duration-[1200ms] ease-out-quart',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ transitionDelay: '1000ms' }}
      >
        <span className="font-vinte text-[0.65vw] tracking-[0.5em] text-[rgba(255,255,255,0.25)] uppercase">
          SCROLL
        </span>
        <div
          className="w-px h-[4vw] bg-gradient-to-b from-white/50 to-transparent origin-top"
          style={{
            animation: 'scrollPulse 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* Right Stacking Block (Role) */}
      <div
        className={cn(
          'absolute bottom-[4vw] right-[4vw] z-30 text-right transition-all duration-[1200ms] ease-out-quart flex flex-col',
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}
        style={{ transitionDelay: '900ms' }}
      >
        <h3 className="text-[5vw] md:text-[3.5vw] lg:text-[3vw] font-black text-[#FFFFFF] tracking-[-0.02em] leading-[1.05] uppercase">
          FULL STACK<br />
          DEVELOPER<br />
          &amp; BUILDER
        </h3>
      </div>
    </section>
  );
}
