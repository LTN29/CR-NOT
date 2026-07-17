import { useTranslation } from 'react-i18next';

export default function TechSpecs() {
  const { t } = useTranslation();

  return (
    <section id="specs" className="py-32 bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-16">
        
        <div className="w-full md:w-1/3">
          <h2 className="text-4xl font-bold uppercase mb-4">{t('specs.title')}</h2>
          <div className="w-12 h-1 bg-accent"></div>
        </div>

        <div className="w-full md:w-2/3">
          <ul className="border-t border-border">
            {['material', 'capacity', 'display', 'power'].map((spec) => (
              <li key={spec} className="border-b border-border py-6 flex justify-between items-center group hover:bg-background transition-colors px-4 -mx-4">
                <span className="font-light text-lg">{t(`specs.${spec}`)}</span>
                <span className="text-accent">+</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </section>
  );
}
