import { Fragment } from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { SIMI_BASE_URL, SIMI_PRIVACY_POLICY_URL, legalEntity } from '../../config';

export default function Footer() {
  const { t } = useLanguage();
  const legalDisclosureParts = String(t('footer.legal_disclosure')).split('SIMI.vn');

  return (
    <footer id="support" className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <img src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/Crenot-Logo.png" alt="Crenot" className={styles.logo} loading="lazy" decoding="async" />
            <p className={styles.description}>
              {t('footer.brand_desc')}
            </p>
          </div>
          
          <div>
            <h4 className={styles.title}>{t('footer.products')}</h4>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>{t('footer.prod1')}</a></li>
              <li><a href="#" className={styles.link}>{t('footer.prod2')}</a></li>
              <li><a href={SIMI_BASE_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>{t('footer.prod3')}</a></li>
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
        
        <section className={styles.legal} aria-labelledby="footer-legal-title">
          <h4 id="footer-legal-title" className={styles.legalTitle}>{t('footer.legal_title')}</h4>
          <p className={styles.legalCopy}>
            {legalDisclosureParts.map((part, index) => (
              <Fragment key={index}>
                {part}
                {index < legalDisclosureParts.length - 1 && (
                  <a href={SIMI_BASE_URL} target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
                    {t('footer.simi_link')}
                  </a>
                )}
              </Fragment>
            ))}
          </p>
          <div className={styles.legalMeta}>
            <span>{t('footer.site_operator')}: {legalEntity.name}</span>
            <span>{t('footer.tax_code')}: {legalEntity.taxId}</span>
            {legalEntity.address && <span>{t('footer.address')}: {legalEntity.address}</span>}
            {legalEntity.hotline && <span>{t('footer.hotline')}: {legalEntity.hotline}</span>}
            {legalEntity.email && <span>{t('footer.email')}: {legalEntity.email}</span>}
          </div>
        </section>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href={SIMI_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
