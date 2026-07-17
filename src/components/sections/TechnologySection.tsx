import { motion } from 'framer-motion';
import styles from './TechnologySection.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function TechnologySection() {
  const { t } = useLanguage();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.section}>
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
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            dangerouslySetInnerHTML={{ __html: t('tech.headline') }}
          />
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            {t('tech.desc')}
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.card} variants={itemVariants}>
            <h3 className={styles.cardTitle}>{t('tech.card1.title')}</h3>
            <p className={styles.cardDesc}>{t('tech.card1.desc')}</p>
            <div className={styles.techLine}></div>
          </motion.div>

          <motion.div className={styles.card} variants={itemVariants}>
            <h3 className={styles.cardTitle}>{t('tech.card2.title')}</h3>
            <p className={styles.cardDesc}>{t('tech.card2.desc')}</p>
            <div className={styles.techLine}></div>
          </motion.div>

          <motion.div className={styles.card} variants={itemVariants}>
            <h3 className={styles.cardTitle}>{t('tech.card3.title')}</h3>
            <p className={styles.cardDesc}>{t('tech.card3.desc')}</p>
            <div className={styles.techLine}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
