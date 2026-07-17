import { motion } from 'framer-motion';
import styles from './TechnologySection.module.css';

export function TechnologySection() {
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
          >
            Đột Phá <span>Công Nghệ</span>
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            Sự kết hợp hoàn hảo giữa vật liệu cao cấp và công nghệ cảm biến thông minh nhất từ Nhật Bản.
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
            <h3 className={styles.cardTitle}>Chip Xử Lý Kép</h3>
            <p className={styles.cardDesc}>Tích hợp AI để phân tích dữ liệu cơ thể một cách chính xác tuyệt đối trong chưa đầy 3 giây.</p>
            <div className={styles.techLine}></div>
          </motion.div>

          <motion.div className={styles.card} variants={itemVariants}>
            <h3 className={styles.cardTitle}>Triệt Lông Băng Lạnh</h3>
            <p className={styles.cardDesc}>Công nghệ triệt lạnh -10°C mang lại cảm giác dễ chịu, an toàn tuyệt đối cho mọi loại da.</p>
            <div className={styles.techLine}></div>
          </motion.div>

          <motion.div className={styles.card} variants={itemVariants}>
            <h3 className={styles.cardTitle}>Đo InBody 8 Điểm</h3>
            <p className={styles.cardDesc}>Phân tích chuyên sâu 14 chỉ số như máy đo tại phòng gym chuyên nghiệp với độ sai số cực thấp.</p>
            <div className={styles.techLine}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
