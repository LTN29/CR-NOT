import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { getImageUrl } from '../../config';
import styles from './ProductEcosystemSection.module.css';

function ProductCard({ product, index }: { product: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  useEffect(() => {
    let interval: number;
    if (isHovered && product.images && product.images.length > 1) {
      interval = window.setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
      }, 150);
    } else {
      setCurrentImageIndex(0);
    }
    
    return () => {
      window.clearInterval(interval);
    };
  }, [isHovered, product.images]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  const currentImage = product.images && product.images.length > 0 ? product.images[currentImageIndex] : product.image;

  return (
    <div className={`${styles.productRow} ${index % 2 !== 0 ? styles.reverse : ''}`}>
      <motion.div 
        className={styles.imageCol}
        initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className={styles.imageBox}
          onMouseMove={handleMouse}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
        >
          <img src={currentImage} alt={product.name} className={styles.productImage} />
        </motion.div>
      </motion.div>
      
      <div className={styles.textCol}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.category}>{product.category}</div>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          
          <Link to={`/product/${product.id}`} className={styles.actionBtn}>
            Khám Phá
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export function ProductEcosystemSection() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        
        {/* Khôi phục banner.webp tuyệt đẹp */}
        <motion.div 
          className={styles.bannerWrapper}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={getImageUrl('/banner.webp')} 
            alt="Crenot Product Ecosystem Banner" 
            className={styles.bannerImage}
          />
        </motion.div>

        <div className={styles.sectionHeader}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Hệ Sinh Thái Đẳng Cấp
          </motion.h2>
        </div>

        <div className={styles.productsList}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
