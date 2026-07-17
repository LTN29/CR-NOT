import { motion } from 'framer-motion';
import { getImageUrl } from '../../config';
import styles from './LifestyleSection.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function LifestyleSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <img src={getImageUrl('/crenot-factory.webp')} alt="Lifestyle" className={styles.bgImage} loading="lazy" />
      
      <div className={`container ${styles.content}`}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('lifestyle.headline')}
        </motion.h2>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('lifestyle.desc')}
        </motion.p>
        
        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1M+</span>
            <span className={styles.statLabel}>{t('lifestyle.stat1')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>14</span>
            <span className={styles.statLabel}>{t('lifestyle.stat2')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>{t('lifestyle.stat3')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
