import { motion } from 'framer-motion';
import styles from './BrandSoulSection.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function BrandSoulSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className={styles.section}>
      <motion.div 
        className={styles.accentMark}
        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
        whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        CRÉNOT
      </motion.div>
      <div className={`container ${styles.content}`}>
        <motion.span 
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('brand_soul.eyebrow')}
        </motion.span>
        
        <motion.h2 
          className={styles.headline}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          dangerouslySetInnerHTML={{ __html: t('brand_soul.headline') }}
        />
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('brand_soul.desc')}
        </motion.p>
      </div>
    </section>
  );
}
