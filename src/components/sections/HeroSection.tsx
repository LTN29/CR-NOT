import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
      transition: { duration: 1.8, ease: [0.2, 0.8, 0.2, 1] as const }
    }
  };

  return (
    <section className={styles.hero}>
      {/* Background Image without scale animation to prevent blur */}
      <div className={styles.bgWrapper}>
        <img 
          src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/banner_crenot.png" 
          alt="Crenot Active Lifestyle" 
          className={styles.bgImage}
          fetchPriority="high"
        />
        <div className={styles.bgOverlay}></div>
        
        {/* Premium Curtain Reveal */}
        <motion.div
          initial={{ y: "0%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0d0a14",
            zIndex: 5
          }}
        />
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
