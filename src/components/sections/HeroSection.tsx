import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.8, ease: [0.2, 0.8, 0.2, 1] as const }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Image without scale animation to prevent blur */}
      <div className={styles.bgWrapper}>
        <motion.picture
          initial={{ scale: 1.15, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ display: "block", width: "100%", height: "100%" }}
        >
          <source 
            media="(max-width: 768px)" 
            srcSet="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/crenot_banner_mobile.png" 
          />
          <img 
            src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/banner_crenot.png" 
            alt="Crenot Active Lifestyle" 
            className={styles.bgImage}
            fetchPriority="high"
          />
        </motion.picture>
        <div className={styles.bgOverlay}></div>
        

      </div>

      {/* Content Container */}
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title removed per user request */}
          
          <motion.div variants={itemVariants} className={styles.actions}>
            <a href="#products" className={styles.btnPrimary}>
              {t('hero.btn_explore')}
            </a>
            <a href="#about" className={styles.btnSecondary}>
              {t('hero.btn_about')}
              <ArrowRight size={18} className={styles.btnIcon} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
