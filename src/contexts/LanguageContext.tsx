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
      view_all: "XEM TẤT CẢ BÀI VIẾT"
    },
    blogs_data: {
      'hieu-dung-ve-14-chi-so': {
        category: "Sức Khỏe",
        date: "10 Tháng 7, 2026",
        title: "Hiểu đúng về 14 chỉ số cơ thể InBody để tối ưu luyện tập",
        excerpt: "Không chỉ là cân nặng, lượng mỡ và khối lượng cơ bắp mới là chìa khoá để bạn có một vóc dáng chuẩn khoa học và khỏe mạnh từ bên trong.",
        content: '<p>Cân nặng không bao giờ là con số duy nhất phản ánh toàn bộ sức khỏe hay vóc dáng thực sự của bạn. Nếu chỉ nhìn vào chiếc cân thông thường, bạn có thể lầm tưởng rằng mình đang béo lên trong khi thực chất đó là sự gia tăng của khối lượng cơ sau quá trình tập luyện. Cân thông minh CRÉNOT Inbody với công nghệ phân tích trở kháng điện sinh học (BIA) sẽ quét chính xác và đo lường 14 chỉ số cơ thể, giúp bạn hiểu rõ từng tế bào bên trong.</p><h3>14 Chỉ số cơ thể cốt lõi bạn cần nắm rõ</h3><p>Dưới đây là 14 chỉ số quan trọng được đo lường bởi cân thông minh CRÉNOT Inbody mà bạn cần theo dõi thường xuyên:</p><ul><li><strong>1. Cân nặng (Weight):</strong> Trọng lượng tổng thể của cơ thể, tuy nhiên không phải là yếu tố duy nhất quyết định độ béo gầy.</li><li><strong>2. Chỉ số BMI:</strong> Tỷ lệ giữa cân nặng và chiều cao, giúp đánh giá mức độ gầy béo cơ bản.</li><li><strong>3. Tỷ lệ mỡ cơ thể (Body Fat Rate):</strong> Phần trăm khối lượng mỡ so với tổng trọng lượng. Đây là chỉ số quan trọng nhất quyết định độ săn chắc.</li><li><strong>4. Mỡ nội tạng (Visceral Fat):</strong> Lượng mỡ bao quanh các cơ quan nội tạng. Chỉ số này cao cảnh báo nguy cơ bệnh tim mạch.</li><li><strong>5. Khối lượng cơ (Muscle Mass):</strong> Trọng lượng của toàn bộ hệ thống cơ bắp. Cơ bắp nhiều giúp tăng cường trao đổi chất.</li><li><strong>6. Khối lượng xương (Bone Mass):</strong> Đánh giá tình trạng hệ xương khớp, quan trọng để phòng ngừa loãng xương.</li><li><strong>7. Lượng nước cơ thể (Body Water):</strong> Chiếm khoảng 50-70% trọng lượng cơ thể, đảm bảo trao đổi chất trơn tru.</li><li><strong>8. Tỷ lệ trao đổi chất cơ bản (BMR):</strong> Lượng calo tối thiểu cơ thể cần để duy trì hoạt động sống trong ngày.</li><li><strong>9. Tuổi sinh học (Body Age):</strong> Đánh giá độ tuổi thực tế của cơ thể dựa trên các chỉ số sức khỏe, thay vì tuổi thật.</li><li><strong>10. Lượng Protein:</strong> Đóng vai trò xây dựng tế bào, cơ bắp và kháng thể bảo vệ cơ thể.</li><li><strong>11. Cân nặng tiêu chuẩn:</strong> Mức cân nặng lý tưởng dựa trên chiều cao và độ tuổi của bạn.</li><li><strong>12. Kiểm soát cân nặng:</strong> Khuyến nghị mức cân nặng cần tăng hoặc giảm để đạt tiêu chuẩn.</li><li><strong>13. Mức độ béo phì:</strong> Đánh giá chi tiết hơn BMI về tình trạng tích mỡ của cơ thể.</li><li><strong>14. Điểm hình thể (Body Score):</strong> Điểm số tổng quát đánh giá sức khỏe dựa trên 13 chỉ số trên.</li></ul><h3>Theo dõi và Đồng bộ Dễ dàng</h3><p>Toàn bộ 14 chỉ số này sẽ được đồng bộ ngay lập tức vào ứng dụng trên điện thoại qua Bluetooth. Ứng dụng không chỉ lưu trữ mà còn phân tích xu hướng, đưa ra cảnh báo và lời khuyên về chế độ dinh dưỡng, tập luyện như một chuyên gia thực thụ.</p><p>Sự thay đổi dù là nhỏ nhất sẽ được ghi nhận, giúp bạn duy trì động lực mãnh liệt trên con đường chinh phục mục tiêu sức khỏe. Hãy bắt đầu hành trình thay đổi vóc dáng ngay hôm nay bằng việc thấu hiểu cơ thể mình!</p>'
      },
      'triet-long-bang-lanh': {
        category: "Làm Đẹp",
        date: "05 Tháng 7, 2026",
        title: "Triệt lông băng lạnh: Công nghệ thay đổi ngành làm đẹp",
        excerpt: "Tìm hiểu tại sao công nghệ triệt lạnh -10 độ C lại mang đến trải nghiệm êm ái, không đau rát và an toàn tuyệt đối cho mọi vùng da nhạy cảm.",
        content: '<p>Công nghệ triệt lông IPL truyền thống đã mang đến giải pháp loại bỏ vi-ô-lông tại nhà tiện lợi, nhưng thường đi kèm với nỗi ám ảnh về cảm giác châm chích, bỏng rát, đặc biệt ở các vùng da nhạy cảm. Thấu hiểu điều đó, CRÉNOT Graci X3 ra đời, mang theo công nghệ triệt lông băng lạnh Sapphire -10 độ C tiên tiến bậc nhất, định nghĩa lại hoàn toàn trải nghiệm làm đẹp tại gia.</p><h3>Công nghệ Băng Lạnh Sapphire - Đột phá loại bỏ đau rát</h3><p>Trái tim của CRÉNOT Graci X3 nằm ở đầu phát xung được làm từ tinh thể Sapphire nguyên khối. Khác với các đầu kính thông thường, Sapphire có khả năng truyền dẫn nhiệt lạnh cực kỳ xuất sắc. Khi máy hoạt động, bề mặt đầu phát sẽ duy trì ở mức nhiệt độ lý tưởng là -10 độ C, làm mát ngay lập tức vùng da vừa được chiếu xung quang học.</p><ul><li><strong>1. Không đau rát:</strong> Cảm giác mát lạnh tức thì lấn át hoàn toàn lượng nhiệt sinh ra từ xung IPL, mang lại trải nghiệm êm ái tuyệt đối ngay cả ở vùng bikini hay ria mép.</li><li><strong>2. Bảo vệ biểu bì:</strong> Nhiệt lạnh giúp ngăn chặn tổn thương bề mặt da, giảm thiểu tối đa tình trạng mẩn đỏ, kích ứng sau khi triệt.</li><li><strong>3. Se khít lỗ chân lông:</strong> Tác động lạnh sâu không chỉ làm dịu mà còn kích thích nang lông thu nhỏ lại, trả lại bề mặt da láng mịn không tì vết.</li></ul><h3>Sức mạnh vượt trội, Hiệu quả dài lâu</h3><p>Sự êm ái của Graci X3 không hề đánh đổi bằng hiệu quả. Máy sở hữu mức năng lượng cực đại lên đến <strong>19.8J</strong>, dễ dàng xuyên qua các lớp biểu bì để tác động trực tiếp vào hắc sắc tố ở nang lông. Hệ thống làm mát tuần hoàn ưu việt bên trong thân máy giúp thiết bị duy trì công suất tối đa liên tục mà không bị quá nhiệt, đảm bảo hiệu quả triệt lông đồng đều trên toàn bộ cơ thể.</p><p>Đây thực sự là bước đột phá giúp trải nghiệm triệt lông tại nhà trở nên chuyên nghiệp, an toàn và thoải mái như tại các không gian Spa hay Clinic thẩm mỹ cao cấp. CRÉNOT Graci X3 không chỉ là một chiếc máy triệt lông, mà là chuẩn mực mới trong chu trình chăm sóc sắc đẹp hiện đại của bạn.</p>'
      },
      'phong-cach-song-nang-dong': {
        category: "Phong Cách Sống",
        date: "28 Tháng 6, 2026",
        title: "Định hình phong cách sống năng động cùng CRÉNOT",
        excerpt: "Làm thế nào để duy trì thói quen vận động mỗi ngày? Hệ sinh thái thiết bị thông minh của chúng tôi sẽ là người bạn đồng hành 24/7 của bạn.",
        content: '<p>Sức khỏe không chỉ là đích đến, mà là một hành trình rèn luyện và thấu hiểu bản thân mỗi ngày. Để xây dựng và duy trì một phong cách sống năng động, bạn cần nhiều hơn là những quyết tâm nhất thời. Bạn cần một hệ sinh thái đồng hành, một người trợ lý thông minh luôn bên cạnh để nhắc nhở, theo dõi và khích lệ.</p><h3>Xây Dựng Thói Quen Từ Những Điều Nhỏ Nhất</h3><p>Sự thay đổi lớn luôn bắt đầu từ những hành động nhỏ nhưng kiên trì. Việc duy trì thói quen vận động mỗi ngày có thể gặp nhiều khó khăn nếu bạn không nhìn thấy sự tiến bộ của chính mình. Đó là lúc công nghệ lên tiếng.</p><ul><li><strong>1. Theo dõi dữ liệu toàn diện:</strong> Không chỉ đếm bước chân, hệ sinh thái thiết bị thông minh của CRÉNOT giúp bạn ghi nhận chi tiết từ lượng calo tiêu thụ, nhịp tim, đến chất lượng giấc ngủ.</li><li><strong>2. Phân tích chuyên sâu:</strong> Ứng dụng CRÉNOT Life tổng hợp dữ liệu từ cân thông minh, đồng hồ thể thao và các thiết bị chăm sóc cá nhân khác, vẽ nên một bức tranh toàn cảnh về tình trạng thể chất của bạn.</li><li><strong>3. Cá nhân hóa mục tiêu:</strong> Dựa trên dữ liệu thu thập được, hệ thống sẽ đề xuất các bài tập và lộ trình vận động phù hợp nhất với thể trạng hiện tại, giúp bạn tập luyện thông minh hơn thay vì chỉ tập luyện chăm chỉ.</li></ul><h3>CRÉNOT Life - Trợ Lý Sức Khỏe 24/7</h3><p>Sức mạnh thực sự của hệ sinh thái CRÉNOT nằm ở khả năng đồng bộ tức thì. Mọi nỗ lực trong phòng gym, mọi giọt mồ hôi trên đường chạy hay thậm chí là một giấc ngủ ngon đều được số hóa một cách chính xác. Biểu đồ sức khỏe hiển thị trực quan ngay trên điện thoại chính là động lực mạnh mẽ nhất để bạn không ngừng cố gắng, phá vỡ những giới hạn của ngày hôm qua.</p><p>Hãy để CRÉNOT trở thành người bạn đồng hành tin cậy, giúp bạn định hình một phong cách sống năng động, khỏe mạnh và tràn đầy năng lượng mỗi ngày!</p>'
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
        excerpt: "Not just weight, body fat and muscle mass are the keys to having a scientifically standard and healthy body from the inside.",
        content: '<p>Weight is never the only number that reflects your overall health or true physique. If you only look at a regular scale, you might mistakenly think you\'re gaining fat when in fact it\'s an increase in muscle mass after hard training. CRÉNOT Inbody smart scale with Bioelectrical Impedance Analysis (BIA) technology will accurately scan and measure 14 body metrics, helping you understand every cell inside.</p><h3>14 Core Body Metrics You Need to Know</h3><p>Here are 14 important metrics measured by the CRÉNOT Inbody smart scale that you should monitor regularly:</p><ul><li><strong>1. Weight:</strong> The total weight of the body, however not the only factor determining fatness.</li><li><strong>2. BMI:</strong> The ratio between weight and height, helping to evaluate the basic level of obesity.</li><li><strong>3. Body Fat Rate:</strong> The percentage of fat mass compared to total weight. This is the most important metric determining firmness.</li><li><strong>4. Visceral Fat:</strong> The amount of fat surrounding the internal organs. A high index warns of cardiovascular disease risk.</li><li><strong>5. Muscle Mass:</strong> The weight of the entire muscular system. More muscle helps boost metabolism.</li><li><strong>6. Bone Mass:</strong> Evaluates the condition of the skeletal system, important for preventing osteoporosis.</li><li><strong>7. Body Water:</strong> Accounts for about 50-70% of body weight, ensuring smooth metabolism.</li><li><strong>8. BMR (Basal Metabolic Rate):</strong> The minimum amount of calories the body needs to maintain daily life activities.</li><li><strong>9. Body Age:</strong> Evaluates the actual age of the body based on health metrics, rather than chronological age.</li><li><strong>10. Protein:</strong> Plays a role in building cells, muscles, and antibodies to protect the body.</li><li><strong>11. Standard Weight:</strong> Ideal weight level based on your height and age.</li><li><strong>12. Weight Control:</strong> Recommended weight level to gain or lose to reach the standard.</li><li><strong>13. Obesity Level:</strong> Evaluates fat accumulation more detailed than BMI.</li><li><strong>14. Body Score:</strong> An overall score evaluating health based on the 13 metrics above.</li></ul><h3>Easy Tracking and Syncing</h3><p>All 14 metrics will be instantly synchronized to the mobile app via Bluetooth. The app not only stores but also analyzes trends, providing warnings and advice on nutrition and exercise like a true expert.</p><p>Even the smallest change will be recorded, helping you maintain strong motivation on the path to conquering your health goals. Start the journey of transforming your physique today by understanding your own body!</p>'
      },
      'triet-long-bang-lanh': {
        category: "Beauty",
        date: "July 05, 2026",
        title: "Ice cooling hair removal: Technology changing the beauty industry",
        excerpt: "Find out why -10°C ice cooling technology provides a smooth, painless, and absolutely safe experience for all sensitive skin areas.",
        content: '<p>Traditional IPL hair removal technology has provided a convenient at-home solution for hair removal, but often comes with the obsession of stinging and burning sensations, especially in sensitive skin areas. Understanding this, CRÉNOT Graci X3 was born, featuring the most advanced Sapphire -10°C ice cooling technology, completely redefining the at-home beauty experience.</p><h3>Sapphire Ice Cooling Technology - Breakthrough in Eliminating Pain</h3><p>The heart of CRÉNOT Graci X3 lies in the flash head made of monolithic Sapphire crystal. Unlike regular glass heads, Sapphire has exceptional thermal conductivity. When operating, the surface of the head will maintain an ideal temperature of -10°C, instantly cooling the skin area just exposed to the optical pulse.</p><ul><li><strong>1. No pain or burning:</strong> The instant cooling sensation completely overwhelms the heat generated from the IPL pulse, providing a totally soothing experience even in the bikini or upper lip areas.</li><li><strong>2. Epidermis protection:</strong> Cold temperatures help prevent damage to the skin surface, minimizing redness and irritation after hair removal.</li><li><strong>3. Pore tightening:</strong> Deep cold impact not only soothes but also stimulates hair follicles to shrink, returning a flawless smooth skin surface.</li></ul><h3>Outstanding Power, Long-lasting Results</h3><p>The gentleness of Graci X3 is not a trade-off for effectiveness. The machine possesses a maximum energy level of up to <strong>19.8J</strong>, easily penetrating the epidermis to directly target melanin in the hair follicle. The superior internal circulating cooling system helps the device maintain maximum capacity continuously without overheating, ensuring even hair removal effectiveness across the entire body.</p><p>This is truly a breakthrough that makes the at-home hair removal experience as professional, safe, and comfortable as in high-end spas or cosmetic clinics. CRÉNOT Graci X3 is not just a hair removal device, but a new standard in your modern beauty care routine.</p>'
      },
      'phong-cach-song-nang-dong': {
        category: "Lifestyle",
        date: "June 28, 2026",
        title: "Shaping an active lifestyle with CRÉNOT",
        excerpt: "How to maintain a daily exercise habit? Our smart device ecosystem will be your 24/7 companion.",
        content: '<p>Health is not just a destination, but a daily journey of training and self-understanding. To build and maintain an active lifestyle, you need more than just temporary resolutions. You need a companion ecosystem, a smart assistant always by your side to remind, monitor, and encourage.</p><h3>Building Habits From the Smallest Things</h3><p>Great changes always start from small but persistent actions. Maintaining a daily exercise habit can be difficult if you don\'t see your own progress. That\'s when technology speaks up.</p><ul><li><strong>1. Comprehensive data tracking:</strong> Not just counting steps, the CRÉNOT smart device ecosystem helps you record in detail from calories burned, heart rate, to sleep quality.</li><li><strong>2. In-depth analysis:</strong> The CRÉNOT Life app aggregates data from smart scales, sports watches, and other personal care devices, painting a complete picture of your physical condition.</li><li><strong>3. Personalized goals:</strong> Based on the collected data, the system will recommend exercises and workout routines most suitable for your current condition, helping you train smarter instead of just training harder.</li></ul><h3>CRÉNOT Life - Your 24/7 Health Assistant</h3><p>The true power of the CRÉNOT ecosystem lies in its instant synchronization capability. Every effort in the gym, every drop of sweat on the running track, or even a good night\'s sleep is accurately digitized. The visual health chart displayed right on your phone is the most powerful motivation for you to keep trying, breaking yesterday\'s limits.</p><p>Let CRÉNOT become your reliable companion, helping you shape an active, healthy, and energetic lifestyle every day!</p>'
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
        excerpt: "体重だけでなく、体脂肪と筋肉量が、内側から科学的に標準的で健康的な体を持つための鍵です。",
        content: '<p>体重は全体的な健康や本当の体型を反映する唯一の数字ではありません。普通の体重計だけを見ていると、ハードなトレーニング後の筋肉量の増加を太ったと勘違いしてしまうかもしれません。BIA（生体インピーダンス法）技術を搭載したCRÉNOT Inbodyスマートスケールは、14の身体指標を正確にスキャンして測定し、内部のすべての細胞を理解するのに役立ちます。</p><h3>知っておくべき14の主要な身体指標</h3><p>定期的に監視すべき、CRÉNOT Inbodyスマートスケールによって測定される14の重要な指標は以下の通りです：</p><ul><li><strong>1. 体重 (Weight):</strong> 体の総重量ですが、肥満度を決定する唯一の要因ではありません。</li><li><strong>2. BMI:</strong> 体重と身長の比率で、基本的な肥満レベルの評価に役立ちます。</li><li><strong>3. 体脂肪率 (Body Fat Rate):</strong> 総重量に対する脂肪量の割合。これは引き締まり具合を決定する最も重要な指標です。</li><li><strong>4. 内臓脂肪 (Visceral Fat):</strong> 内臓を取り巻く脂肪量。この指数が高いと心血管疾患のリスクが警告されます。</li><li><strong>5. 筋肉量 (Muscle Mass):</strong> 筋肉系全体の重量。筋肉が多いほど代謝が向上します。</li><li><strong>6. 骨量 (Bone Mass):</strong> 骨格系の状態を評価し、骨粗鬆症の予防に重要です。</li><li><strong>7. 体水分量 (Body Water):</strong> 体重の約50〜70％を占め、スムーズな代謝を確保します。</li><li><strong>8. 基礎代謝量 (BMR):</strong> 体が日常の生命活動を維持するために必要な最小限のカロリー。</li><li><strong>9. 体年齢 (Body Age):</strong> 実際の年齢ではなく、健康指標に基づいて体の実際の年齢を評価します。</li><li><strong>10. タンパク質 (Protein):</strong> 細胞、筋肉、そして体を保護する抗体の構築に関与します。</li><li><strong>11. 標準体重 (Standard Weight):</strong> 身長と年齢に基づく理想的な体重レベル。</li><li><strong>12. 体重コントロール (Weight Control):</strong> 標準に達するために増減すべき推奨体重。</li><li><strong>13. 肥満度 (Obesity Level):</strong> BMIよりも詳細に脂肪蓄積を評価します。</li><li><strong>14. ボディスコア (Body Score):</strong> 上記の13の指標に基づいて健康を評価する総合スコア。</li></ul><h3>簡単な追跡と同期</h3><p>全14の指標は、Bluetooth経由でモバイルアプリに即座に同期されます。アプリはデータを保存するだけでなく、傾向を分析し、真の専門家のように栄養や運動に関する警告やアドバイスを提供します。</p><p>ほんのわずかな変化も記録され、健康目標を達成するための強いモチベーションを維持するのに役立ちます。自分の体を理解することで、今日から体型を変える旅を始めましょう！</p>'
      },
      'triet-long-bang-lanh': {
        category: "美容",
        date: "2026年7月05日",
        title: "氷冷脱毛：美容業界を変えるテクノロジー",
        excerpt: "なぜ-10°Cの氷冷技術が、すべての敏感な肌の領域にスムーズで痛みがなく、絶対に安全な体験を提供するのかを探ります。",
        content: '<p>従来のIPL脱毛技術は、便利な家庭用脱毛ソリューションを提供してきましたが、特に敏感肌の領域では、チクチクする痛みや火傷のような感覚への恐怖が伴うことがよくありました。これを理解し、最も高度なサファイア-10°C氷冷技術を搭載したCRÉNOT Graci X3が誕生し、家庭での美容体験を完全に再定義しました。</p><h3>サファイア氷冷技術 - 痛みをなくすブレークスルー</h3><p>CRÉNOT Graci X3の心臓部は、モノリシックサファイアクリスタルで作られたフラッシュヘッドにあります。通常のガラスヘッドとは異なり、サファイアは並外れた熱伝導性を持っています。動作中、ヘッドの表面は理想的な温度である-10°Cを維持し、光パルスにさらされたばかりの皮膚領域を瞬時に冷却します。</p><ul><li><strong>1. 痛みや火傷なし:</strong> 瞬時の冷却感がIPLパルスから発生する熱を完全に圧倒し、ビキニラインや上唇の領域でも完全に心地よい体験を提供します。</li><li><strong>2. 表皮の保護:</strong> 低温は皮膚表面の損傷を防ぎ、脱毛後の赤みや刺激を最小限に抑えます。</li><li><strong>3. 毛穴の引き締め:</strong> 深い冷感作用は肌を落ち着かせるだけでなく、毛包を刺激して収縮させ、完璧に滑らかな皮膚表面を取り戻します。</li></ul><h3>卓越したパワー、長持ちする効果</h3><p>Graci X3の優しさは効果とのトレードオフではありません。この機械は最大<strong>19.8J</strong>のエネルギーレベルを持ち、表皮を簡単に貫通して毛包のメラニンを直接標的にします。優れた内部循環冷却システムにより、デバイスは過熱することなく最大能力を継続的に維持し、全身の脱毛効果を均一に保ちます。</p><p>これは、家庭での脱毛体験を高級スパや美容クリニックのようにプロフェッショナルで安全、そして快適にする真のブレークスルーです。CRÉNOT Graci X3は単なる脱毛器ではなく、あなたの現代の美容ケアにおける新しいスタンダードです。</p>'
      },
      'phong-cach-song-nang-dong': {
        category: "ライフスタイル",
        date: "2026年6月28日",
        title: "CRÉNOTによるアクティブなライフスタイルの形成",
        excerpt: "毎日の運動習慣を維持するには？私たちのスマートデバイスエコシステムは、あなたの24時間365日の仲間になります。",
        content: '<p>健康は単なる目的地ではなく、日々のトレーニングと自己理解の旅です。アクティブなライフスタイルを構築し維持するには、一時的な決意以上のものが必要です。あなたには、常にそばにいてリマインドし、監視し、励ましてくれるスマートアシスタント、コンパニオンエコシステムが必要です。</p><h3>小さなことからの習慣構築</h3><p>大きな変化は常に小さくても持続的な行動から始まります。自分自身の進歩が見えないと、毎日の運動習慣を維持するのは難しいかもしれません。その時、テクノロジーが声を上げます。</p><ul><li><strong>1. 総合的なデータ追跡:</strong> 単なる歩数計ではなく、CRÉNOTのスマートデバイスエコシステムは、消費カロリー、心拍数から睡眠の質まで詳細に記録するのに役立ちます。</li><li><strong>2. 詳細な分析:</strong> CRÉNOT Lifeアプリは、スマートスケール、スポーツウォッチ、その他のパーソナルケアデバイスからのデータを集約し、あなたの体調の全体像を描きます。</li><li><strong>3. パーソナライズされた目標:</strong> 収集されたデータに基づいて、システムは現在の状態に最も適したエクササイズとトレーニングルーチンを推奨し、単にハードにトレーニングするのではなく、スマートにトレーニングするのを支援します。</li></ul><h3>CRÉNOT Life - あなたの24時間365日の健康アシスタント</h3><p>CRÉNOTエコシステムの真の力は、その瞬時の同期機能にあります。ジムでのあらゆる努力、ランニングトラックでの汗の一滴、さらには質の高い睡眠でさえも、正確にデジタル化されます。携帯電話に直接表示される視覚的な健康チャートは、あなたが努力し続け、昨日の限界を打ち破るための最も強力なモチベーションです。</p><p>CRÉNOTを信頼できる仲間にし、毎日アクティブで健康的でエネルギッシュなライフスタイルを形作る手助けをさせてください！</p>'
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
