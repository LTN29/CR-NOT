import { motion } from 'framer-motion';
import { Activity, Heart, TrendingUp, Smartphone } from 'lucide-react';
import styles from './AppEcosystemSection.module.css';
import { useLanguage } from '../../contexts/LanguageContext';

export function AppEcosystemSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div 
            className={styles.eyebrowWrapper}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className={styles.eyebrow}>{t('app.eyebrow')}</span>
            <span className={styles.badge}>Coming Soon</span>
          </motion.div>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: t('app.headline') }}
          />
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('app.desc')}
          </motion.p>
          
          <motion.div 
            className={styles.features}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={styles.feature}>
              <div className={styles.featureIcon}><Activity size={18} /></div>
              {t('app.feature1')}
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}><TrendingUp size={18} /></div>
              {t('app.feature2')}
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}><Heart size={18} /></div>
              {t('app.feature3')}
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}><Smartphone size={18} /></div>
              {t('app.feature4')}
            </div>
          </motion.div>


        </div>

        <div className={styles.visual}>
          <motion.div 
            className={styles.phoneMockup}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.phoneNotch}></div>
            <div className={styles.phoneScreen}>
              <h2>CRÉNOT</h2>
              <p style={{marginTop: '1rem', opacity: 0.8}}>Sức khoẻ của bạn,<br/>Dữ liệu của bạn.</p>
              
              <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '1rem', width: '80%'}}>
                <div style={{fontSize: '0.8rem', opacity: 0.8}}>Chỉ số Cơ Tế Bào</div>
                <div style={{fontSize: '2rem', fontWeight: 'bold'}}>98.5%</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={`${styles.floatingElement} ${styles.float1}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            animate={{ y: [0, -10, 0] }}
            // @ts-ignore
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <Activity color="var(--color-primary)" />
            <div>
              <div style={{fontSize: '0.7rem', color: 'var(--color-text-secondary)'}}>Lượng Mỡ</div>
              <div className={styles.pulseData}>12.4%</div>
            </div>
          </motion.div>

          <motion.div 
            className={`${styles.floatingElement} ${styles.float2}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            animate={{ y: [0, 10, 0] }}
            // @ts-ignore
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
          >
            <Heart color="var(--color-energy-red)" />
            <div>
              <div style={{fontSize: '0.7rem', color: 'var(--color-text-secondary)'}}>Điểm Sức Khoẻ</div>
              <div className={styles.pulseData}>95/100</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
