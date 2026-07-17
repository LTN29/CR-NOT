import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current,
        { opacity: 0.2, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: true,
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 md:py-48 bg-surface">
      <div className="max-w-[1000px] mx-auto px-6 text-center">
        <h2 ref={textRef} className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-8">
          "{t('philosophy.quote')}"
        </h2>
        <p className="text-accent font-heading tracking-[0.2em]">{t('philosophy.author')}</p>
      </div>
    </section>
  );
}
