import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Powerful intro animation
      gsap.fromTo('.hero-title-line', 
        { y: 120, opacity: 0, skewY: 5 }, 
        { y: 0, opacity: 1, skewY: 0, stagger: 0.15, duration: 1.2, ease: 'power4.out', delay: 0.2 }
      );
      gsap.fromTo('.hero-image',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo('.hero-btn',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-primary/20 blur-[150px]"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-primary"></div>
      </div>

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Huge Typography */}
        <div className="flex flex-col items-start order-2 lg:order-1 relative z-20 mt-10 lg:mt-0">
          <div className="overflow-hidden mb-2">
            <h1 className="hero-title-line text-7xl md:text-9xl font-heading font-black text-white uppercase leading-[0.85] tracking-tighter">
              BEYOND
            </h1>
          </div>
          <div className="overflow-hidden mb-2 flex items-center gap-4">
            <div className="w-16 h-2 bg-primary mt-2"></div>
            <h1 className="hero-title-line text-7xl md:text-9xl font-heading font-black text-primary uppercase leading-[0.85] tracking-tighter">
              LIMITS
            </h1>
          </div>
          <div className="overflow-hidden mb-12">
            <h1 className="hero-title-line text-7xl md:text-9xl font-heading font-black text-white uppercase leading-[0.85] tracking-tighter text-stroke">
              PERFORMANCE
            </h1>
          </div>
          
          <p className="hero-title-line text-xl md:text-2xl text-text-muted font-sans font-light max-w-xl leading-relaxed mb-12">
            Trạm phân tích thể chất thông minh CRÉNOT. Công nghệ lõi từ Nhật Bản. Thiết kế đột phá dành cho những vận động viên vươn tới đỉnh cao.
          </p>
          
          <button className="hero-btn btn-primary">
            Khám phá sức mạnh
          </button>
        </div>

        {/* Right: Product Image */}
        <div className="hero-image relative z-10 order-1 lg:order-2 h-[50vh] lg:h-[80vh] flex items-center justify-center">
          <img 
            src="/assets/x6-1.webp" 
            alt="CRÉNOT X6 Pro" 
            className="w-full max-w-lg lg:max-w-none h-auto object-contain drop-shadow-[0_20px_50px_rgba(73,60,142,0.5)] z-20"
          />
          {/* Accent Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/30 rounded-full animate-[spin_30s_linear_infinite] z-0"></div>
        </div>

      </div>
    </section>
  );
}
