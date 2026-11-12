import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../../data/blogs';
import styles from './BlogSection.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

/** Home: the 3 newest articles with a link to the blog. Blog page (`all`): every article, title as h1. */
export function BlogSection({ all = false }: { all?: boolean }) {
  const { t, lp } = useLanguage();
  const shown = all ? posts : posts.slice(0, 3);
  const Title = all ? motion.h1 : motion.h2;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <Title
              className={styles.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('blog.headline')}
            </Title>
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t('blog.subtitle')}
            </motion.p>
          </div>
          {!all && <motion.a
            href={lp('/blog')}
            className={styles.viewAll}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('blog.view_all')}
          </motion.a>}
        </div>

        <div className={styles.grid}>
          {shown.map((post, index) => (
            <Link to={lp(`/blog/${post.id}`)} key={post.id} style={{ textDecoration: 'none' }}>
              <motion.div 
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.category}>{t(`blogs_data.${post.id}.category`)}</div>
                  <img src={post.image} alt={t(`blogs_data.${post.id}.title`)} className={styles.image} loading="lazy" />
                </div>
                <div className={styles.date}>{t(`blogs_data.${post.id}.date`)}</div>
                <h3 className={styles.cardTitle}>{t(`blogs_data.${post.id}.title`)}</h3>
                <p className={styles.excerpt}>{t(`blogs_data.${post.id}.excerpt`)}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
