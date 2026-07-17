import { useTranslation } from 'react-i18next';

export default function MetricsGrid() {
  const { t } = useTranslation();
  
  const metricsList = [
    { key: 'weight', val: '72.5', unit: 'kg' },
    { key: 'bmi', val: '22.4', unit: '' },
    { key: 'bodyFat', val: '14.2', unit: '%' },
    { key: 'muscleMass', val: '58.1', unit: 'kg' },
    { key: 'water', val: '62.0', unit: '%' },
    { key: 'visceralFat', val: '4', unit: 'lvl' },
    { key: 'boneMass', val: '3.2', unit: 'kg' },
    { key: 'bmr', val: '1750', unit: 'kcal' },
    { key: 'protein', val: '18.5', unit: '%' },
    { key: 'metabolicAge', val: '24', unit: 'yrs' },
    { key: 'subcutaneousFat', val: '10.5', unit: '%' },
    { key: 'skeletalMuscle', val: '48.2', unit: '%' },
    { key: 'fatFreeMass', val: '62.2', unit: 'kg' },
    { key: 'heartRate', val: '68', unit: 'bpm' }
  ];

  return (
    <section id="features" className="py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold">{t('metrics.title')}</h2>
          </div>
          <p className="text-text-muted max-w-md mt-6 md:mt-0 md:text-right font-light">
            {t('metrics.desc')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {metricsList.map((item) => (
            <div key={item.key} className="glass-card p-6 aspect-square flex flex-col justify-between group">
              <span className="text-xs font-heading tracking-widest text-text-muted uppercase group-hover:text-primary transition-colors">
                {t(`metrics.${item.key}`)}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-4xl font-heading text-gradient">{item.val}</span>
                <span className="text-xs text-accent">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
