import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_LANG, HTML_LANG, isLang, localizePath, splitLangPath, type Lang } from '../content/lang';
import { productsDictionary } from '../content/products-dictionary';
import { postsDictionary } from '../content/posts';

type Language = Lang;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  lp: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translation dictionaries
const baseDictionaries = {
  vi: {
    header: {
      home: "Trang Chủ",
      products: "Sản Phẩm",
      about: "Về Chúng Tôi",
      support: "Hỗ Trợ",
      search_alert: "Chức năng Tìm kiếm đang được phát triển.",
      simi: "Mua tại SIMI.vn",
      search_label: "Tìm kiếm",
      menu_label: "Mở menu",
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
    product_detail: {
      back: "Trở về Trang Chủ",
      color: "Màu sắc:",
      white: "Trắng",
      black: "Đen",
      buy: "Mua tại SIMI.vn",
      explore_specs: "Khám phá Thông số Kỹ thuật",
      tech: "Công Nghệ Tiên Phong",
      specs: "Thông Số Kỹ Thuật",
      video: "Xem video hướng dẫn",
      faq: "Câu Hỏi Thường Gặp",
      notes: "Lưu ý khi sử dụng",
      related: "Bài Viết Liên Quan",
      summary: "Trả lời nhanh",
      in_article: "Sản phẩm trong bài",
      updated: "Cập nhật",
      blog_back: "Tất cả bài viết"
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
      view_all: "XEM TẤT CẢ BÀI VIẾT"
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
      prod3: "Mua tại SIMI.vn",
      support: "Hỗ Trợ Khách Hàng",
      sup1: "Trung Tâm Bảo Hành",
      sup2: "Hướng Dẫn Sử Dụng",
      sup3: "Chính Sách Đổi Trả",
      sup4: "Liên Hệ",
      connect: "Kết Nối",
      legal_title: "Thông tin pháp lý",
      legal_disclosure: "CRÉNOT là website giới thiệu thương hiệu và sản phẩm. Website không tiếp nhận đơn đặt hàng và không thực hiện giao dịch mua bán trực tuyến. Việc mua hàng, thanh toán, giao hàng, đổi trả và các giao dịch thương mại được thực hiện tại SIMI.vn.",
      simi_link: "SIMI.vn",
      site_operator: "Đơn vị quản lý website",
      tax_code: "Mã số thuế",
      address: "Địa chỉ",
      hotline: "Hotline",
      email: "Email",
      rights: "Crenot Home. All rights reserved.",
      terms: "Điều khoản",
      privacy: "Chính sách bảo mật"
    }
  },
  en: {
    header: {
      home: "Home",
      products: "Products",
      about: "About Us",
      support: "Support",
      search_alert: "Search function is under development.",
      simi: "Buy at SIMI.vn",
      search_label: "Search",
      menu_label: "Open menu",
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
    product_detail: {
      back: "Back to Home",
      color: "Color:",
      white: "White",
      black: "Black",
      buy: "Buy at SIMI.vn",
      explore_specs: "Explore Tech Specs",
      tech: "Pioneering Technology",
      specs: "Technical Specifications",
      video: "Watch the how-to video",
      faq: "Frequently Asked Questions",
      notes: "Before you use it",
      related: "Related Articles",
      summary: "Quick answer",
      in_article: "Products in this article",
      updated: "Updated",
      blog_back: "All articles"
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
      prod3: "Buy at SIMI.vn",
      support: "Customer Support",
      sup1: "Warranty Center",
      sup2: "User Manuals",
      sup3: "Return Policy",
      sup4: "Contact",
      connect: "Connect",
      legal_title: "Legal information",
      legal_disclosure: "CRÉNOT is a website introducing the brand and its products. It does not accept orders or conduct online sales. Purchases, payments, delivery, returns, and all commercial transactions take place at SIMI.vn.",
      simi_link: "SIMI.vn",
      site_operator: "Website operator",
      tax_code: "Tax ID",
      address: "Address",
      hotline: "Hotline",
      email: "Email",
      rights: "Crenot Home. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy Policy"
    }
  },
  jp: {
    header: {
      home: "ホーム",
      products: "製品情報",
      about: "会社概要",
      support: "サポート",
      search_alert: "検索機能は開発中です。",
      simi: "SIMI.vnで購入",
      search_label: "検索",
      menu_label: "メニューを開く",
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
    product_detail: {
      back: "ホームに戻る",
      color: "カラー：",
      white: "ホワイト",
      black: "ブラック",
      buy: "SIMI.vnで購入",
      explore_specs: "技術仕様を探る",
      tech: "先駆的な技術",
      specs: "技術仕様",
      video: "使い方の動画を見る",
      faq: "よくある質問",
      notes: "ご使用上の注意",
      related: "関連記事",
      summary: "要点",
      in_article: "この記事の製品",
      updated: "更新日",
      blog_back: "記事一覧"
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
      prod3: "SIMI.vnで購入",
      support: "カスタマーサポート",
      sup1: "保証センター",
      sup2: "取扱説明書",
      sup3: "返品ポリシー",
      sup4: "お問い合わせ",
      connect: "接続",
      legal_title: "法的情報",
      legal_disclosure: "CRÉNOTはブランドと製品を紹介するウェブサイトです。当サイトでは注文を受け付けず、オンラインでの売買も行っていません。購入、支払い、配送、返品などの商取引はすべてSIMI.vnで行われます。",
      simi_link: "SIMI.vn",
      site_operator: "ウェブサイト運営者",
      tax_code: "税番号",
      address: "住所",
      hotline: "電話",
      email: "メール",
      rights: "Crenot Home. 無断複写・転載を禁じます。",
      terms: "利用規約",
      privacy: "プライバシーポリシー"
    }
  }
};

type Dictionary = (typeof baseDictionaries)['vi'] & {
  products_data: ReturnType<typeof productsDictionary>;
  blogs_data: ReturnType<typeof postsDictionary>;
};

// Product and article copy lives in src/content; it is merged in here so components keep using t().
const dictionaries = Object.fromEntries(
  (['vi', 'en', 'jp'] as Language[]).map((lang) => [
    lang,
    { ...baseDictionaries[lang], products_data: productsDictionary(lang), blogs_data: postsDictionary(lang) },
  ]),
) as Record<Language, Dictionary>;

/** Looks up a dictionary key outside React (prerendering, document head). Falls back to English. */
export function translate(lang: Language, path: string): any {
  const find = (dict: any) => path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), dict);
  return find(dictionaries[lang]) ?? find(dictionaries.en) ?? path;
}

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage?: Language }> = ({
  children,
  initialLanguage,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const urlLang = splitLangPath(location.pathname).lang;
  const [savedLang, setSavedLang] = useState<Language>(initialLanguage ?? DEFAULT_LANG);
  // A language prefix in the URL (/vi, /ja) always wins, so every URL has exactly one language.
  const language: Language = urlLang ?? savedLang;

  useEffect(() => {
    const stored = localStorage.getItem('crenot_lang');
    if (!isLang(stored) || urlLang) return;
    setSavedLang(stored);
    if (stored !== DEFAULT_LANG) {
      const { path } = splitLangPath(location.pathname);
      navigate(localizePath(path, stored) + location.search + location.hash, { replace: true });
    }
    // Only on first load: afterwards the URL carries the language.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[language];
  }, [language]);

  const setLanguage = (lang: Language) => {
    setSavedLang(lang);
    localStorage.setItem('crenot_lang', lang);
    const { path } = splitLangPath(location.pathname);
    navigate(localizePath(path, lang) + location.search + location.hash);
  };

  /** Path inside the site for the current language: lp('/product/s2') → '/vi/product/s2'. */
  const lp = (path: string) => localizePath(path, language);

  const t = (path: string) => translate(language, path);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, lp }}>
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
