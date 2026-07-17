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
      }
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
      feature3: "Bảo mật chuẩn quốc tế",
      feature4: "Đồng bộ Cloud",
      btn: "Tải ứng dụng ngay"
    },
    blog: {
      eyebrow: "Tạp Chí",
      headline: "Câu Chuyện CRÉNOT",
      subtitle: "Khám phá tri thức về sức khỏe, làm đẹp và lối sống hiện đại.",
      view_all: "Xem Tất Cả Bài Viết",
      read_more: "Đọc thêm",
      post1: {
        title: "Công nghệ ion âm đột phá",
        desc: "Khám phá cách ion âm giúp cải thiện đáng kể sức khỏe và chất lượng không khí trong ngôi nhà của bạn."
      },
      post2: {
        title: "Xu hướng làm đẹp 2026",
        desc: "Công nghệ cá nhân hóa đang dần thay đổi hoàn toàn cách chúng ta chăm sóc sắc đẹp mỗi ngày."
      },
      post3: {
        title: "Bí quyết ngủ ngon cùng CRÉNOT",
        desc: "Thiết lập hệ sinh thái thông minh giúp tối ưu hóa giấc ngủ và phục hồi năng lượng hiệu quả."
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
      }
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
      btn: "Download App Now"
    },
    blog: {
      eyebrow: "Journal",
      headline: "CRÉNOT Story",
      subtitle: "Discover knowledge about health, beauty, and modern lifestyle.",
      view_all: "View All Articles",
      read_more: "Read more",
      post1: {
        title: "Breakthrough Negative Ion Tech",
        desc: "Discover how negative ions can significantly improve health and air quality in your home."
      },
      post2: {
        title: "Beauty Trends 2026",
        desc: "Personalized technology is completely changing how we take care of our beauty every day."
      },
      post3: {
        title: "Sleep Better with CRÉNOT",
        desc: "Set up a smart ecosystem to optimize your sleep and effectively restore energy."
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
      }
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
      feature3: "国際基準のセキュリティ",
      feature4: "クラウド同期",
      btn: "アプリをダウンロード"
    },
    blog: {
      eyebrow: "ジャーナル",
      headline: "CRÉNOTストーリー",
      subtitle: "健康、美容、そしてモダンなライフスタイルに関する知識を発見してください。",
      view_all: "すべての記事を見る",
      read_more: "続きを読む",
      post1: {
        title: "画期的なマイナスイオン技術",
        desc: "マイナスイオンが健康と室内の空気質を大幅に改善する方法を発見してください。"
      },
      post2: {
        title: "2026年の美容トレンド",
        desc: "パーソナライズされたテクノロジーが、毎日の美容ケアの方法を完全に変えています。"
      },
      post3: {
        title: "CRÉNOTで良質な睡眠を",
        desc: "睡眠を最適化し、効果的にエネルギーを回復するためのスマートエコシステムを構築します。"
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
  const [language, setLanguageState] = useState<Language>('vi');

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
