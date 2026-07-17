export const config = {
  IMAGE_BASE_URL: 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot'
};

export const getImageUrl = (path: string) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  if (config.IMAGE_BASE_URL) {
    const cleanPath = path
      .replace(/^\/images\//, '/')
      .replace(/^\/assets\//, '/')
      .replace(/^\/+/, '/');

    return `${config.IMAGE_BASE_URL}${cleanPath}`;
  }

  if (!path.startsWith('/images/')) {
    return `/images${path}`;
  }

  return path;
};
