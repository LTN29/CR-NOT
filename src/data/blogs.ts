export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const posts: BlogPost[] = [
  {
    id: 'hieu-dung-ve-14-chi-so',
    title: 'Hiểu đúng về 14 chỉ số cơ thể InBody để tối ưu luyện tập',
    excerpt: 'Không chỉ là cân nặng, lượng mỡ và khối lượng cơ bắp mới là chìa khoá để bạn có một vóc dáng chuẩn khoa học và khỏe mạnh từ bên trong.',
    content: 'Cân nặng không phản ánh toàn bộ sức khỏe của bạn. Việc hiểu rõ các chỉ số cơ thể như tỷ lệ mỡ, khối lượng cơ, lượng nước và mỡ nội tạng giúp bạn xây dựng chế độ dinh dưỡng và luyện tập chính xác hơn. Cân thông minh CRÉNOT Inbody phân tích 14 chỉ số sức khỏe, mang đến cái nhìn toàn diện để bạn dễ dàng đạt được vóc dáng mơ ước.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    category: 'Sức Khỏe',
    date: '10 Tháng 7, 2026',
    author: 'CRÉNOT Health Team'
  },
  {
    id: 'triet-long-bang-lanh',
    title: 'Triệt lông băng lạnh: Công nghệ thay đổi ngành làm đẹp',
    excerpt: 'Tìm hiểu tại sao công nghệ triệt lạnh -10 độ C lại mang đến trải nghiệm êm ái, không đau rát và an toàn tuyệt đối cho mọi vùng da nhạy cảm.',
    content: 'Công nghệ triệt lông IPL truyền thống thường gây ra cảm giác châm chích, đặc biệt ở các vùng da nhạy cảm. Với công nghệ triệt lông băng lạnh Sapphire -10 độ C trên máy CRÉNOT Graci X6 Pro, bề mặt da được làm mát ngay lập tức trong quá trình phát xung quang học, giúp loại bỏ hoàn toàn cảm giác đau rát. Đây là bước đột phá giúp trải nghiệm triệt lông tại nhà trở nên thoải mái như tại không gian Spa cao cấp.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80',
    category: 'Làm Đẹp',
    date: '05 Tháng 7, 2026',
    author: 'CRÉNOT Beauty Team'
  },
  {
    id: 'phong-cach-song-nang-dong',
    title: 'Định hình phong cách sống năng động cùng CRÉNOT',
    excerpt: 'Làm thế nào để duy trì thói quen vận động mỗi ngày? Hệ sinh thái thiết bị thông minh của chúng tôi sẽ là người bạn đồng hành 24/7 của bạn.',
    content: 'Xây dựng thói quen sống khỏe bắt đầu từ những bước nhỏ nhất. Việc theo dõi sát sao sự thay đổi của cơ thể qua từng ngày giúp duy trì động lực mãnh liệt. Với ứng dụng CRÉNOT Life, toàn bộ dữ liệu từ cân thông minh và các thiết bị chăm sóc cá nhân được đồng bộ tức thì, cung cấp cho bạn bức tranh toàn cảnh về hành trình nâng cấp bản thân.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
    category: 'Phong Cách Sống',
    date: '28 Tháng 6, 2026',
    author: 'CRÉNOT Lifestyle Team'
  }
];
