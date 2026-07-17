import { useTranslation } from 'react-i18next';

export default function Technology() {
  const { t } = useTranslation();

  return (
    <section id="tech" className="py-32 bg-surface overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-accent">
          <polygon points="100,0 100,100 0,100" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="text-accent text-sm font-heading tracking-widest mb-4">INNOVATION</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-tight">
            {t('tech.title')}
          </h2>
          <p className="text-text-muted text-lg font-light max-w-lg leading-relaxed">
            {t('tech.desc')}
          </p>
        </div>
        
        <div className="relative aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
          {/* Abstract Sensor Graphic */}
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[1px] border-border relative flex items-center justify-center">
            <div className="w-3/4 h-3/4 rounded-full border-[1px] border-accent/50 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-1/2 h-1/2 rounded-full border-[1px] border-primary animate-[spin_5s_linear_infinite_reverse]"></div>
            <div className="absolute w-4 h-4 bg-accent rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
