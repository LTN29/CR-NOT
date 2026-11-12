import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ExternalLink, Search, Menu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { SIMI_BASE_URL } from '../../config';
import { localizePath, splitLangPath, type Lang } from '../../content/lang';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pagePath = splitLangPath(location.pathname).path;
  const isHomePage = pagePath === '/';
  const { language, setLanguage, t, lp } = useLanguage();
  const homeAnchor = (id: string) => (isHomePage ? `#${id}` : `${lp('/')}#${id}`);
  // Real links (crawlable), same look as before: inherit the colour, no underline.
  const langLink = (lang: Lang, label: string) => (
    <Link
      to={localizePath(pagePath, lang)}
      hrefLang={lang === 'jp' ? 'ja' : lang}
      className={language === lang ? styles.langActive : styles.langOption}
      style={{ color: 'inherit', textDecoration: 'none' }}
      onClick={(e) => {
        e.preventDefault();
        setLanguage(lang);
      }}
    >
      {label}
    </Link>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `${styles.header} ${isScrolled ? styles.headerScrolled : ''} ${!isHomePage ? styles.headerInnerPage : ''}`;

  return (
    <motion.header 
      className={headerClass}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to={lp('/')} className={styles.logo}>
            <img 
              src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/Crenot-Logo.png" 
              alt="CRÉNOT Logo" 
              className={styles.logoImage}
              fetchPriority="high"
            />
          </Link>
          
          <ul className={styles.menu}>
            <li>
              <Link to={lp('/')} onClick={() => window.scrollTo(0,0)} className={`${styles.menuLink} ${isHomePage ? styles.active : ''}`}>{t('header.home')}</Link>
            </li>
            <li><a href={homeAnchor('products')} className={styles.menuLink}>{t('header.products')}</a></li>
            <li><a href={homeAnchor('about')} className={styles.menuLink}>{t('header.about')}</a></li>
            <li><a href={homeAnchor('support')} className={styles.menuLink}>{t('header.support')}</a></li>
          </ul>

          <div className={styles.headerActions}>
            <div className={styles.langSelector}>
              <Globe size={16} strokeWidth={1.5} className={styles.langIcon} />
              {langLink('vi', 'VN')}
              <span className={styles.langDivider}>/</span>
              {langLink('en', 'EN')}
              <span className={styles.langDivider}>/</span>
              {langLink('jp', 'JP')}
            </div>
            <button className={styles.iconBtn} aria-label={t('header.search_label')} onClick={() => alert(t('header.search_alert'))}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <a href={SIMI_BASE_URL} target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label={t('header.simi')} title={t('header.simi')}>
              <ExternalLink size={20} strokeWidth={1.5} />
            </a>
            <button className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} aria-label={t('header.menu_label')}>
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
