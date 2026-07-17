export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 border-t border-border">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2 flex flex-col items-start">
            <img src="/assets/crenot-logo.webp" alt="Crenot Beauty" className="h-12 object-contain filter invert mb-8" />
            <p className="text-text-muted font-sans font-light max-w-sm leading-relaxed">
              Trạm phân tích thể chất thông minh CRÉNOT. Công nghệ lõi từ Nhật Bản. Đánh thức mọi giới hạn của cơ thể bằng sức mạnh của sự chính xác.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading uppercase tracking-widest text-lg font-bold text-white mb-6 border-b border-border pb-4">Explore</h4>
            <ul className="space-y-4 font-sans text-sm text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Bộ Sưu Tập</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Công Nghệ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Câu Chuyện Thương Hiệu</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading uppercase tracking-widest text-lg font-bold text-white mb-6 border-b border-border pb-4">Support</h4>
            <ul className="space-y-4 font-sans text-sm text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Trung Tâm Hỗ Trợ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Chính Sách Bảo Hành</a></li>
              <li><a href="#" className="hover:text-primary transition-colors uppercase tracking-wider">Liên Hệ Đội Ngũ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-sans tracking-[0.15em] text-text-muted uppercase">
          <p>© 2026 CRÉNOT TECHNOLOGY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
