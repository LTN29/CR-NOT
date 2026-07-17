import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
              <Link to="/" className={`${styles.menuLink} ${isHomePage ? styles.active : ''}`}>Trang Chủ</Link>
            </li>
            <li><a href="#" className={styles.menuLink}>Sản Phẩm</a></li>
            <li><a href="#" className={styles.menuLink}>Về Chúng Tôi</a></li>
            <li><a href="#" className={styles.menuLink}>Hỗ Trợ</a></li>
          </ul>

          <div className={styles.headerActions}>
            <button className={styles.iconBtn} aria-label="Search">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button className={styles.iconBtn} aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <button className={`${styles.iconBtn} ${styles.mobileMenuBtn}`} aria-label="Menu">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
