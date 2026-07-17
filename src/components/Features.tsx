import { motion } from 'framer-motion';
import { HeartPulse, Percent, Dumbbell, Droplets } from 'lucide-react';

const features = [
  {
    icon: <HeartPulse size={40} className="text-accent mb-5" />,
    title: 'Đo Nhịp Tim',
    desc: 'Kiểm tra nhịp tim tĩnh ngay trên bề mặt cân khi bạn đứng lên.'
  },
  {
    icon: <Percent size={40} className="text-accent mb-5" />,
    title: 'Tỷ Lệ Mỡ Cơ Thể',
    desc: 'Theo dõi chính xác lượng mỡ thừa để có kế hoạch giảm cân hiệu quả.'
  },
  {
    icon: <Dumbbell size={40} className="text-accent mb-5" />,
    title: 'Khối Lượng Cơ',
    desc: 'Đo lường sự phát triển của cơ bắp sau những buổi tập luyện căng thẳng.'
  },
  {
    icon: <Droplets size={40} className="text-accent mb-5" />,
    title: 'Lượng Nước',
    desc: 'Đảm bảo cơ thể bạn luôn được cung cấp đủ nước mỗi ngày.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-5">
        <motion.div 
          className="text-center mb-[60px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Công Nghệ <span className="text-gradient">Đột Phá</span>
          </h2>
          <p className="text-xl text-text-muted max-w-[600px] mx-auto">
            Không chỉ là đo cân nặng. Phân tích toàn diện cơ thể bạn với cảm biến BIA siêu nhạy thế hệ mới.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="glass-card text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {item.icon}
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
