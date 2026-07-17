import { getImageUrl } from '../../config';
import styles from './Footer.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="support" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <img src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/Crenot-Logo.png" alt="Crenot" className={styles.logo} />
            <p className={styles.description}>
              {t('footer.brand_desc')}
            </p>
          </div>
          
          <div>
            <h4 className={styles.title}>{t('footer.products')}</h4>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>{t('footer.prod1')}</a></li>
              <li><a href="#" className={styles.link}>{t('footer.prod2')}</a></li>
              <li><a href="https://simi.vn" target="_blank" rel="noopener noreferrer" className={styles.link}>{t('footer.prod3')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.title}>{t('footer.support')}</h4>
            <ul className={styles.list}>
              <li><a href="https://baohanh.simi.vn" target="_blank" rel="noopener noreferrer" className={styles.link}>{t('footer.sup1')}</a></li>
              <li><a href="#" className={styles.link}>{t('footer.sup2')}</a></li>
              <li><a href="#" className={styles.link}>{t('footer.sup3')}</a></li>
              <li><a href="#" className={styles.link}>{t('footer.sup4')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.title}>{t('footer.connect')}</h4>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>Facebook</a></li>
              <li><a href="#" className={styles.link}>Instagram</a></li>
              <li><a href="#" className={styles.link}>YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className={styles.link}>{t('footer.terms')}</a>
            <a href="#" className={styles.link}>{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
