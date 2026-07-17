import { motion } from 'framer-motion';
import styles from './BrandSoulSection.module.css';

export function BrandSoulSection() {
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
        <motion.span 
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Nội Tâm Thương Hiệu
        </motion.span>
        
        <motion.h2 
          className={styles.headline}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Không chỉ là thiết bị. <br/> Đó là <span>Phong Cách Sống</span>.
        </motion.h2>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Chúng tôi tin rằng sức khoẻ và sắc đẹp bắt nguồn từ sự thấu hiểu cơ thể. CRÉNOT ra đời mang theo sứ mệnh cung cấp những giải pháp công nghệ y tế và làm đẹp tiên tiến nhất, giúp bạn chủ động kiến tạo một phiên bản hoàn hảo hơn mỗi ngày.
        </motion.p>
      </div>
    </section>
  );
}
