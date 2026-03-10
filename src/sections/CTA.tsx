import { useRef, useEffect, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { ctaConfig } from '@/config';
import { cn } from '@/lib/utils';

export function CTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact"
      className="relative w-full py-32 lg:py-48 overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={ctaConfig.backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#060606]/60" />
      </div>

      {/* Content */}
      <div ref={sectionRef}
        className="relative z-10 container-large px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">

          {/* Tags */}
          {ctaConfig.tags.length > 0 && (
            <div className={cn(
              'flex flex-wrap justify-center gap-3 mb-8 transition-all duration-&lsqb;800ms&rsqb;',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}>
              {ctaConfig.tags.map((tag, index) => (
                <span key={index}
                  className="px-4 py-2 text-xs font-geist-mono text-white/80 border border-white/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Heading */}
          {ctaConfig.heading && (
            <h2 className={cn(
              'text-3xl lg:text-5xl font-semibold text-white leading-tight transition-all duration-&lsqb;800ms&rsqb;',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
              style={{ transitionDelay: '100ms' }}>
              {ctaConfig.heading}
            </h2>
          )}

          {/* Description */}
          {ctaConfig.description && (
            <p className={cn(
              'mt-6 text-lg text-white/70 max-w-xl mx-auto transition-all duration-&lsqb;800ms&rsqb;',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
              style={{ transitionDelay: '200ms' }}>
              {ctaConfig.description}
            </p>
          )}

          {/* Buttons */}
          <div className={cn(
            'flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-&lsqb;800ms&rsqb;',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
            style={{ transitionDelay: '300ms' }}>

            {ctaConfig.buttonText && (
              <a
                href={ctaConfig.buttonHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300"
              >
                {ctaConfig.buttonText}
              </a>
            )}

            {ctaConfig.email && (
              <a href={`mailto:${ctaConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors group">
                <Mail className="w-4 h-4" />
                <span>{ctaConfig.email}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
