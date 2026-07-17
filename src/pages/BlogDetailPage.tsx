import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blogs';
import styles from './BlogDetailPage.module.css';

export default function BlogDetailPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className={styles.backBtn}>
            &larr; Quay lại trang chủ
          </Link>
          
          <div className={styles.category}>{post.category}</div>
          <h1 className={styles.title}>{post.title}</h1>
          
          <div className={styles.meta}>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.author}</span>
          </div>

          <img src={post.image} alt={post.title} className={styles.heroImage} />

          <div className={styles.content}>
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
