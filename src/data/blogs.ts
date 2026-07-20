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
    content: '<p>Cân nặng không bao giờ là con số duy nhất phản ánh toàn bộ sức khỏe hay vóc dáng thực sự của bạn. Nếu chỉ nhìn vào chiếc cân thông thường, bạn có thể lầm tưởng rằng mình đang béo lên trong khi thực chất đó là sự gia tăng của khối lượng cơ sau quá trình tập luyện. Cân thông minh CRÉNOT Inbody với công nghệ phân tích trở kháng điện sinh học (BIA) sẽ quét chính xác và đo lường 14 chỉ số cơ thể, giúp bạn hiểu rõ từng tế bào bên trong.</p><h3>14 Chỉ số cơ thể cốt lõi bạn cần nắm rõ</h3><p>Dưới đây là 14 chỉ số quan trọng được đo lường bởi cân thông minh CRÉNOT Inbody mà bạn cần theo dõi thường xuyên:</p><ul><li><strong>1. Cân nặng (Weight):</strong> Trọng lượng tổng thể của cơ thể, tuy nhiên không phải là yếu tố duy nhất quyết định độ béo gầy.</li><li><strong>2. Chỉ số BMI:</strong> Tỷ lệ giữa cân nặng và chiều cao, giúp đánh giá mức độ gầy béo cơ bản.</li><li><strong>3. Tỷ lệ mỡ cơ thể (Body Fat Rate):</strong> Phần trăm khối lượng mỡ so với tổng trọng lượng. Đây là chỉ số quan trọng nhất quyết định độ săn chắc.</li><li><strong>4. Mỡ nội tạng (Visceral Fat):</strong> Lượng mỡ bao quanh các cơ quan nội tạng. Chỉ số này cao cảnh báo nguy cơ bệnh tim mạch.</li><li><strong>5. Khối lượng cơ (Muscle Mass):</strong> Trọng lượng của toàn bộ hệ thống cơ bắp. Cơ bắp nhiều giúp tăng cường trao đổi chất.</li><li><strong>6. Khối lượng xương (Bone Mass):</strong> Đánh giá tình trạng hệ xương khớp, quan trọng để phòng ngừa loãng xương.</li><li><strong>7. Lượng nước cơ thể (Body Water):</strong> Chiếm khoảng 50-70% trọng lượng cơ thể, đảm bảo trao đổi chất trơn tru.</li><li><strong>8. Tỷ lệ trao đổi chất cơ bản (BMR):</strong> Lượng calo tối thiểu cơ thể cần để duy trì hoạt động sống trong ngày.</li><li><strong>9. Tuổi sinh học (Body Age):</strong> Đánh giá độ tuổi thực tế của cơ thể dựa trên các chỉ số sức khỏe, thay vì tuổi thật.</li><li><strong>10. Lượng Protein:</strong> Đóng vai trò xây dựng tế bào, cơ bắp và kháng thể bảo vệ cơ thể.</li><li><strong>11. Cân nặng tiêu chuẩn:</strong> Mức cân nặng lý tưởng dựa trên chiều cao và độ tuổi của bạn.</li><li><strong>12. Kiểm soát cân nặng:</strong> Khuyến nghị mức cân nặng cần tăng hoặc giảm để đạt tiêu chuẩn.</li><li><strong>13. Mức độ béo phì:</strong> Đánh giá chi tiết hơn BMI về tình trạng tích mỡ của cơ thể.</li><li><strong>14. Điểm hình thể (Body Score):</strong> Điểm số tổng quát đánh giá sức khỏe dựa trên 13 chỉ số trên.</li></ul><h3>Theo dõi và Đồng bộ Dễ dàng</h3><p>Toàn bộ 14 chỉ số này sẽ được đồng bộ ngay lập tức vào ứng dụng trên điện thoại qua Bluetooth. Ứng dụng không chỉ lưu trữ mà còn phân tích xu hướng, đưa ra cảnh báo và lời khuyên về chế độ dinh dưỡng, tập luyện như một chuyên gia thực thụ.</p><p>Sự thay đổi dù là nhỏ nhất sẽ được ghi nhận, giúp bạn duy trì động lực mãnh liệt trên con đường chinh phục mục tiêu sức khỏe. Hãy bắt đầu hành trình thay đổi vóc dáng ngay hôm nay bằng việc thấu hiểu cơ thể mình!</p>',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    category: 'Sức Khỏe',
    date: '10 Tháng 7, 2026',
    author: 'CRÉNOT Health Team'
  },
  {
    id: 'triet-long-bang-lanh',
    title: 'Triệt lông băng lạnh: Công nghệ thay đổi ngành làm đẹp',
    excerpt: 'Tìm hiểu tại sao công nghệ triệt lạnh -10 độ C lại mang đến trải nghiệm êm ái, không đau rát và an toàn tuyệt đối cho mọi vùng da nhạy cảm.',
    content: '<p>Công nghệ triệt lông IPL truyền thống đã mang đến giải pháp loại bỏ vi-ô-lông tại nhà tiện lợi, nhưng thường đi kèm với nỗi ám ảnh về cảm giác châm chích, bỏng rát, đặc biệt ở các vùng da nhạy cảm. Thấu hiểu điều đó, CRÉNOT Graci X3 ra đời, mang theo công nghệ triệt lông băng lạnh Sapphire -10 độ C tiên tiến bậc nhất, định nghĩa lại hoàn toàn trải nghiệm làm đẹp tại gia.</p><h3>Công nghệ Băng Lạnh Sapphire - Đột phá loại bỏ đau rát</h3><p>Trái tim của CRÉNOT Graci X3 nằm ở đầu phát xung được làm từ tinh thể Sapphire nguyên khối. Khác với các đầu kính thông thường, Sapphire có khả năng truyền dẫn nhiệt lạnh cực kỳ xuất sắc. Khi máy hoạt động, bề mặt đầu phát sẽ duy trì ở mức nhiệt độ lý tưởng là -10 độ C, làm mát ngay lập tức vùng da vừa được chiếu xung quang học.</p><ul><li><strong>1. Không đau rát:</strong> Cảm giác mát lạnh tức thì lấn át hoàn toàn lượng nhiệt sinh ra từ xung IPL, mang lại trải nghiệm êm ái tuyệt đối ngay cả ở vùng bikini hay ria mép.</li><li><strong>2. Bảo vệ biểu bì:</strong> Nhiệt lạnh giúp ngăn chặn tổn thương bề mặt da, giảm thiểu tối đa tình trạng mẩn đỏ, kích ứng sau khi triệt.</li><li><strong>3. Se khít lỗ chân lông:</strong> Tác động lạnh sâu không chỉ làm dịu mà còn kích thích nang lông thu nhỏ lại, trả lại bề mặt da láng mịn không tì vết.</li></ul><h3>Sức mạnh vượt trội, Hiệu quả dài lâu</h3><p>Sự êm ái của Graci X3 không hề đánh đổi bằng hiệu quả. Máy sở hữu mức năng lượng cực đại lên đến <strong>19.8J</strong>, dễ dàng xuyên qua các lớp biểu bì để tác động trực tiếp vào hắc sắc tố ở nang lông. Hệ thống làm mát tuần hoàn ưu việt bên trong thân máy giúp thiết bị duy trì công suất tối đa liên tục mà không bị quá nhiệt, đảm bảo hiệu quả triệt lông đồng đều trên toàn bộ cơ thể.</p><p>Đây thực sự là bước đột phá giúp trải nghiệm triệt lông tại nhà trở nên chuyên nghiệp, an toàn và thoải mái như tại các không gian Spa hay Clinic thẩm mỹ cao cấp. CRÉNOT Graci X3 không chỉ là một chiếc máy triệt lông, mà là chuẩn mực mới trong chu trình chăm sóc sắc đẹp hiện đại của bạn.</p>',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80',
    category: 'Làm Đẹp',
    date: '05 Tháng 7, 2026',
    author: 'CRÉNOT Beauty Team'
  },
  {
    id: 'phong-cach-song-nang-dong',
    title: 'Định hình phong cách sống năng động cùng CRÉNOT',
    excerpt: 'Làm thế nào để duy trì thói quen vận động mỗi ngày? Hệ sinh thái thiết bị thông minh của chúng tôi sẽ là người bạn đồng hành 24/7 của bạn.',
    content: '<p>Sức khỏe không chỉ là đích đến, mà là một hành trình rèn luyện và thấu hiểu bản thân mỗi ngày. Để xây dựng và duy trì một phong cách sống năng động, bạn cần nhiều hơn là những quyết tâm nhất thời. Bạn cần một hệ sinh thái đồng hành, một người trợ lý thông minh luôn bên cạnh để nhắc nhở, theo dõi và khích lệ.</p><h3>Xây Dựng Thói Quen Từ Những Điều Nhỏ Nhất</h3><p>Sự thay đổi lớn luôn bắt đầu từ những hành động nhỏ nhưng kiên trì. Việc duy trì thói quen vận động mỗi ngày có thể gặp nhiều khó khăn nếu bạn không nhìn thấy sự tiến bộ của chính mình. Đó là lúc công nghệ lên tiếng.</p><ul><li><strong>1. Theo dõi dữ liệu toàn diện:</strong> Không chỉ đếm bước chân, hệ sinh thái thiết bị thông minh của CRÉNOT giúp bạn ghi nhận chi tiết từ lượng calo tiêu thụ, nhịp tim, đến chất lượng giấc ngủ.</li><li><strong>2. Phân tích chuyên sâu:</strong> Ứng dụng CRÉNOT Life tổng hợp dữ liệu từ cân thông minh, đồng hồ thể thao và các thiết bị chăm sóc cá nhân khác, vẽ nên một bức tranh toàn cảnh về tình trạng thể chất của bạn.</li><li><strong>3. Cá nhân hóa mục tiêu:</strong> Dựa trên dữ liệu thu thập được, hệ thống sẽ đề xuất các bài tập và lộ trình vận động phù hợp nhất với thể trạng hiện tại, giúp bạn tập luyện thông minh hơn thay vì chỉ tập luyện chăm chỉ.</li></ul><h3>CRÉNOT Life - Trợ Lý Sức Khỏe 24/7</h3><p>Sức mạnh thực sự của hệ sinh thái CRÉNOT nằm ở khả năng đồng bộ tức thì. Mọi nỗ lực trong phòng gym, mọi giọt mồ hôi trên đường chạy hay thậm chí là một giấc ngủ ngon đều được số hóa một cách chính xác. Biểu đồ sức khỏe hiển thị trực quan ngay trên điện thoại chính là động lực mạnh mẽ nhất để bạn không ngừng cố gắng, phá vỡ những giới hạn của ngày hôm qua.</p><p>Hãy để CRÉNOT trở thành người bạn đồng hành tin cậy, giúp bạn định hình một phong cách sống năng động, khỏe mạnh và tràn đầy năng lượng mỗi ngày!</p>',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
    category: 'Phong Cách Sống',
    date: '28 Tháng 6, 2026',
    author: 'CRÉNOT Lifestyle Team'
  }
];
