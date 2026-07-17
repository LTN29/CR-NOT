import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../../data/blogs';
import styles from './BlogSection.module.css';

export function BlogSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <motion.h2 
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Câu Chuyện CRÉNOT
            </motion.h2>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Khám phá tri thức về sức khỏe, làm đẹp và lối sống hiện đại.
            </motion.p>
          </div>
          <motion.a 
            href="#" 
            className={styles.viewAll}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Xem Tất Cả Bài Viết
          </motion.a>
        </div>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
              <motion.div 
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.category}>{post.category}</div>
                  <img src={post.image} alt={post.title} className={styles.image} />
                </div>
                <div className={styles.date}>{post.date}</div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
