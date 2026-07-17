import { useTranslation } from 'react-i18next';

export default function AppSync() {
  const { t } = useTranslation();

  return (
    <section className="py-32 border-b border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="w-full md:w-1/2 aspect-[4/3] bg-surface flex items-center justify-center p-12">
          {/* Minimalist Phone UI Mockup via CSS */}
          <div className="w-[280px] h-[550px] border border-border rounded-[40px] bg-background relative overflow-hidden shadow-2xl">
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-surface rounded-full"></div>
            <div className="mt-20 px-6">
              <div className="text-sm text-text-muted font-heading">YOUR SCORE</div>
              <div className="text-6xl font-bold mt-2 text-primary">94<span className="text-accent text-xl">.2</span></div>
              
              <div className="mt-12 space-y-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="h-16 border border-border flex items-center px-4 justify-between">
                    <div className="w-20 h-2 bg-surface"></div>
                    <div className="w-8 h-8 rounded-full border border-accent/50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-accent rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-tight">
            {t('app.title')}
          </h2>
          <p className="text-text-muted text-lg font-light mb-12 max-w-lg leading-relaxed">
            {t('app.desc')}
          </p>
          
          <div className="flex gap-4">
            <div className="w-32 h-12 border border-border flex items-center justify-center font-heading text-xs tracking-widest hover:bg-primary hover:text-background transition-colors cursor-pointer">
              APP STORE
            </div>
            <div className="w-32 h-12 border border-border flex items-center justify-center font-heading text-xs tracking-widest hover:bg-primary hover:text-background transition-colors cursor-pointer">
              GOOGLE PLAY
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
