import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-2xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/assets/crenot-logo.webp" alt="Crenot Beauty" className="h-10 md:h-12 object-contain filter invert opacity-90" />
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 items-center">
          <a href="#hero" className="nav-link">Sản Phẩm</a>
          <a href="#tech" className="nav-link">Công Nghệ</a>
          <a href="#brand" className="nav-link">Thương Hiệu</a>
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-4 text-sm font-heading tracking-widest text-text-muted">
            <button onClick={() => changeLanguage('en')} className={`hover:text-primary transition-colors ${i18n.language === 'en' ? 'text-white font-bold' : ''}`}>EN</button>
            <button onClick={() => changeLanguage('vi')} className={`hover:text-primary transition-colors ${i18n.language === 'vi' ? 'text-white font-bold' : ''}`}>VI</button>
            <button onClick={() => changeLanguage('jp')} className={`hover:text-primary transition-colors ${i18n.language === 'jp' ? 'text-white font-bold' : ''}`}>JP</button>
          </div>
          <button className="md:hidden text-white hover:text-primary transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
