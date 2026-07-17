import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { getImageUrl } from '../../config';
import styles from './HeroSection.module.css';

export function HeroSection() {
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
      transition: { duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Image without scale animation to prevent blur */}
      <motion.div 
        className={styles.bgWrapper}
        initial={{ clipPath: 'inset(15% 5% 15% 5% round 10px)', filter: 'brightness(0.5)', scale: 1.05 }}
        animate={{ clipPath: 'inset(0% 0% 0% 0% round 0px)', filter: 'brightness(1)', scale: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/banner_crenot.png" 
          alt="Crenot Active Lifestyle" 
          className={styles.bgImage}
          fetchPriority="high"
        />
        <div className={styles.bgOverlay}></div>
      </motion.div>

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
              Khám phá sản phẩm
            </a>
            <a href="#about" className={styles.btnSecondary}>
              Về CRÉNOT
              <ArrowRight size={18} className={styles.btnIcon} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
