import { getImageUrl } from '../config';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
}

const rawProducts: Product[] = [
  {
    id: 's2',
    name: 'Cân sức khỏe điện tử Crenot Gofit S2',
    category: 'Sức Khoẻ & Làm Đẹp',
    image: '/images/S2/black/crenot-s2-black-1.webp',
    images: [
      '/images/S2/white/crenot-s2-white-1.webp',
      '/images/S2/white/crenot-s2-white-2.webp',
      '/images/S2/white/crenot-s2-white-3.webp',
      '/images/S2/white/crenot-s2-white-4.webp',
      '/images/S2/white/crenot-s2-white-5.webp',
      '/images/S2/white/crenot-s2-white-6.webp',
      '/images/S2/white/crenot-s2-white-7.webp',
      '/images/S2/white/crenot-s2-white-8.webp',
      '/images/S2/white/crenot-s2-white-9.webp',
      '/images/S2/white/crenot-s2-white-10.webp',
      '/images/S2/black/crenot-s2-black-1.webp',
      '/images/S2/black/crenot-s2-black-2.webp',
      '/images/S2/black/crenot-s2-black-3.webp',
      '/images/S2/black/crenot-s2-black-4.webp',
      '/images/S2/black/crenot-s2-black-5.webp',
      '/images/S2/black/crenot-s2-black-6.webp',
      '/images/S2/black/crenot-s2-black-7.webp',
      '/images/S2/black/crenot-s2-black-8.webp',
      '/images/S2/black/crenot-s2-black-9.webp',
      '/images/S2/black/crenot-s2-black-10.webp'
    ],
    description: 'Cân điện tử thông minh Gofit S2 là thiết bị không thể thiếu cho sức khỏe gia đình bạn. Sở hữu thiết kế tối giản, thanh lịch chuẩn Âu-Nhật, Gofit S2 dễ dàng theo dõi chi tiết sức khỏe qua điện thoại.',
    features: [
      'Công nghệ phân tích BIA với 4 cảm biến điện cực nhạy bén',
      'Theo dõi và hiển thị lên tới 20 chỉ số cơ thể chi tiết',
      'Đồng bộ siêu tốc qua Bluetooth với ứng dụng Fitdays',
      'Thiết kế mặt kính cường lực sang trọng, chịu tải trọng 180kg'
    ],
    specs: {
      'Model': 'Crénot Gofit S2',
      'Công nghệ đo': 'BIA (Bioelectric Impedance Analysis)',
      'Tải trọng tối đa': '180 kg',
      'Độ chia nhỏ nhất': '0.05 kg',
      'Kích thước': '280 × 280 × 24 mm',
      'Vật liệu': 'Mặt kính cường lực Tempered Glass',
      'Kết nối': 'Bluetooth (iOS & Android)',
      'Pin': '3 × AAA 1.5V'
    }
  },
  {
    id: 'x6',
    name: 'Cân Sức Khỏe Điện Tử Crenot Gofit X6 Pro',
    category: 'Sức Khoẻ Đỉnh Cao',
    image: '/images/X6/crenot-x6-1.webp',
    images: [
      '/images/X6/crenot-x6-1.webp',
      '/images/X6/crenot-x6-2.webp',
      '/images/X6/crenot-x6-3.webp',
      '/images/X6/crenot-x6-4.webp',
      '/images/X6/crenot-x6-5.webp',
      '/images/X6/crenot-x6-6.webp',
      '/images/X6/crenot-x6-7.webp'
    ],
    description: 'Crenot Gofit X6 Pro là dòng cân điện tử thông minh nâng cấp với màn hình màu siêu lớn, cho phép bạn theo dõi 8 chỉ số trực tiếp ngay trên cân. Thiết kế nổi bật với tông màu Cam cá tính.',
    features: [
      'Công nghệ phân tích BIA với 4 cảm biến ZeroVar G-Shape®',
      'Màn hình màu LCD 4.8 inch hiển thị 8 chỉ số trực tiếp (Cân nặng, mỡ cơ thể, BMI, nhịp tim...)',
      'Công nghệ FeetID™ tự động nhận diện người dùng và đo offline',
      'Mặt kính cường lực phủ ITO cao cấp cho phép tiếp xúc toàn bàn chân'
    ],
    specs: {
      'Model': 'GOFIT X6 Pro',
      'Công nghệ': 'BIA (Bioelectric Impedance Analysis)',
      'Giới hạn cân': '6–180 kg',
      'Kích thước': '280 × 280 × 27 mm',
      'Màn hình': '4.8 inch (Màu)',
      'Kết nối': 'Bluetooth (Ứng dụng Crénot Fitdays)',
      'Pin': '4 × AAA 1.5V'
    }
  },
  {
    id: 'i8',
    name: 'Cân đo inBody 8 điểm chạm Crenot Inbody i8',
    category: 'Sức Khoẻ Đỉnh Cao',
    image: '/images/i8/white/crenot-i8-white-1.webp',
    images: [
      '/images/i8/white/crenot-i8-white-1.webp',
      '/images/i8/white/crenot-i8-white-2.webp',
      '/images/i8/white/crenot-i8-white-3.webp',
      '/images/i8/white/crenot-i8-white-4.webp',
      '/images/i8/white/crenot-i8-white-5.webp',
      '/images/i8/white/crenot-i8-white-6.webp',
      '/images/i8/white/crenot-i8-white-7.webp',
      '/images/i8/white/crenot-i8-white-8.webp',
      '/images/i8/white/crenot-i8-white-9.webp',
      '/images/i8/white/crenot-i8-white-10.webp',
      '/images/i8/white/crenot-i8-white-11.webp',
      '/images/i8/black/crenot-i8-black-1.webp',
      '/images/i8/black/crenot-i8-black-2.webp',
      '/images/i8/black/crenot-i8-black-3.webp',
      '/images/i8/black/crenot-i8-black-4.webp',
      '/images/i8/black/crenot-i8-black-5.webp',
      '/images/i8/black/crenot-i8-black-6.webp',
      '/images/i8/black/crenot-i8-black-7.webp',
      '/images/i8/black/crenot-i8-black-8.webp',
      '/images/i8/black/crenot-i8-black-9.webp',
      '/images/i8/black/crenot-i8-black-10.webp'
    ],
    description: 'Inbody i8 là cuộc cách mạng công nghệ đo lường tại nhà. Với 8 điểm chạm và công nghệ PureBIA®, i8 phân tích chi tiết từng vùng cơ thể (Tay, Chân, Thân) với độ chính xác chuẩn phòng tập.',
    features: [
      'Công nghệ phân tích PureBIA® tần số kép với 8 điểm chạm',
      'Màn hình màu LCD cực lớn trên tay cầm hiển thị 8 chỉ số trực tiếp',
      'Đo lường và phân tích chuyên sâu 31 chỉ số cơ thể',
      'Dây rút siêu bền Kevlar tự động cuộn gọn gàng'
    ],
    specs: {
      'Model': 'inBody i8',
      'Điểm chạm': '8 điện cực (Tay và Chân)',
      'Giới hạn cân': '2–180 kg',
      'Kích thước': '310 × 355 × 50 mm',
      'Màn hình': '64 × 109 mm',
      'Pin': 'Lithium-ion 300 mAh (Sạc USB-C)'
    }
  },
  {
    id: 'x3',
    name: 'Máy Triệt Lông Cá Nhân Crenot Graci X3',
    category: 'Chăm Sóc Sắc Đẹp',
    image: '/images/x3/crenot-x3-1.webp',
    images: [
      '/images/x3/crenot-x3-1.webp',
      '/images/x3/crenot-x3-2.webp',
      '/images/x3/crenot-x3-3.webp',
      '/images/x3/crenot-x3-4.webp'
    ],
    description: 'Trải nghiệm spa tại nhà với máy triệt lông Crenot Graci X3 sử dụng công nghệ IPL và làm lạnh bề mặt chuyên sâu.',
    features: [
      'Công nghệ triệt lạnh Sapphire -10°C, êm ái tuyệt đối',
      'Số lượng xung khổng lồ lên tới 999.999 xung quang học',
      'Nhiều mức cường độ phù hợp với nhiều vùng da nhạy cảm'
    ],
    specs: {
      'Model': 'Graci X3',
      'Công nghệ': 'IPL kết hợp làm lạnh Sapphire',
      'Số lượng xung': '999.999 xung',
      'Nhiệt độ bề mặt': '-10°C',
      'Cường độ': 'Nhiều mức tùy chỉnh'
    }
  }
];

export const products: Product[] = rawProducts.map(p => ({
  ...p,
  image: getImageUrl(p.image),
  images: p.images.map(img => getImageUrl(img))
}));
