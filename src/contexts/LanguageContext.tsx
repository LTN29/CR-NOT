import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'vi' | 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translation dictionaries
const dictionaries = {
  vi: {
    header: {
      home: "Trang Chủ",
      products: "Sản Phẩm",
      about: "Về Chúng Tôi",
      support: "Hỗ Trợ",
      search_alert: "Chức năng Tìm kiếm đang được phát triển.",
    },
    hero: {
      btn_explore: "Khám phá sản phẩm",
      btn_about: "Về CRÉNOT",
    },
    brand_soul: {
      eyebrow: "Nội Tâm Thương Hiệu",
      headline: "Không chỉ là thiết bị. <br/> Đó là <span>Phong Cách Sống</span>.",
      desc: "Chúng tôi tin rằng sức khoẻ và sắc đẹp bắt nguồn từ sự thấu hiểu cơ thể. CRÉNOT ra đời mang theo sứ mệnh cung cấp những giải pháp công nghệ y tế và làm đẹp tiên tiến nhất, giúp bạn chủ động kiến tạo một phiên bản hoàn hảo hơn mỗi ngày.",
    },
    products: {
      eyebrow: "Hệ Sinh Thái",
      headline: "Dải Sản Phẩm Đột Phá",
      desc: "Từ thiết bị chăm sóc sức khỏe gia đình đến các sản phẩm làm đẹp cá nhân, mỗi thiết bị CRÉNOT đều là một tuyệt tác công nghệ được chế tác tỉ mỉ.",
      health: {
        title: "Thiết Bị Y Tế",
        desc: "Chuẩn xác tuyệt đối, chăm sóc toàn diện",
        btn: "Khám phá"
      },
      beauty: {
        title: "Làm Đẹp",
        desc: "Đánh thức vẻ đẹp tiềm ẩn của bạn",
        btn: "Khám phá"
      },
      lifestyle: {
        title: "Phong Cách Sống",
        desc: "Nâng tầm không gian, trọn vẹn trải nghiệm",
        btn: "Khám phá"
      },
      explore: "KHÁM PHÁ"
    },
    products_data: {
      s2: {
        category: "SỨC KHOẺ & LÀM ĐẸP",
        name: "Cân sức khỏe điện tử Crenot Gofit S2",
        desc: "Cân điện tử thông minh Gofit S2 là thiết bị không thể thiếu cho sức khỏe gia đình bạn. Sở hữu thiết kế tối giản, thanh lịch chuẩn Âu-Nhật, Gofit S2 dễ dàng theo dõi chi tiết sức khỏe qua điện thoại.",
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
      x6: {
        category: "SỨC KHOẺ ĐỈNH CAO",
        name: "Cân Sức Khỏe Điện Tử Crenot Gofit X6 Pro",
        desc: "Crenot Gofit X6 Pro là dòng cân điện tử thông minh nâng cấp với màn hình màu siêu lớn, cho phép bạn theo dõi 8 chỉ số trực tiếp ngay trên cân. Thiết kế nổi bật với tông màu Cam cá tính.",
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
      i8: {
        category: "SỨC KHOẺ ĐỈNH CAO",
        name: "Cân đo inBody 8 điểm chạm Crenot Inbody i8",
        desc: "Inbody i8 là cuộc cách mạng công nghệ đo lường tại nhà. Với 8 điểm chạm và công nghệ PureBIA®, i8 phân tích chi tiết từng vùng cơ thể (Tay, Chân, Thân) với độ chính xác chuẩn phòng tập.",
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
      x3: {
        category: "CHĂM SÓC SẮC ĐẸP",
        name: "Máy Triệt Lông Cá Nhân Crenot Graci X3",
        desc: "Trải nghiệm spa tại nhà với máy triệt lông Crenot Graci X3 sử dụng công nghệ IPL và làm lạnh bề mặt chuyên sâu.",
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
    },
    product_detail: {
      back: "Trở về Trang Chủ",
      color: "Màu sắc:",
      white: "Trắng",
      black: "Đen",
      buy: "Mua Hàng Chính Hãng",
      explore_specs: "Khám phá Thông số Kỹ thuật",
      tech: "Công Nghệ Tiên Phong",
      specs: "Thông Số Kỹ Thuật"
    },
    tech: {
      eyebrow: "Đột Phá Công Nghệ",
      headline: "Đột Phá <span>Công Nghệ</span>",
      desc: "Sự kết hợp hoàn hảo giữa vật liệu cao cấp và công nghệ cảm biến thông minh nhất từ Nhật Bản.",
      card1: {
        title: "Chip Xử Lý Kép",
        desc: "Tích hợp AI để phân tích dữ liệu cơ thể một cách chính xác tuyệt đối trong chưa đầy 3 giây."
      },
      card2: {
        title: "Triệt Lông Băng Lạnh",
        desc: "Công nghệ triệt lạnh -10°C mang lại cảm giác dễ chịu, an toàn tuyệt đối cho mọi loại da."
      },
      card3: {
        title: "Đo InBody 8 Điểm",
        desc: "Phân tích chuyên sâu 14 chỉ số như máy đo tại phòng gym chuyên nghiệp với độ sai số cực thấp."
      }
    },
    app: {
      eyebrow: "Trải Nghiệm Liền Mạch",
      headline: "Kiểm Soát Mọi Thứ Trong Tầm Tay",
      desc: "Ứng dụng CRÉNOT Sync kết nối mọi thiết bị của bạn, cung cấp dữ liệu phân tích chuyên sâu và đưa ra các gợi ý cá nhân hóa để cải thiện sức khỏe mỗi ngày.",
      feature1: "Phân tích dữ liệu AI",
      feature2: "Điều khiển từ xa",
      feature3: "Chuẩn bảo mật toàn cầu",
      feature4: "Đồng bộ đám mây",
      graphic_tagline: "Sức khoẻ của bạn,<br/>Dữ liệu của bạn.",
      graphic_cellular: "Chỉ số Cơ Tế Bào",
      graphic_fat: "Lượng Mỡ",
      graphic_score: "Điểm Sức Khoẻ",
      btn: "Tải ứng dụng ngay"
    },
    blog: {
      eyebrow: "Kiến Thức",
      headline: "CRÉNOT Story",
      subtitle: "Khám phá các kiến thức về sức khỏe, làm đẹp và phong cách sống hiện đại.",
      view_all: "XEM TẤT CẢ BÀI VÍT"
    },
    blogs_data: {
      'hieu-dung-ve-14-chi-so': {
        category: "Sức Khỏe",
        date: "10 Tháng 7, 2026",
        title: "Hiểu đúng về 14 chỉ số cơ thể InBody để tối ưu luyện tập",
        excerpt: "Không chỉ là cân nặng, lượng mỡ và khối lượng cơ bắp mới là chìa khoá để bạn có một vóc dáng chuẩn khoa học và khỏe mạnh từ bên trong."
      },
      'triet-long-bang-lanh': {
        category: "Làm Đẹp",
        date: "05 Tháng 7, 2026",
        title: "Triệt lông băng lạnh: Công nghệ thay đổi ngành làm đẹp",
        excerpt: "Tìm hiểu tại sao công nghệ triệt lạnh -10 độ C lại mang đến trải nghiệm êm ái, không đau rát và an toàn tuyệt đối cho mọi vùng da nhạy cảm."
      },
      'phong-cach-song-nang-dong': {
        category: "Phong Cách Sống",
        date: "28 Tháng 6, 2026",
        title: "Định hình phong cách sống năng động cùng CRÉNOT",
        excerpt: "Làm thế nào để duy trì thói quen vận động mỗi ngày? Hệ sinh thái thiết bị thông minh của chúng tôi sẽ là người bạn đồng hành 24/7 của bạn."
      }
    },
    lifestyle: {
      headline: "Kỷ Nguyên Sống Khoẻ",
      desc: "Gia nhập cộng đồng hàng triệu người dùng CRÉNOT trên toàn thế giới. Chúng tôi không chỉ thay đổi thói quen, chúng tôi kiến tạo một phong cách sống mới – Năng động, Hiện đại và Đầy cảm hứng.",
      stat1: "Người dùng tin tưởng",
      stat2: "Chỉ số đo lường",
      stat3: "Đồng hành sức khoẻ"
    },
    footer: {
      brand_desc: "CRÉNOT kiến tạo một phong cách sống hiện đại, kết hợp giữa công nghệ thông minh, sức khỏe và sắc đẹp.",
      products: "Sản Phẩm",
      prod1: "Máy Triệt Lông",
      prod2: "Cân Sức Khoẻ Thông Minh",
      prod3: "Mua Hàng Chính Hãng",
      support: "Hỗ Trợ Khách Hàng",
      sup1: "Trung Tâm Bảo Hành",
      sup2: "Hướng Dẫn Sử Dụng",
      sup3: "Chính Sách Đổi Trả",
      sup4: "Liên Hệ",
      connect: "Kết Nối",
      rights: "Crenot Home. All rights reserved.",
      terms: "Điều khoản",
      privacy: "Bảo mật"
    }
  },
  en: {
    header: {
      home: "Home",
      products: "Products",
      about: "About Us",
      support: "Support",
      search_alert: "Search function is under development.",
    },
    hero: {
      btn_explore: "Explore Products",
      btn_about: "About CRÉNOT",
    },
    brand_soul: {
      eyebrow: "Brand Soul",
      headline: "Not just devices. <br/> It's a <span>Lifestyle</span>.",
      desc: "We believe that health and beauty stem from understanding your body. CRÉNOT was born with the mission to provide the most advanced medical and beauty tech solutions, helping you proactively create a perfect version of yourself every day.",
    },
    products: {
      eyebrow: "Ecosystem",
      headline: "Breakthrough Products",
      desc: "From family health devices to personal beauty products, every CRÉNOT device is a meticulously crafted technological masterpiece.",
      health: {
        title: "Medical Devices",
        desc: "Absolute accuracy, comprehensive care",
        btn: "Explore"
      },
      beauty: {
        title: "Beauty",
        desc: "Awaken your hidden beauty",
        btn: "Explore"
      },
      lifestyle: {
        title: "Lifestyle",
        desc: "Elevate your space, perfect experience",
        btn: "Explore"
      },
      explore: "EXPLORE"
    },
    products_data: {
      s2: {
        category: "HEALTH & BEAUTY",
        name: "Crenot Gofit S2 Smart Body Scale",
        desc: "The Gofit S2 smart scale is an essential device for your family's health. Featuring a minimalist, elegant Euro-Japanese design, Gofit S2 makes it easy to track detailed health metrics via smartphone.",
        features: [
          'BIA analysis technology with 4 highly sensitive electrodes',
          'Track and display up to 20 detailed body metrics',
          'Ultra-fast Bluetooth sync with Fitdays app',
          'Luxurious tempered glass design, supports up to 180kg load'
        ],
        specs: {
          'Model': 'Crénot Gofit S2',
          'Measurement Tech': 'BIA (Bioelectric Impedance Analysis)',
          'Max Load': '180 kg',
          'Min Division': '0.05 kg',
          'Dimensions': '280 × 280 × 24 mm',
          'Material': 'Tempered Glass',
          'Connectivity': 'Bluetooth (iOS & Android)',
          'Battery': '3 × AAA 1.5V'
        }
      },
      x6: {
        category: "PEAK HEALTH",
        name: "Crenot Gofit X6 Pro Smart Body Scale",
        desc: "Crenot Gofit X6 Pro is an upgraded smart scale with an ultra-large color display, allowing you to track 8 metrics directly on the scale. Standout design with a bold Orange tone.",
        features: [
          'BIA analysis technology with 4 ZeroVar G-Shape® sensors',
          '4.8 inch color LCD display showing 8 metrics directly (Weight, body fat, BMI, heart rate...)',
          'FeetID™ technology automatically recognizes users and measures offline',
          'Premium ITO coated tempered glass for full foot contact'
        ],
        specs: {
          'Model': 'GOFIT X6 Pro',
          'Technology': 'BIA (Bioelectric Impedance Analysis)',
          'Weight Limit': '6–180 kg',
          'Dimensions': '280 × 280 × 27 mm',
          'Display': '4.8 inch (Color)',
          'Connectivity': 'Bluetooth (Crénot Fitdays App)',
          'Battery': '4 × AAA 1.5V'
        }
      },
      i8: {
        category: "PEAK HEALTH",
        name: "Crenot Inbody i8 8-Point Measurement Scale",
        desc: "Inbody i8 is a home measurement technology revolution. With 8 contact points and PureBIA® technology, i8 analyzes each body segment (Arms, Legs, Torso) with gym-standard accuracy.",
        features: [
          'Dual-frequency PureBIA® technology with 8 contact points',
          'Extra-large color LCD display on handle showing 8 direct metrics',
          'In-depth measurement and analysis of 31 body metrics',
          'Ultra-durable retractable Kevlar cord'
        ],
        specs: {
          'Model': 'inBody i8',
          'Contact Points': '8 electrodes (Hands and Feet)',
          'Weight Limit': '2–180 kg',
          'Dimensions': '310 × 355 × 50 mm',
          'Display': '64 × 109 mm',
          'Battery': 'Lithium-ion 300 mAh (USB-C Rechargeable)'
        }
      },
      x3: {
        category: "BEAUTY CARE",
        name: "Crenot Graci X3 Personal Hair Removal Machine",
        desc: "Experience a home spa with the Crenot Graci X3 hair removal machine using IPL technology and deep surface cooling.",
        features: [
          'Sapphire -10°C ice cooling technology, absolutely soothing',
          'Massive capacity of up to 999,999 optical flashes',
          'Multiple intensity levels suitable for sensitive skin areas'
        ],
        specs: {
          'Model': 'Graci X3',
          'Technology': 'IPL combined with Sapphire cooling',
          'Flashes': '999,999 flashes',
          'Surface Temp': '-10°C',
          'Intensity': 'Multiple adjustable levels'
        }
      }
    },
    product_detail: {
      back: "Back to Home",
      color: "Color:",
      white: "White",
      black: "Black",
      buy: "Buy Authentic Product",
      explore_specs: "Explore Tech Specs",
      tech: "Pioneering Technology",
      specs: "Technical Specifications"
    },
    tech: {
      eyebrow: "Tech Breakthrough",
      headline: "Technology <span>Breakthrough</span>",
      desc: "The perfect combination of premium materials and the smartest sensor technology from Japan.",
      card1: {
        title: "Dual Core Chip",
        desc: "Integrated AI to analyze body data with absolute precision in less than 3 seconds."
      },
      card2: {
        title: "Ice Cooling Hair Removal",
        desc: "-10°C ice cooling technology provides a comfortable feeling, absolutely safe for all skin types."
      },
      card3: {
        title: "8-Point InBody Scan",
        desc: "In-depth analysis of 14 indicators like professional gym machines with extremely low error."
      }
    },
    app: {
      eyebrow: "Seamless Experience",
      headline: "Control Everything at Your Fingertips",
      desc: "The CRÉNOT Sync app connects all your devices, providing deep analytical data and offering personalized suggestions to improve your health every day.",
      feature1: "AI Data Analysis",
      feature2: "Remote Control",
      feature3: "Global Security Standards",
      feature4: "Cloud Sync",
      graphic_tagline: "Your health,<br/>Your data.",
      graphic_cellular: "Cellular Health",
      graphic_fat: "Body Fat",
      graphic_score: "Health Score",
      btn: "Download App Now"
    },
    blog: {
      eyebrow: "Knowledge",
      headline: "CRÉNOT Story",
      subtitle: "Discover knowledge about health, beauty, and modern lifestyle.",
      view_all: "VIEW ALL ARTICLES"
    },
    blogs_data: {
      'hieu-dung-ve-14-chi-so': {
        category: "Health",
        date: "July 10, 2026",
        title: "Understanding 14 InBody metrics to optimize training",
        excerpt: "Not just weight, body fat and muscle mass are the keys to having a scientifically standard and healthy body from the inside."
      },
      'triet-long-bang-lanh': {
        category: "Beauty",
        date: "July 05, 2026",
        title: "Ice cooling hair removal: Technology changing the beauty industry",
        excerpt: "Find out why -10°C ice cooling technology provides a smooth, painless, and absolutely safe experience for all sensitive skin areas."
      },
      'phong-cach-song-nang-dong': {
        category: "Lifestyle",
        date: "June 28, 2026",
        title: "Shaping an active lifestyle with CRÉNOT",
        excerpt: "How to maintain a daily exercise habit? Our smart device ecosystem will be your 24/7 companion."
      }
    },
    lifestyle: {
      headline: "The Era of Healthy Living",
      desc: "Join a community of millions of CRÉNOT users worldwide. We don't just change habits, we create a new lifestyle – Dynamic, Modern, and Inspiring.",
      stat1: "Trusted Users",
      stat2: "Measurement Metrics",
      stat3: "Health Companion"
    },
    footer: {
      brand_desc: "CRÉNOT creates a modern lifestyle, combining smart technology, health, and beauty.",
      products: "Products",
      prod1: "Hair Removal",
      prod2: "Smart Body Scale",
      prod3: "Buy Genuine Products",
      support: "Customer Support",
      sup1: "Warranty Center",
      sup2: "User Manuals",
      sup3: "Return Policy",
      sup4: "Contact",
      connect: "Connect",
      rights: "Crenot Home. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy"
    }
  },
  jp: {
    header: {
      home: "ホーム",
      products: "製品情報",
      about: "会社概要",
      support: "サポート",
      search_alert: "検索機能は開発中です。",
    },
    hero: {
      btn_explore: "製品を見る",
      btn_about: "CRÉNOTについて",
    },
    brand_soul: {
      eyebrow: "ブランドソウル",
      headline: "ただのデバイスではない。<br/>それは<span>ライフスタイル</span>です。",
      desc: "私たちは、健康と美しさは自分の体を理解することから生まれると信じています。CRÉNOTは、最も先進的な医療および美容テクノロジーソリューションを提供し、あなたが毎日完璧な自分を積極的に創造するのを支援するという使命を持って生まれました。",
    },
    products: {
      eyebrow: "エコシステム",
      headline: "革新的な製品ライン",
      desc: "家庭用健康機器からパーソナル美容製品まで、CRÉNOTの各デバイスは細部にまでこだわったテクノロジーの傑作です。",
      health: {
        title: "医療機器",
        desc: "絶対的な精度、総合的なケア",
        btn: "探求する"
      },
      beauty: {
        title: "美容",
        desc: "あなたの秘められた美しさを目覚めさせる",
        btn: "探求する"
      },
      lifestyle: {
        title: "ライフスタイル",
        desc: "空間を格上げし、完璧な体験を",
        btn: "探求する"
      },
      explore: "探求する"
    },
    products_data: {
      s2: {
        category: "ヘルス＆ビューティー",
        name: "Crenot Gofit S2 スマート体組成計",
        desc: "Gofit S2スマートスケールはご家庭の健康に欠かせないデバイスです。ミニマリストでエレガントな欧日デザインを採用し、スマートフォンで詳細な健康指標を簡単に追跡できます。",
        features: [
          '4つの高感度電極を備えたBIA分析テクノロジー',
          '最大20の詳細な身体指標を追跡・表示',
          'Fitdaysアプリとの超高速Bluetooth同期',
          '高級感のある強化ガラスデザイン、最大荷重180kg'
        ],
        specs: {
          'モデル': 'Crénot Gofit S2',
          '測定技術': 'BIA (生体インピーダンス法)',
          '最大荷重': '180 kg',
          '最小表示': '0.05 kg',
          '寸法': '280 × 280 × 24 mm',
          '素材': '強化ガラス',
          '接続': 'Bluetooth (iOS & Android)',
          'バッテリー': '単4電池3本 (1.5V)'
        }
      },
      x6: {
        category: "ピークヘルス",
        name: "Crenot Gofit X6 Pro スマート体組成計",
        desc: "Crenot Gofit X6 Proは、超大型カラーディスプレイを備えたアップグレード版スマートスケールで、8つの指標をスケール上で直接追跡できます。大胆なオレンジトーンの際立つデザイン。",
        features: [
          '4つのZeroVar G-Shape®センサーによるBIA分析技術',
          '4.8インチのカラーLCDディスプレイで8つの指標を直接表示（体重、体脂肪、BMI、心拍数など）',
          'FeetID™テクノロジーによりユーザーを自動認識しオフラインで測定',
          '足裏全体に接触可能な高級ITOコーティング強化ガラス'
        ],
        specs: {
          'モデル': 'GOFIT X6 Pro',
          'テクノロジー': 'BIA (生体インピーダンス法)',
          '体重制限': '6–180 kg',
          '寸法': '280 × 280 × 27 mm',
          'ディスプレイ': '4.8インチ (カラー)',
          '接続': 'Bluetooth (Crénot Fitdaysアプリ)',
          'バッテリー': '単4電池4本 (1.5V)'
        }
      },
      i8: {
        category: "ピークヘルス",
        name: "Crenot Inbody i8 8点測定体組成計",
        desc: "Inbody i8は家庭用測定技術の革命です。8つの接点とPureBIA®テクノロジーにより、i8は各体の部位（腕、脚、胴体）をジムレベルの精度で詳細に分析します。",
        features: [
          '8つの接点を持つデュアル周波数PureBIA®テクノロジー',
          'ハンドルの特大カラーLCDディスプレイに8つの直接指標を表示',
          '31の身体指標の詳細な測定と分析',
          '超耐久性の格納式ケブラーコード'
        ],
        specs: {
          'モデル': 'inBody i8',
          '接点': '8つの電極（手と足）',
          '体重制限': '2–180 kg',
          '寸法': '310 × 355 × 50 mm',
          'ディスプレイ': '64 × 109 mm',
          'バッテリー': 'リチウムイオン 300 mAh (USB-C充電式)'
        }
      },
      x3: {
        category: "ビューティーケア",
        name: "Crenot Graci X3 家庭用脱毛器",
        desc: "IPL技術と深部表面冷却を使用したCrenot Graci X3脱毛器でホームスパを体験してください。",
        features: [
          'サファイア -10°C 冷却技術、絶対に快適',
          '最大999,999回のフラッシュ',
          '敏感な肌の領域に適した複数の強度レベル'
        ],
        specs: {
          'モデル': 'Graci X3',
          'テクノロジー': 'IPLとサファイア冷却の組み合わせ',
          'フラッシュ': '999,999回',
          '表面温度': '-10°C',
          '強度': '調整可能な複数のレベル'
        }
      }
    },
    product_detail: {
      back: "ホームに戻る",
      color: "カラー：",
      white: "ホワイト",
      black: "ブラック",
      buy: "正規品を購入する",
      explore_specs: "技術仕様を探る",
      tech: "先駆的な技術",
      specs: "技術仕様"
    },
    tech: {
      eyebrow: "技術的ブレークスルー",
      headline: "テクノロジーの<span>ブレークスルー</span>",
      desc: "最高級の素材と日本発の最もスマートなセンサー技術の完璧な融合。",
      card1: {
        title: "デュアルコアチップ",
        desc: "AIを統合し、3秒以内に絶対的な精度で身体データを分析します。"
      },
      card2: {
        title: "アイスクーリング脱毛",
        desc: "-10℃の冷却技術により快適な感覚を提供し、すべての肌タイプに絶対に安全です。"
      },
      card3: {
        title: "8点InBodyスキャン",
        desc: "プロのジムマシンのように14の指標を詳細に分析し、誤差は極めて低いです。"
      }
    },
    app: {
      eyebrow: "シームレスな体験",
      headline: "すべてを指先でコントロール",
      desc: "CRÉNOT Syncアプリはすべてのデバイスを接続し、深い分析データを提供し、毎日の健康を改善するためのパーソナライズされた提案を行います。",
      feature1: "AIデータ分析",
      feature2: "リモートコントロール",
      feature3: "グローバルなセキュリティ基準",
      feature4: "クラウド同期",
      graphic_tagline: "あなたの健康、<br/>あなたのデータ。",
      graphic_cellular: "細胞健康度",
      graphic_fat: "体脂肪率",
      graphic_score: "健康スコア",
      btn: "アプリをダウンロード"
    },
    blog: {
      eyebrow: "知識",
      headline: "CRÉNOT Story",
      subtitle: "健康、美容、現代のライフスタイルに関する知識を探求します。",
      view_all: "すべての記事を見る"
    },
    blogs_data: {
      'hieu-dung-ve-14-chi-so': {
        category: "健康",
        date: "2026年7月10日",
        title: "トレーニングを最適化するための14のInBody指標を正しく理解する",
        excerpt: "体重だけでなく、体脂肪と筋肉量が、内側から科学的に標準的で健康的な体を持つための鍵です。"
      },
      'triet-long-bang-lanh': {
        category: "美容",
        date: "2026年7月05日",
        title: "氷冷脱毛：美容業界を変えるテクノロジー",
        excerpt: "なぜ-10°Cの氷冷技術が、すべての敏感な肌の領域にスムーズで痛みがなく、絶対に安全な体験を提供するのかを探ります。"
      },
      'phong-cach-song-nang-dong': {
        category: "ライフスタイル",
        date: "2026年6月28日",
        title: "CRÉNOTによるアクティブなライフスタイルの形成",
        excerpt: "毎日の運動習慣を維持するには？私たちのスマートデバイスエコシステムは、あなたの24時間365日の仲間になります。"
      }
    },
    lifestyle: {
      headline: "健康的な生活の時代",
      desc: "世界中の数百万人のCRÉNOTユーザーコミュニティに参加してください。私たちは習慣を変えるだけでなく、ダイナミックでモダン、そしてインスピレーションに満ちた新しいライフスタイルを創造します。",
      stat1: "信頼のユーザー",
      stat2: "測定指標",
      stat3: "健康のパートナー"
    },
    footer: {
      brand_desc: "CRÉNOTはスマートテクノロジー、健康、そして美容を組み合わせたモダンなライフスタイルを創造します。",
      products: "製品情報",
      prod1: "脱毛器",
      prod2: "スマート体重計",
      prod3: "正規品の購入",
      support: "カスタマーサポート",
      sup1: "保証センター",
      sup2: "取扱説明書",
      sup3: "返品ポリシー",
      sup4: "お問い合わせ",
      connect: "接続",
      rights: "Crenot Home. 無断複写・転載を禁じます。",
      terms: "利用規約",
      privacy: "プライバシーポリシー"
    }
  }
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('crenot_lang') as Language;
    if (savedLang && ['vi', 'en', 'jp'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('crenot_lang', lang);
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = dictionaries[language];
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key not found: ${path}`);
        // Fallback to vi
        let fallback: any = dictionaries['vi'];
        for (const k of keys) {
          if (fallback[k] === undefined) return path;
          fallback = fallback[k];
        }
        return fallback;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
