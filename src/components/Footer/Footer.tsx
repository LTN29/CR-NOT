import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <img src="/images/Crenot Beauty - transparent.png" alt="Crenot" className={styles.logo} />
            <p className={styles.description}>
              CRÉNOT kiến tạo một phong cách sống hiện đại, kết hợp giữa công nghệ thông minh, sức khỏe và sắc đẹp.
            </p>
          </div>
          
          <div>
            <h4 className={styles.title}>Sản Phẩm</h4>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>Máy Triệt Lông</a></li>
              <li><a href="#" className={styles.link}>Cân Sức Khoẻ Thông Minh</a></li>
              <li><a href="https://simi.vn" target="_blank" rel="noopener noreferrer" className={styles.link}>Mua Hàng Chính Hãng</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.title}>Hỗ Trợ Khách Hàng</h4>
            <ul className={styles.list}>
              <li><a href="https://baohanh.simi.vn" target="_blank" rel="noopener noreferrer" className={styles.link}>Trung Tâm Bảo Hành</a></li>
              <li><a href="#" className={styles.link}>Hướng Dẫn Sử Dụng</a></li>
              <li><a href="#" className={styles.link}>Chính Sách Đổi Trả</a></li>
              <li><a href="#" className={styles.link}>Liên Hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className={styles.title}>Kết Nối</h4>
            <ul className={styles.list}>
              <li><a href="#" className={styles.link}>Facebook</a></li>
              <li><a href="#" className={styles.link}>Instagram</a></li>
              <li><a href="#" className={styles.link}>YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Crenot Home. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className={styles.link}>Điều khoản</a>
            <a href="#" className={styles.link}>Bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
