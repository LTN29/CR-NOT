import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CTA() {
  const { t } = useTranslation();
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.cta-btn', {
        boxShadow: '0 0 20px 0px rgba(227, 255, 0, 0.4)',
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut'
      });
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="buy" ref={ctaRef} className="py-40 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] border-y border-border opacity-20 -skew-y-6 flex items-center justify-center">
        <div className="text-[20vw] font-heading font-black text-surface whitespace-nowrap">CRÉNOT</div>
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight">
          {t('cta.title')}
        </h2>
        <p className="text-3xl md:text-5xl font-heading mb-12">
          {t('cta.price')}
        </p>
        <button className="cta-btn btn-primary px-16 py-6 text-2xl font-bold bg-accent text-background hover:bg-white hover:text-background border-none shadow-[0_0_10px_0px_rgba(227,255,0,0.2)]">
          {t('cta.button')}
        </button>
      </div>
    </section>
  );
}
