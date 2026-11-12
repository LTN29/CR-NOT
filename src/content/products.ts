/**
 * Crénot product content in Vietnamese, English and Japanese.
 *
 * Facts (specs, numbers, safety notes) come from the official product pages on SIMI.vn,
 * the only place Crénot products are sold. Keep them in sync with SIMI.vn; do not add
 * numbers that SIMI.vn does not publish.
 */
import type { Lang } from './lang';

export interface QA {
  q: string;
  a: string;
}

export interface ProductText {
  category: string;
  name: string;
  /** One line used in lists, meta descriptions and the AI summary. */
  short: string;
  desc: string;
  features: string[];
  specs: Record<string, string>;
  faq: QA[];
  notes?: string[];
}

export interface ProductContent {
  id: string;
  simiUrl: string;
  /** YouTube id of the official how-to video on SIMI.vn. */
  video?: string;
  /** Background-removed product images (first one is the main image). */
  image: string;
  images: string[];
  text: Record<Lang, ProductText>;
}

const SUPABASE = 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public';
const APP_CUTOUT = `${SUPABASE}/app-content/products`;

const frames = (dir: string, prefix: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/${dir}/${prefix}-${i + 1}.webp`);

export const productContent: ProductContent[] = [
  {
    id: 's2',
    simiUrl: 'https://simi.vn/can-suc-khoe-dien-tu-thong-minh-15-chi-so-crenot-gofit-s2',
    video: 'g2qr-EsPpk0',
    image: '/images/S2/white/crenot-s2-white-1.webp',
    images: [...frames('S2/white', 'crenot-s2-white', 10), ...frames('S2/black', 'crenot-s2-black', 10)],
    text: {
      vi: {
        category: 'SỨC KHỎE',
        name: 'Cân sức khỏe điện tử Crenot Gofit S2',
        short: 'Cân thông minh BIA 4 điện cực, xem 6 chỉ số ngay trên màn hình, kết nối ứng dụng qua Bluetooth.',
        desc: 'Gofit S2 là cân sức khỏe thông minh dùng công nghệ phân tích trở kháng điện sinh học (BIA) với 4 cảm biến điện cực. Cân hiển thị ngay 6 chỉ số trên màn hình mà không cần điện thoại, và đồng bộ qua Bluetooth với ứng dụng để lưu lịch sử đo cho cả gia đình.',
        features: [
          'Công nghệ phân tích trở kháng điện sinh học BIA với 4 cảm biến điện cực',
          'Xem ngay 6 chỉ số trên màn hình: cân nặng, tỷ lệ mỡ, tỷ lệ nước, khối lượng cơ, khối lượng xương và BMI',
          'Đo 15 chỉ số qua ứng dụng, gồm mỡ nội tạng, mỡ dưới da, BMR, lượng đạm và tuổi sinh học',
          'Không giới hạn số người dùng, lưu lịch sử đo theo ngày, tháng, năm dưới dạng biểu đồ',
        ],
        specs: {
          'Model': 'Crénot Gofit S2',
          'Công nghệ đo': 'BIA, 4 cảm biến điện cực',
          'Giới hạn cân': '6–180 kg (13,2–400 lb)',
          'Đơn vị đo': 'kg / lb / st',
          'Số người dùng': 'Không giới hạn',
          'Kích thước': '280 × 280 × 24 mm',
          'Trọng lượng': '1,65 kg (không gồm pin)',
          'Pin': '3 × AAA 1,5V',
          'Chứng nhận': 'FCC, CE, RoHS',
          'Trong hộp': 'Cân, 3 pin AAA, 2 sách hướng dẫn, 1 thước dây',
        },
        faq: [
          {
            q: 'Vì sao vài lần đo đầu tiên có thể chênh lệch?',
            a: 'Khi mới nhận cân hoặc vừa di chuyển cân, nên bỏ qua 5 lần đo đầu để cân ổn định. Đặt cân trên sàn cứng, phẳng, đứng chân trần và giữ chân khô khi đo.',
          },
          {
            q: 'Trẻ em có dùng Gofit S2 được không?',
            a: 'Được, nhưng trẻ dưới 6 tuổi chỉ hiển thị cân nặng, trẻ dưới 10 tuổi hiển thị cân nặng và BMI.',
          },
          {
            q: 'Ai không nên dùng chức năng đo chỉ số cơ thể?',
            a: 'Phụ nữ mang thai không nên đo chỉ số cơ thể. Người đang dùng thiết bị cấy ghép y tế như máy tạo nhịp tim không nên dùng cân.',
          },
        ],
        notes: ['Chỉ số cơ thể dùng để theo dõi sức khỏe, không thay thế chẩn đoán của bác sĩ.'],
      },
      en: {
        category: 'HEALTH',
        name: 'Crenot Gofit S2 Smart Body Scale',
        short: 'A 4-electrode BIA smart scale that shows 6 metrics on screen and syncs with its app over Bluetooth.',
        desc: 'Gofit S2 is a smart body scale that uses bioelectrical impedance analysis (BIA) with 4 electrode sensors. It shows 6 metrics on its display without a phone and syncs over Bluetooth with its app to keep a measurement history for the whole family.',
        features: [
          'Bioelectrical impedance analysis (BIA) with 4 electrode sensors',
          '6 metrics on the display: weight, body fat, body water, muscle mass, bone mass and BMI',
          '15 metrics in the app, including visceral fat, subcutaneous fat, BMR, protein and body age',
          'Unlimited users, with daily, monthly and yearly history charts',
        ],
        specs: {
          'Model': 'Crénot Gofit S2',
          'Measurement': 'BIA, 4 electrode sensors',
          'Weight range': '6–180 kg (13.2–400 lb)',
          'Units': 'kg / lb / st',
          'Users': 'Unlimited',
          'Dimensions': '280 × 280 × 24 mm',
          'Weight': '1.65 kg (without batteries)',
          'Batteries': '3 × AAA 1.5V',
          'Certifications': 'FCC, CE, RoHS',
          'In the box': 'Scale, 3 AAA batteries, 2 manuals, 1 tape measure',
        },
        faq: [
          {
            q: 'Why can the first few readings differ?',
            a: 'After unboxing or moving the scale, skip the first 5 readings so it can settle. Place it on a hard, flat floor and step on barefoot with dry feet.',
          },
          {
            q: 'Can children use Gofit S2?',
            a: 'Yes. Children under 6 see weight only, and children under 10 see weight and BMI.',
          },
          {
            q: 'Who should not use the body composition function?',
            a: 'Pregnant women should not measure body composition. People with implanted medical devices such as a pacemaker should not use the scale.',
          },
        ],
        notes: ['Body metrics are for tracking your health and do not replace a diagnosis from a doctor.'],
      },
      jp: {
        category: 'ヘルスケア',
        name: 'Crenot Gofit S2 スマート体組成計',
        short: '4電極BIA方式のスマート体組成計。画面で6項目を表示し、Bluetoothでアプリと連携します。',
        desc: 'Gofit S2は、4つの電極センサーによる生体電気インピーダンス法（BIA）を採用したスマート体組成計です。スマートフォンがなくても画面で6項目を確認でき、Bluetoothでアプリと同期して家族全員の測定履歴を記録します。',
        features: [
          '4つの電極センサーによる生体電気インピーダンス法（BIA）',
          '画面に6項目を表示：体重、体脂肪率、体水分率、筋肉量、骨量、BMI',
          'アプリで15項目を測定：内臓脂肪、皮下脂肪、基礎代謝、タンパク質、体内年齢など',
          'ユーザー数無制限。日・月・年ごとの履歴をグラフで確認',
        ],
        specs: {
          'モデル': 'Crénot Gofit S2',
          '測定方式': 'BIA、電極センサー4個',
          '測定範囲': '6〜180 kg（13.2〜400 lb）',
          '単位': 'kg / lb / st',
          'ユーザー数': '無制限',
          'サイズ': '280 × 280 × 24 mm',
          '重量': '1.65 kg（電池を除く）',
          '電池': '単4形 1.5V × 3本',
          '認証': 'FCC、CE、RoHS',
          '同梱物': '本体、単4電池3本、取扱説明書2部、メジャー1本',
        },
        faq: [
          {
            q: '最初の数回の測定値がばらつくのはなぜですか？',
            a: '開封後や移動後は、最初の5回の測定を目安に数値が安定するまでお待ちください。硬く平らな床に置き、素足で、足が乾いた状態で乗ってください。',
          },
          {
            q: '子どもも使えますか？',
            a: '使えます。6歳未満は体重のみ、10歳未満は体重とBMIのみ表示されます。',
          },
          {
            q: '体組成の測定を控えるべき方は？',
            a: '妊娠中の方は体組成を測定しないでください。ペースメーカーなどの医療機器を体内に装着している方は使用できません。',
          },
        ],
        notes: ['体組成の数値は健康管理の目安であり、医師の診断に代わるものではありません。'],
      },
    },
  },
  {
    id: 'x6',
    simiUrl: 'https://simi.vn/can-dien-tu-suc-khoe-cao-cap-crenot-gofit-x6-pr',
    image: '/images/X6/crenot-x6-1.webp',
    images: frames('X6', 'crenot-x6', 7),
    text: {
      vi: {
        category: 'SỨC KHỎE',
        name: 'Cân sức khỏe thông minh Crenot Gofit X6 Pro',
        short: 'Cân BIA đo 17 chỉ số, màn hình màu 4,8 inch hiển thị 8 chỉ số, mặt kính phủ ITO, nhận diện FeetID™.',
        desc: 'Gofit X6 Pro là phiên bản cao cấp của Gofit S2. Cân đo 17 chỉ số cơ thể và hiển thị ngay 8 chỉ số trên màn hình màu 4,8 inch mà không cần mở ứng dụng. Mặt kính cường lực phủ ITO thay cho điện cực thép thông thường, cho bàn chân tiếp xúc trọn vẹn khi đo.',
        features: [
          'Đo 17 chỉ số cơ thể bằng công nghệ BIA với 4 cảm biến ZeroVar G-Shape®, sai số ≤ 0,05%',
          'Màn hình màu 4,8 inch hiển thị 8 chỉ số: cân nặng, tỷ lệ mỡ, BMI, tỷ lệ nước, khối lượng cơ, khối lượng xương, nhịp tim và báo cáo hình thể',
          'Nhận diện người dùng FeetID™, từ lần đo thứ hai có thể đo không cần kết nối ứng dụng',
          'Đồng bộ qua Bluetooth với ứng dụng Crénot Fitdays, không giới hạn người dùng',
        ],
        specs: {
          'Model': 'GOFIT X6 Pro',
          'Công nghệ đo': 'BIA, 4 cảm biến ZeroVar G-Shape®',
          'Số chỉ số': '17 chỉ số (8 chỉ số hiển thị trên cân)',
          'Giới hạn cân': '6–180 kg (13–400 lb)',
          'Đơn vị đo': 'kg / lb / st',
          'Màn hình': 'Màu, 4,8 inch',
          'Kích thước': '280 × 280 × 27 mm',
          'Pin': '4 × AAA 1,5V',
          'Kết nối': 'Bluetooth, ứng dụng Crénot Fitdays',
          'Số người dùng': 'Không giới hạn',
        },
        faq: [
          {
            q: 'Gofit X6 Pro khác Gofit S2 ở điểm nào?',
            a: 'X6 Pro đo 17 chỉ số, có màn hình màu 4,8 inch hiển thị 8 chỉ số kèm nhịp tim, mặt kính phủ ITO và nhận diện người dùng FeetID™. S2 đo 15 chỉ số và hiển thị 6 chỉ số trên màn hình.',
          },
          {
            q: 'Không mở ứng dụng có đo được không?',
            a: 'Được. Từ lần đo thứ hai, FeetID™ nhận ra người dùng và cân hiển thị 8 chỉ số ngay trên màn hình.',
          },
        ],
        notes: ['Chỉ số cơ thể dùng để theo dõi sức khỏe, không thay thế chẩn đoán của bác sĩ.'],
      },
      en: {
        category: 'HEALTH',
        name: 'Crenot Gofit X6 Pro Smart Body Scale',
        short: 'A BIA scale with 17 metrics, a 4.8-inch colour display showing 8 of them, ITO glass and FeetID™ recognition.',
        desc: 'Gofit X6 Pro is the premium version of Gofit S2. It measures 17 body metrics and shows 8 of them on a 4.8-inch colour display without opening the app. Its ITO-coated tempered glass replaces the usual steel electrodes so your whole foot is in contact during a reading.',
        features: [
          '17 body metrics with BIA and 4 ZeroVar G-Shape® sensors, error ≤ 0.05%',
          '4.8-inch colour display with 8 metrics: weight, body fat, BMI, body water, muscle mass, bone mass, heart rate and body shape report',
          'FeetID™ user recognition: from the second reading it measures without the app',
          'Bluetooth sync with the Crénot Fitdays app, unlimited users',
        ],
        specs: {
          'Model': 'GOFIT X6 Pro',
          'Measurement': 'BIA, 4 ZeroVar G-Shape® sensors',
          'Metrics': '17 (8 shown on the scale)',
          'Weight range': '6–180 kg (13–400 lb)',
          'Units': 'kg / lb / st',
          'Display': '4.8-inch colour',
          'Dimensions': '280 × 280 × 27 mm',
          'Batteries': '4 × AAA 1.5V',
          'Connectivity': 'Bluetooth, Crénot Fitdays app',
          'Users': 'Unlimited',
        },
        faq: [
          {
            q: 'How is Gofit X6 Pro different from Gofit S2?',
            a: 'X6 Pro measures 17 metrics, has a 4.8-inch colour display showing 8 metrics including heart rate, ITO-coated glass and FeetID™ recognition. S2 measures 15 metrics and shows 6 on its display.',
          },
          {
            q: 'Can I measure without the app?',
            a: 'Yes. From the second reading, FeetID™ recognises you and the scale shows 8 metrics on its display.',
          },
        ],
        notes: ['Body metrics are for tracking your health and do not replace a diagnosis from a doctor.'],
      },
      jp: {
        category: 'ヘルスケア',
        name: 'Crenot Gofit X6 Pro スマート体組成計',
        short: '17項目を測定するBIA体組成計。4.8インチのカラー画面に8項目を表示、ITOガラス、FeetID™認識。',
        desc: 'Gofit X6 ProはGofit S2の上位モデルです。17項目の体組成を測定し、アプリを開かなくても4.8インチのカラー画面に8項目を表示します。一般的なステンレス電極の代わりにITOコーティングの強化ガラスを採用し、足裏全体で測定できます。',
        features: [
          'BIA方式とZeroVar G-Shape®センサー4個で17項目を測定、誤差0.05%以下',
          '4.8インチのカラー画面に8項目を表示：体重、体脂肪率、BMI、体水分率、筋肉量、骨量、心拍数、体型レポート',
          'FeetID™によるユーザー認識。2回目以降はアプリなしで測定可能',
          'BluetoothでCrénot Fitdaysアプリと同期、ユーザー数無制限',
        ],
        specs: {
          'モデル': 'GOFIT X6 Pro',
          '測定方式': 'BIA、ZeroVar G-Shape®センサー4個',
          '測定項目': '17項目（本体画面に8項目）',
          '測定範囲': '6〜180 kg（13〜400 lb）',
          '単位': 'kg / lb / st',
          'ディスプレイ': '4.8インチ カラー',
          'サイズ': '280 × 280 × 27 mm',
          '電池': '単4形 1.5V × 4本',
          '接続': 'Bluetooth、Crénot Fitdaysアプリ',
          'ユーザー数': '無制限',
        },
        faq: [
          {
            q: 'Gofit X6 ProとGofit S2の違いは？',
            a: 'X6 Proは17項目を測定し、心拍数を含む8項目を4.8インチのカラー画面に表示します。ITOコーティングガラスとFeetID™認識も搭載しています。S2は15項目を測定し、画面には6項目を表示します。',
          },
          {
            q: 'アプリなしでも測定できますか？',
            a: 'できます。2回目以降はFeetID™がユーザーを認識し、本体画面に8項目を表示します。',
          },
        ],
        notes: ['体組成の数値は健康管理の目安であり、医師の診断に代わるものではありません。'],
      },
    },
  },
  {
    id: 'i8',
    simiUrl: 'https://simi.vn/can-dien-tu-suc-khoe-crenot-inbody-i8',
    video: 'ToivpfVfTu0',
    image: '/images/i8/white/crenot-i8-white-1.webp',
    images: frames('i8/white', 'crenot-i8-white', 8),
    text: {
      vi: {
        category: 'SỨC KHỎE',
        name: 'Cân sức khỏe Crenot inBody i8',
        short: 'Cân 8 điện cực đo toàn thân bằng PureBIA tần số kép, phân tích 31 chỉ số và từng bộ phận cơ thể.',
        desc: 'inBody i8 là cân sức khỏe 8 điện cực của Crénot: 4 điện cực ở mặt cân và 4 điện cực ở tay cầm, nên dòng đo đi qua cả tay, chân và thân thay vì chỉ nửa dưới cơ thể. Cân phân tích 31 chỉ số, báo cáo riêng từng bộ phận và hiển thị kết quả trên màn hình LCD của tay cầm.',
        features: [
          'Công nghệ đo PureBIA tần số kép với 8 điện cực',
          'Phân tích 31 chỉ số cơ thể, kèm chỉ số từng bộ phận: tay, chân, thân',
          'Tay cầm dây rút có màn hình LCD 64 × 109 mm',
          'Tự nhận diện người dùng và đo được ở chế độ offline, không giới hạn người dùng',
        ],
        specs: {
          'Model': 'inBody i8',
          'Công nghệ đo': 'PureBIA tần số kép, 8 điện cực',
          'Số chỉ số': '31 chỉ số, phân tích từng bộ phận',
          'Kích thước': '310 × 355 × 50 mm',
          'Màn hình LCD': '64 × 109 mm (trên tay cầm)',
          'Giới hạn cân': '2–180 kg (4–396 lb)',
          'Độ chia': '0,1 kg / 0,2 lb',
          'Đơn vị đo': 'kg / lb / st',
          'Nguồn điện': 'Pin lithium',
          'Mặt cân': 'Kính cường lực',
        },
        faq: [
          {
            q: 'Vì sao cân 8 điện cực đo chính xác hơn cân 4 điện cực?',
            a: 'Cân 4 điện cực chỉ cho dòng đo đi qua hai chân nên phải ước tính phần thân trên. inBody i8 có thêm 4 điện cực ở tay cầm, đo được cả tay, chân và thân, nên phân tích được từng bộ phận.',
          },
          {
            q: 'Không có điện thoại có dùng được không?',
            a: 'Được. Cân tự nhận diện người dùng và đo ở chế độ offline; kết quả hiển thị trên màn hình của tay cầm.',
          },
        ],
        notes: [
          'Chỉ số cơ thể dùng để theo dõi sức khỏe, không thay thế chẩn đoán của bác sĩ.',
          'Người đang dùng thiết bị cấy ghép y tế như máy tạo nhịp tim không nên dùng cân đo trở kháng điện sinh học.',
        ],
      },
      en: {
        category: 'HEALTH',
        name: 'Crenot inBody i8 Body Composition Scale',
        short: 'An 8-electrode full-body scale with dual-frequency PureBIA, analysing 31 metrics and each body segment.',
        desc: 'inBody i8 is Crénot’s 8-electrode body composition scale: 4 electrodes on the platform and 4 on the handle, so the measuring current passes through your arms, legs and trunk instead of only the lower body. It analyses 31 metrics, reports each body segment and shows results on the LCD in the handle.',
        features: [
          'Dual-frequency PureBIA measurement with 8 electrodes',
          '31 body metrics plus segmental results for arms, legs and trunk',
          'Retractable handle with a 64 × 109 mm LCD',
          'Automatic user recognition and offline measuring, unlimited users',
        ],
        specs: {
          'Model': 'inBody i8',
          'Measurement': 'Dual-frequency PureBIA, 8 electrodes',
          'Metrics': '31, with segmental analysis',
          'Dimensions': '310 × 355 × 50 mm',
          'LCD': '64 × 109 mm (on the handle)',
          'Weight range': '2–180 kg (4–396 lb)',
          'Graduation': '0.1 kg / 0.2 lb',
          'Units': 'kg / lb / st',
          'Power': 'Lithium battery',
          'Platform': 'Tempered glass',
        },
        faq: [
          {
            q: 'Why is an 8-electrode scale more accurate than a 4-electrode one?',
            a: 'A 4-electrode scale only sends current through the legs and has to estimate the upper body. inBody i8 adds 4 electrodes on the handle, measuring arms, legs and trunk, so it can analyse each segment.',
          },
          {
            q: 'Can I use it without a phone?',
            a: 'Yes. The scale recognises users and measures offline; results appear on the handle display.',
          },
        ],
        notes: [
          'Body metrics are for tracking your health and do not replace a diagnosis from a doctor.',
          'People with implanted medical devices such as a pacemaker should not use bioelectrical impedance scales.',
        ],
      },
      jp: {
        category: 'ヘルスケア',
        name: 'Crenot inBody i8 体組成計',
        short: '8電極で全身を測るデュアル周波数PureBIA体組成計。31項目と部位別に分析します。',
        desc: 'inBody i8は、本体に4つ、ハンドルに4つの電極を備えたCrénotの8電極体組成計です。電流が下半身だけでなく腕・脚・体幹を通るため、31項目の分析と部位別のレポートができ、結果はハンドルのLCDに表示されます。',
        features: [
          '8電極・デュアル周波数のPureBIA測定',
          '31項目の体組成と、腕・脚・体幹の部位別分析',
          '64 × 109 mmのLCDを備えた引き出し式ハンドル',
          'ユーザー自動認識とオフライン測定、ユーザー数無制限',
        ],
        specs: {
          'モデル': 'inBody i8',
          '測定方式': 'デュアル周波数PureBIA、8電極',
          '測定項目': '31項目、部位別分析',
          'サイズ': '310 × 355 × 50 mm',
          'LCD': '64 × 109 mm（ハンドル）',
          '測定範囲': '2〜180 kg（4〜396 lb）',
          '最小表示': '0.1 kg / 0.2 lb',
          '単位': 'kg / lb / st',
          '電源': 'リチウム電池',
          '天板': '強化ガラス',
        },
        faq: [
          {
            q: '8電極は4電極よりなぜ正確なのですか？',
            a: '4電極の体組成計は電流が両脚しか通らず、上半身は推定になります。inBody i8はハンドルに4電極を追加し、腕・脚・体幹を測定できるため部位別に分析できます。',
          },
          {
            q: 'スマートフォンがなくても使えますか？',
            a: '使えます。ユーザーを自動認識してオフラインで測定し、結果はハンドルの画面に表示されます。',
          },
        ],
        notes: [
          '体組成の数値は健康管理の目安であり、医師の診断に代わるものではありません。',
          'ペースメーカーなどの医療機器を体内に装着している方は、生体電気インピーダンス方式の体組成計を使用しないでください。',
        ],
      },
    },
  },
  {
    id: 'x3',
    simiUrl: 'https://simi.vn/may-triet-long-bang-lanh-tre-hoa-da-crenot-graci-x3',
    video: 'FqQ1-uZ-EA8',
    image: '/images/x3/crenot-x3-1.webp',
    images: frames('x3', 'crenot-x3', 4),
    text: {
      vi: {
        category: 'LÀM ĐẸP',
        name: 'Máy triệt lông IPL Crenot Graci X3',
        short: 'Máy triệt lông IPL tại nhà có làm mát Ice Compress, 999.999 xung, 9 mức cường độ.',
        desc: 'Graci X3 là máy triệt lông cầm tay dùng ánh sáng xung cường độ cao (IPL) kết hợp công nghệ làm mát Infinity Ice Compress để dịu da và hạn chế cảm giác rát, kể cả ở vùng mặt và bikini. Máy có 999.999 xung và 9 mức cường độ, kèm chế độ trẻ hóa da.',
        features: [
          'Công nghệ IPL kết hợp làm mát Infinity Ice Compress, hạn chế đau rát và kích ứng',
          '999.999 xung ánh sáng, tương đương khoảng 10 năm sử dụng',
          '9 mức cường độ cho các vùng da và mục đích khác nhau',
          'Chế độ tự động hoặc bắn thủ công, màn hình LCD dễ điều chỉnh',
        ],
        specs: {
          'Model': 'Graci X3',
          'Công nghệ': 'IPL kết hợp làm mát Infinity Ice Compress',
          'Số xung': '999.999 xung',
          'Mức cường độ': '9 mức',
          'Điện áp đầu vào': '100–240V',
          'Điện áp đầu ra': '24V, 2A, 48W',
          'Kích thước máy': '203 × 66 × 42 mm',
          'Trọng lượng máy': '280 g',
          'Trọng lượng bộ sản phẩm': '1,1 kg',
        },
        faq: [
          {
            q: 'Dùng Graci X3 như thế nào cho đúng?',
            a: 'Cạo lông và làm sạch vùng da, đeo kính bảo vệ mắt, chọn chế độ và mức cường độ, rồi áp đầu triệt vuông góc với da. Lần đầu nên thử trên một vùng da nhỏ ở mức thấp nhất.',
          },
          {
            q: 'Sau khi triệt cần chăm sóc da thế nào?',
            a: 'Sau khoảng 20 phút có thể thoa kem dưỡng ẩm. Nếu da khó chịu, chườm lạnh 30–60 phút đến khi hết cảm giác rát.',
          },
          {
            q: 'Có dùng máy khi tắm được không?',
            a: 'Không. Máy không chống nước, cần dùng và bảo quản ở nơi khô ráo.',
          },
        ],
        notes: [
          'Đọc kỹ hướng dẫn sử dụng trước khi dùng.',
          'Luôn đeo kính bảo vệ mắt khi máy hoạt động.',
        ],
      },
      en: {
        category: 'BEAUTY',
        name: 'Crenot Graci X3 IPL Hair Removal Device',
        short: 'An at-home IPL hair removal device with Ice Compress cooling, 999,999 flashes and 9 intensity levels.',
        desc: 'Graci X3 is a handheld hair removal device that combines intense pulsed light (IPL) with Infinity Ice Compress cooling to soothe the skin and limit stinging, even on the face and bikini line. It offers 999,999 flashes, 9 intensity levels and a skin rejuvenation mode.',
        features: [
          'IPL with Infinity Ice Compress cooling to limit stinging and irritation',
          '999,999 flashes, about 10 years of use',
          '9 intensity levels for different areas and purposes',
          'Automatic or manual flash mode with an easy-to-read LCD',
        ],
        specs: {
          'Model': 'Graci X3',
          'Technology': 'IPL with Infinity Ice Compress cooling',
          'Flashes': '999,999',
          'Intensity levels': '9',
          'Input': '100–240V',
          'Output': '24V, 2A, 48W',
          'Device size': '203 × 66 × 42 mm',
          'Device weight': '280 g',
          'Set weight': '1.1 kg',
        },
        faq: [
          {
            q: 'How do I use Graci X3 correctly?',
            a: 'Shave and clean the area, wear the protective glasses, choose a mode and intensity, then hold the window flat against the skin. On first use, test a small patch at the lowest level.',
          },
          {
            q: 'How should I care for my skin afterwards?',
            a: 'After about 20 minutes you can apply a moisturiser. If the skin feels uncomfortable, apply a cold compress for 30–60 minutes.',
          },
          {
            q: 'Can I use it in the shower?',
            a: 'No. The device is not waterproof; use and store it in a dry place.',
          },
        ],
        notes: ['Read the manual carefully before use.', 'Always wear the protective glasses while the device is on.'],
      },
      jp: {
        category: 'ビューティー',
        name: 'Crenot Graci X3 IPL光美容脱毛器',
        short: 'アイスコンプレス冷却付きの家庭用IPL脱毛器。999,999回照射、9段階の強さ。',
        desc: 'Graci X3は、IPL（インテンス・パルス・ライト）とInfinity Ice Compress冷却を組み合わせたハンディ脱毛器です。肌をクールダウンしてヒリつきを抑え、顔やVラインにも使えます。照射回数999,999回、9段階の強さ、肌ケアモードを備えています。',
        features: [
          'IPLとInfinity Ice Compress冷却でヒリつきと刺激を抑える',
          '999,999回の照射、約10年分の使用量',
          '部位や目的に合わせて選べる9段階の強さ',
          'オート／手動の照射モード、見やすいLCD画面',
        ],
        specs: {
          'モデル': 'Graci X3',
          '方式': 'IPL＋Infinity Ice Compress冷却',
          '照射回数': '999,999回',
          '強さ': '9段階',
          '入力電圧': '100〜240V',
          '出力': '24V、2A、48W',
          '本体サイズ': '203 × 66 × 42 mm',
          '本体重量': '280 g',
          'セット重量': '1.1 kg',
        },
        faq: [
          {
            q: '正しい使い方は？',
            a: 'ムダ毛を剃って肌を清潔にし、保護メガネをかけ、モードと強さを選んで照射口を肌に垂直に当てます。初回は狭い範囲で、最も弱いレベルから試してください。',
          },
          {
            q: '照射後のケアは？',
            a: '約20分後に保湿クリームを塗れます。違和感がある場合は30〜60分ほど冷やしてください。',
          },
          {
            q: 'お風呂で使えますか？',
            a: '使えません。防水ではないため、乾いた場所で使用・保管してください。',
          },
        ],
        notes: ['ご使用前に取扱説明書をよくお読みください。', '使用中は必ず保護メガネを着用してください。'],
      },
    },
  },
  {
    id: 'z6',
    simiUrl: 'https://simi.vn/sung-massage-crenot-thunder-z6',
    video: 'XtDHCOOALWk',
    image: `${APP_CUTOUT}/crenot-z6/crenot-z6-cutout.webp`,
    images: [`${APP_CUTOUT}/crenot-z6/crenot-z6-cutout.webp`],
    text: {
      vi: {
        category: 'PHỤC HỒI CƠ BẮP',
        name: 'Máy massage cầm tay Crenot Thunder Z6',
        short: 'Máy massage cầm tay động cơ không chổi than, biên độ 12 mm, 9 cấp độ, góc đầu điều chỉnh 60°.',
        desc: 'Thunder Z6 là máy massage cầm tay dùng động cơ không chổi than với biên độ 12 mm, tác động sâu vào nhóm cơ căng cứng để thư giãn và phục hồi sau tập luyện. Thân máy hình tam giác TriForce giảm áp lực lên cổ tay, đầu massage điều chỉnh góc 60° để chạm đúng vùng cần trị liệu.',
        features: [
          'Động cơ không chổi than, biên độ massage 12 mm',
          'Góc massage điều chỉnh 60° để chạm đúng nhóm cơ',
          'Cảm biến tự tăng lực ở vùng cơ căng, màn hình LED cảm ứng',
          '9 cấp độ và 4 đầu massage chất liệu Polyurethane',
        ],
        specs: {
          'Model': 'Crenot Thunder Z6',
          'Động cơ': 'Không chổi than',
          'Biên độ': '12 mm',
          'Tần số': '3500 ± 200 vòng/phút',
          'Cấp độ': '9',
          'Đầu massage': '4 đầu Polyurethane',
          'Điện áp': '5V',
          'Công suất': '25W',
          'Trọng lượng': '0,86 kg',
          'Pin': 'Lithium-ion sạc lại',
        },
        faq: [
          {
            q: 'Biên độ 12 mm có ý nghĩa gì?',
            a: 'Biên độ là quãng đường đầu massage di chuyển mỗi nhịp. Biên độ càng lớn, lực tác động càng sâu vào cơ, giúp giảm căng cứng sau tập luyện.',
          },
          {
            q: 'Ai cần hỏi ý kiến bác sĩ trước khi dùng?',
            a: 'Phụ nữ mang thai, trẻ em, người có bệnh tim mạch hoặc dùng máy trợ tim, người bị gãy xương, loãng xương, có vấn đề về khớp, cột sống hoặc có khối u ác tính.',
          },
        ],
        notes: ['Không dùng máy trực tiếp lên xương, khớp, đầu, cổ trước hoặc vùng da bị thương.'],
      },
      en: {
        category: 'RECOVERY',
        name: 'Crenot Thunder Z6 Massage Gun',
        short: 'A brushless handheld massage gun with 12 mm amplitude, 9 levels and a 60° adjustable head.',
        desc: 'Thunder Z6 is a handheld massage gun with a brushless motor and 12 mm amplitude that reaches deep into tight muscles for relaxation and post-workout recovery. Its triangular TriForce body takes pressure off the wrist, and the head tilts through 60° to reach the right spot.',
        features: [
          'Brushless motor with 12 mm amplitude',
          '60° adjustable head angle to target each muscle group',
          'Smart sensor that adds force on tight muscles, touch LED display',
          '9 levels and 4 polyurethane heads',
        ],
        specs: {
          'Model': 'Crenot Thunder Z6',
          'Motor': 'Brushless',
          'Amplitude': '12 mm',
          'Speed': '3,500 ± 200 RPM',
          'Levels': '9',
          'Heads': '4 polyurethane heads',
          'Voltage': '5V',
          'Power': '25W',
          'Weight': '0.86 kg',
          'Battery': 'Rechargeable lithium-ion',
        },
        faq: [
          {
            q: 'What does 12 mm amplitude mean?',
            a: 'Amplitude is how far the head travels with each stroke. A larger amplitude reaches deeper into the muscle, helping relieve tightness after training.',
          },
          {
            q: 'Who should ask a doctor before using it?',
            a: 'Pregnant women, children, people with heart conditions or a pacemaker, and people with fractures, osteoporosis, joint or spine problems or malignant tumours.',
          },
        ],
        notes: ['Do not use directly on bones, joints, the head, the front of the neck or injured skin.'],
      },
      jp: {
        category: 'リカバリー',
        name: 'Crenot Thunder Z6 ハンディマッサージガン',
        short: 'ブラシレスモーター、振幅12mm、9段階、60°角度調整ヘッドのハンディマッサージガン。',
        desc: 'Thunder Z6は、ブラシレスモーターと振幅12mmで凝り固まった筋肉の奥まで届くハンディマッサージガンです。リラックスやトレーニング後のケアに使えます。三角形のTriForceボディが手首の負担を減らし、ヘッドは60°まで角度を変えられます。',
        features: [
          'ブラシレスモーター、振幅12mm',
          '狙った筋肉に当てやすい60°角度調整ヘッド',
          '筋肉の張りに合わせて力を強めるセンサー、タッチ式LED画面',
          '9段階の強さとポリウレタン製アタッチメント4種',
        ],
        specs: {
          'モデル': 'Crenot Thunder Z6',
          'モーター': 'ブラシレス',
          '振幅': '12 mm',
          '回転数': '3,500 ± 200 RPM',
          '強さ': '9段階',
          'アタッチメント': 'ポリウレタン製4種',
          '電圧': '5V',
          '消費電力': '25W',
          '重量': '0.86 kg',
          'バッテリー': '充電式リチウムイオン',
        },
        faq: [
          {
            q: '振幅12mmとは？',
            a: '振幅はヘッドが1回に動く距離です。振幅が大きいほど筋肉の深部まで届き、トレーニング後の張りをほぐしやすくなります。',
          },
          {
            q: '使用前に医師に相談すべき方は？',
            a: '妊娠中の方、子ども、心臓疾患のある方やペースメーカーを使用中の方、骨折・骨粗しょう症・関節や脊椎に問題のある方、悪性腫瘍のある方です。',
          },
        ],
        notes: ['骨、関節、頭部、首の前側、傷のある肌に直接当てないでください。'],
      },
    },
  },
  {
    id: 'x8',
    simiUrl: 'https://simi.vn/dung-cu-tap-luyen-gap-gon-crenot-spin-x8',
    video: 'Az70-Jw-PiU',
    image: `${APP_CUTOUT}/crenot-x8/crenot-x8-cutout.webp`,
    images: [`${APP_CUTOUT}/crenot-x8/crenot-x8-cutout.webp`],
    text: {
      vi: {
        category: 'LUYỆN TẬP TẠI NHÀ',
        name: 'Xe đạp tập gấp gọn Crenot Spin X8',
        short: 'Dụng cụ đạp tập gấp gọn cho tay và chân, chỉnh lực, màn hình LCD, đế chống trượt.',
        desc: 'Spin X8 là dụng cụ đạp tập mini gấp gọn, đặt dưới bàn làm việc hay cạnh ghế sofa để vận động tay hoặc chân mà không cần đến phòng tập. Máy chạy êm, chỉnh được cường độ và có màn hình LCD theo dõi thời gian, calo, số vòng đạp và quãng đường.',
        features: [
          'Gấp gọn trong vài giây, dễ cất giữ và mang theo',
          'Tập được cả tay và chân, bàn đạp điều chỉnh vừa kích cỡ',
          'Tùy chỉnh cường độ theo nhu cầu từng người',
          'Màn hình LCD: thời gian, calo tiêu hao, số vòng đạp, quãng đường',
        ],
        specs: {
          'Model': 'Spin X8',
          'Màu sắc': 'Vàng / Đen',
          'Chất liệu': 'Thép không gỉ và nhựa ABS',
          'Kích thước': '40 × 47 × 28 cm',
          'Màn hình': 'LCD: thời gian, calo, số vòng, quãng đường',
        },
        faq: [
          {
            q: 'Spin X8 phù hợp với ai?',
            a: 'Người bận rộn muốn vận động nhẹ tại nhà hoặc văn phòng, người lớn tuổi cần duy trì vận động tay chân. Người đang điều trị chấn thương nên hỏi bác sĩ hoặc chuyên viên vật lý trị liệu về cường độ phù hợp.',
          },
          {
            q: 'Tập tay được không?',
            a: 'Được. Đặt máy lên mặt bàn và đạp bằng tay; bàn đạp điều chỉnh được để vừa tay hoặc chân.',
          },
        ],
      },
      en: {
        category: 'HOME FITNESS',
        name: 'Crenot Spin X8 Foldable Pedal Exerciser',
        short: 'A foldable arm and leg pedal exerciser with adjustable resistance, LCD and anti-slip base.',
        desc: 'Spin X8 is a foldable mini pedal exerciser you can place under a desk or next to the sofa to move your legs or arms without going to the gym. It runs quietly, has adjustable resistance and an LCD that tracks time, calories, rotations and distance.',
        features: [
          'Folds in seconds for easy storage and carrying',
          'Works for both arms and legs, with adjustable pedals',
          'Adjustable resistance for each person’s needs',
          'LCD showing time, calories burned, rotations and distance',
        ],
        specs: {
          'Model': 'Spin X8',
          'Colour': 'Yellow / Black',
          'Material': 'Stainless steel and ABS',
          'Dimensions': '40 × 47 × 28 cm',
          'Display': 'LCD: time, calories, rotations, distance',
        },
        faq: [
          {
            q: 'Who is Spin X8 for?',
            a: 'Busy people who want light exercise at home or at the office, and older adults keeping their arms and legs active. If you are recovering from an injury, ask your doctor or physiotherapist about the right intensity.',
          },
          {
            q: 'Can I train my arms?',
            a: 'Yes. Put it on a table and pedal with your hands; the pedals adjust to fit hands or feet.',
          },
        ],
      },
      jp: {
        category: 'ホームフィットネス',
        name: 'Crenot Spin X8 折りたたみペダル運動器',
        short: '腕にも脚にも使える折りたたみ式ペダル運動器。負荷調整、LCD、滑り止め付き。',
        desc: 'Spin X8は折りたたみ式のミニペダル運動器です。机の下やソファの横に置いて、ジムに行かなくても脚や腕を動かせます。静かに動き、負荷を調整でき、LCDで時間・消費カロリー・回転数・距離を確認できます。',
        features: [
          '数秒で折りたためて収納や持ち運びが簡単',
          '腕にも脚にも使え、ペダルはサイズ調整可能',
          '一人ひとりに合わせて負荷を調整',
          'LCDで時間、消費カロリー、回転数、距離を表示',
        ],
        specs: {
          'モデル': 'Spin X8',
          'カラー': 'イエロー／ブラック',
          '素材': 'ステンレススチール、ABS樹脂',
          'サイズ': '40 × 47 × 28 cm',
          'ディスプレイ': 'LCD：時間、カロリー、回転数、距離',
        },
        faq: [
          {
            q: 'どんな人に向いていますか？',
            a: '自宅やオフィスで軽く体を動かしたい忙しい方や、手足の運動を続けたい高齢の方に向いています。けがの治療中の方は、適切な負荷について医師や理学療法士に相談してください。',
          },
          {
            q: '腕のトレーニングにも使えますか？',
            a: '使えます。テーブルに置いて手でこいでください。ペダルは手や足に合わせて調整できます。',
          },
        ],
      },
    },
  },
];

export function getProductContent(id: string) {
  return productContent.find((p) => p.id === id);
}
