import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blogs';
import styles from './BlogDetailPage.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogDetailPage() {
  const { id } = useParams();
  const { t } = useLanguage();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const translatedCategory = t(`blogs_data.${post.id}.category`);
  const translatedTitle = t(`blogs_data.${post.id}.title`);
  const translatedDate = t(`blogs_data.${post.id}.date`);
  const translatedContent = t(`blogs_data.${post.id}.content`);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className={styles.backBtn}>
            &larr; {t('product_detail.back') || "Quay lại trang chủ"}
          </Link>
          
          <div className={styles.category}>{translatedCategory}</div>
          <h1 className={styles.title}>{translatedTitle}</h1>
          
          <div className={styles.meta}>
            <span>{translatedDate}</span>
            <span>&bull;</span>
            <span>{post.author}</span>
          </div>

          <img src={post.image} alt={translatedTitle} className={styles.heroImage} />

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: translatedContent }}
          />
        </motion.div>
      </div>
    </div>
  );
}
