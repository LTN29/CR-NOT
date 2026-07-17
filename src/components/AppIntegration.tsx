import { motion } from 'framer-motion';
import { CheckCircle2, Apple, PlaySquare } from 'lucide-react';

export default function AppIntegration() {
  return (
    <section id="app" className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center text-center lg:text-left">
        
        <motion.div 
          className="lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <img src="/assets/app.png" alt="CRÉNOT App Interface" className="w-full rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] floating-img" />
        </motion.div>

        <motion.div 
          className="lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">
            Đồng Bộ <span className="text-gradient">Hoàn Hảo</span>
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Ứng dụng CRÉNOT Health kết nối Bluetooth 5.0 tức thì. Theo dõi biểu đồ sức khỏe, đặt mục tiêu và nhận lời khuyên được cá nhân hóa bởi AI.
          </p>
          
          <ul className="space-y-4 mb-10 text-left w-fit mx-auto lg:mx-0">
            <li className="flex items-center gap-3 text-lg">
              <CheckCircle2 className="text-accent" /> Đồng bộ với Apple Health & Google Fit.
            </li>
            <li className="flex items-center gap-3 text-lg">
              <CheckCircle2 className="text-accent" /> Hỗ trợ lưu trữ dữ liệu cho 24 người dùng.
            </li>
            <li className="flex items-center gap-3 text-lg">
              <CheckCircle2 className="text-accent" /> Biểu đồ trực quan theo ngày/tuần/tháng.
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href="#" className="glass-card !p-4 !rounded-xl flex items-center justify-center gap-3 font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <Apple size={24} /> App Store
            </a>
            <a href="#" className="glass-card !p-4 !rounded-xl flex items-center justify-center gap-3 font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <PlaySquare size={24} /> Google Play
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
