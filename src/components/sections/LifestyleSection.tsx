import { motion } from 'framer-motion';
import styles from './LifestyleSection.module.css';

export function LifestyleSection() {
  return (
    <section className={styles.section}>
      <img src="/images/crenot factory.png" alt="Lifestyle" className={styles.bgImage} />
      
      <div className={`container ${styles.content}`}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Kỷ Nguyên Sống Khoẻ
        </motion.h2>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gia nhập cộng đồng hàng triệu người dùng CRÉNOT trên toàn thế giới. Chúng tôi không chỉ thay đổi thói quen, chúng tôi kiến tạo một phong cách sống mới – Năng động, Hiện đại và Đầy cảm hứng.
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
            <span className={styles.statLabel}>Người dùng tin tưởng</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>14</span>
            <span className={styles.statLabel}>Chỉ số đo lường</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Đồng hành sức khoẻ</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
