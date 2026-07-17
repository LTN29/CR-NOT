import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import styles from './ProductDetailPage.module.css';

// SVG Icons
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.scrollIcon}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parse colors from image URLs
  const availableColors = useMemo(() => {
    if (!product) return [];
    const colors = new Set<string>();
    product.images.forEach(img => {
      if (img.includes('/white/')) colors.add('white');
      else if (img.includes('/black/')) colors.add('black');
      else colors.add('default');
    });
    return Array.from(colors);
  }, [product]);

  const hasMultipleColors = availableColors.includes('white') && availableColors.includes('black');
  
  const [activeColor, setActiveColor] = useState<string>(
    hasMultipleColors ? (availableColors.includes('white') ? 'white' : availableColors[0]) : 'default'
  );

  // Filter images by active color
  const displayImages = useMemo(() => {
    if (!product) return [];
    if (!hasMultipleColors) return product.images;
    return product.images.filter(img => img.includes(`/${activeColor}/`));
  }, [product, activeColor, hasMultipleColors]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index when color changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeColor]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleDragEnd = (_e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -100) {
      setActiveImageIndex(prev => (prev + 1) % displayImages.length);
    } else if (swipe > 100) {
      setActiveImageIndex(prev => (prev - 1 + displayImages.length) % displayImages.length);
    }
  };

  const scrollToSpecs = () => {
    const specsEl = document.getElementById('specs-section');
    if (specsEl) {
      specsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        <Link to="/" className={styles.backLink}>
          &larr; Trở về Trang Chủ
        </Link>

        {/* Overview Section */}
        <div className={styles.grid}>
          <div className={styles.gallery}>
            <motion.div 
              className={styles.mainImageContainer}
              ref={containerRef}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeColor}-${activeImageIndex}`}
                  src={displayImages[activeImageIndex]}
                  alt={`${product.name} angle ${activeImageIndex + 1}`}
                  className={styles.mainImage}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </AnimatePresence>
            </motion.div>

            <div className={styles.thumbnails}>
              {displayImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.thumbnail} ${idx === activeImageIndex ? styles.active : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={img} alt={`Thumb ${idx}`} className={styles.thumbImg} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.category}>{product.category}</div>
              <h1 className={styles.title}>{product.name}</h1>
              
              {hasMultipleColors && (
                <div className={styles.swatchesContainer}>
                  <span className={styles.swatchLabel}>Màu sắc:</span>
                  <div className={styles.swatches}>
                    <button 
                      className={`${styles.swatchBtn} ${activeColor === 'white' ? styles.active : ''}`}
                      onClick={() => setActiveColor('white')}
                    >
                      <div className={styles.colorCircle} style={{ background: '#FFFFFF' }} />
                      Trắng
                    </button>
                    <button 
                      className={`${styles.swatchBtn} ${activeColor === 'black' ? styles.active : ''}`}
                      onClick={() => setActiveColor('black')}
                    >
                      <div className={styles.colorCircle} style={{ background: '#111111' }} />
                      Đen
                    </button>
                  </div>
                </div>
              )}

              <p className={styles.description}>{product.description}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <a 
                  href="https://simi.vn" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.buyBtn}
                >
                  Mua Hàng Chính Hãng
                </a>
                
                <button onClick={scrollToSpecs} className={styles.scrollIndicator}>
                  Khám phá Thông số Kỹ thuật <ArrowDownIcon />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        {product.features && product.features.length > 0 && (
          <motion.div
            id="specs-section"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Công Nghệ Tiên Phong</h2>
            <div className={styles.featuresGrid}>
              {product.features.map((feature, idx) => (
                <div key={idx} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <CheckIcon />
                  </div>
                  <div className={styles.featureText}>{feature}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Specs Section */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.sectionTitle}>Thông Số Kỹ Thuật</h2>
            <div className={styles.specsContainer}>
              {Object.entries(product.specs).map(([key, value], idx) => (
                <div key={idx} className={styles.specRow}>
                  <div className={styles.specLabel}>{key}</div>
                  <div className={styles.specValue}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
