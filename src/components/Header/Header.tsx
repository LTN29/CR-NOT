import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { language, setLanguage, t } = useLanguage();

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
          <Link to="/" className={styles.logo}>
            <img 
              src="https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/logo.webp" 
              alt="CRÉNOT Logo" 
              className={styles.logoImage}
            />
          </Link>
          
          <ul className={styles.menu}>
            <li>
              <Link to="/" onClick={() => window.scrollTo(0,0)} className={`${styles.menuLink} ${isHomePage ? styles.active : ''}`}>{t('header.home')}</Link>
            </li>
            <li><a href="#products" className={styles.menuLink}>{t('header.products')}</a></li>
            <li><a href="#about" className={styles.menuLink}>{t('header.about')}</a></li>
            <li><a href="#support" className={styles.menuLink}>{t('header.support')}</a></li>
          </ul>

          <div className={styles.headerActions}>
            <div className={styles.langSelector}>
              <Globe size={16} strokeWidth={1.5} className={styles.langIcon} />
              <span className={language === 'vi' ? styles.langActive : styles.langOption} onClick={() => setLanguage('vi')}>VN</span>
              <span className={styles.langDivider}>/</span>
              <span className={language === 'en' ? styles.langActive : styles.langOption} onClick={() => setLanguage('en')}>EN</span>
              <span className={styles.langDivider}>/</span>
              <span className={language === 'jp' ? styles.langActive : styles.langOption} onClick={() => setLanguage('jp')}>JP</span>
            </div>
            <button className={styles.iconBtn} aria-label="Search" onClick={() => alert(t('header.search_alert'))}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <a href="https://simi.vn" target="_blank" rel="noopener noreferrer" className={styles.iconBtn} aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </a>
            <button className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} aria-label="Menu">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
