export const config = {
  // Thay đổi URL này thành link bucket của Supabase khi đã upload xong
  // Ví dụ: 'https://xxx.supabase.co/storage/v1/object/public/images/crenot'
  // Hiện tại đang để trống để sử dụng ảnh ở folder public (local)
  IMAGE_BASE_URL: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot'
};

/**
 * Hàm hỗ trợ lấy đường dẫn ảnh đầy đủ
 * Trả về ảnh từ Supabase (nếu có cấu hình) hoặc ảnh local
 */
export const getImageUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  
  if (config.IMAGE_BASE_URL) {
    // Khi dùng Supabase, upload folder là 'crenot' (tương đương với bên trong 'images' của local)
    // Do đó ta cần bỏ tiền tố '/images' đi để link khớp với cấu trúc 'crenot/S2/...'
    const cleanPath = path.startsWith('/images/') ? path.replace('/images/', '/') : path;
    return `${config.IMAGE_BASE_URL}${cleanPath}`;
  }
  
  // Khi dùng local, nếu path chưa có '/images' thì thêm vào
  if (!path.startsWith('/images/')) {
    return `/images${path}`;
  }
  
  return path;
};
