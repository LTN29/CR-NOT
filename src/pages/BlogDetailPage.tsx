import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/blogs';
import { products } from '../data/products';
import { formatDate, getPostContent, postText, POST_REDIRECTS } from '../content/posts';
import styles from './BlogDetailPage.module.css';
import { useLanguage } from '../contexts/LanguageContext';

export default function BlogDetailPage() {
  const { id } = useParams();
  const { t, lp, language } = useLanguage();
  const post = posts.find(p => p.id === id);
  const content = id ? getPostContent(id) : undefined;

  if (id && POST_REDIRECTS[id]) {
    return <Navigate to={lp(`/blog/${POST_REDIRECTS[id]}`)} replace />;
  }

  if (!post || !content) {
    return <Navigate to={lp('/blog')} replace />;
  }

  const text = postText(content, language);
  const inArticle = products.filter(p => content.products.includes(p.id));

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to={lp('/blog')} className={styles.backBtn}>
            &larr; {t('product_detail.blog_back')}
          </Link>
          
          <div className={styles.category}>{text.category}</div>
          <h1 className={styles.title}>{text.title}</h1>
          
          <div className={styles.meta}>
            <time dateTime={content.published}>{formatDate(content.published, language)}</time>
            <span>&bull;</span>
            <span>{post.author}</span>
            {content.updated !== content.published && (
              <>
                <span>&bull;</span>
                <span>{t('product_detail.updated')} <time dateTime={content.updated}>{formatDate(content.updated, language)}</time></span>
              </>
            )}
          </div>

          <img src={post.image} alt={content.imageAlt[language]} className={styles.heroImage} />

          <section className={styles.summary} aria-label={t('product_detail.summary')}>
            <span className={styles.summaryLabel}>{t('product_detail.summary')}</span>
            <ul>
              {text.summary.map((line) => (
                <li key={line} dangerouslySetInnerHTML={{ __html: line }} />
              ))}
            </ul>
          </section>

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: text.body.replace(/<table>/g, `<div class="${styles.tableScroll}"><table>`).replace(/<\/table>/g, '</table></div>') }}
          />

          {text.faq.length > 0 && (
            <section>
              <h2 className={styles.sectionTitle}>{t('product_detail.faq')}</h2>
              {text.faq.map((item) => (
                <div key={item.q} className={styles.faqItem}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </section>
          )}

          {inArticle.length > 0 && (
            <section>
              <h2 className={styles.sectionTitle}>{t('product_detail.in_article')}</h2>
              <div className={styles.productGrid}>
                {inArticle.map((p) => (
                  <Link key={p.id} to={lp(`/product/${p.id}`)} className={styles.productCard}>
                    <img src={p.image} alt={t(`products_data.${p.id}.name`)} loading="lazy" decoding="async" />
                    <span>{t(`products_data.${p.id}.name`)}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </motion.article>
      </div>
    </div>
  );
}
