export default function Collections() {
  const collections = [
    {
      id: "x6",
      name: "CRÉNOT GOFIT X6 PRO",
      desc: "Trạm phân tích thể chất chuyên nghiệp. Mặt kính nguyên khối, cảm biến lực siêu nhạy. Đánh thức mọi tiềm năng ẩn giấu trong cơ thể bạn.",
      image: "/assets/x6-2.webp",
      align: "right"
    },
    {
      id: "i8",
      name: "CRÉNOT INBODY I8",
      desc: "Phân tích cấu trúc cơ thể 8 điểm chạm. Đo lường chính xác từng milimet khối lượng cơ và mỡ. Lựa chọn hàng đầu của huấn luyện viên chuyên nghiệp.",
      image: "/assets/i8-2.webp",
      align: "left"
    },
    {
      id: "x3",
      name: "CRÉNOT GRACI X3",
      desc: "Công nghệ triệt lông lạnh băng tiên tiến. Hiệu suất cao, thiết kế cầm tay tiện lợi, mang lại trải nghiệm êm ái tuyệt đối.",
      image: "/assets/x3-2.webp",
      align: "right"
    }
  ];

  return (
    <section id="collections" className="py-32 bg-surface">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col mb-24">
          <h2 className="text-5xl md:text-7xl font-heading font-black text-white uppercase tracking-tighter">
            PRO SERIES <span className="text-primary">.</span>
          </h2>
          <div className="w-full h-[2px] bg-border mt-8">
            <div className="w-32 h-full bg-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, idx) => (
            <div key={item.id} className="group relative bg-black p-8 border border-border hover:border-primary transition-colors duration-500 overflow-hidden flex flex-col min-h-[500px]">
              
              {/* Image */}
              <div className="absolute inset-0 z-0 flex items-center justify-center p-12 transition-transform duration-700 group-hover:scale-110">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-2xl"
                />
              </div>

              {/* Number Watermark */}
              <div className="absolute top-4 right-4 z-0 text-[8rem] font-heading font-black text-white/5 leading-none pointer-events-none group-hover:text-primary/10 transition-colors">
                0{idx + 1}
              </div>
              
              {/* Content */}
              <div className="relative z-10 mt-auto pt-48 flex flex-col bg-gradient-to-t from-black via-black/80 to-transparent p-4 -mx-4 -mb-4">
                <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-wide group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-text-muted font-sans leading-relaxed mb-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
                
                <div className="flex items-center gap-4 text-white font-heading font-bold uppercase tracking-widest text-sm group-hover:text-primary transition-colors cursor-pointer">
                  <span>View Details</span>
                  <div className="w-8 h-[2px] bg-white group-hover:bg-primary transition-colors"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
