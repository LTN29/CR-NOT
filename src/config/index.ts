import { productContent } from '../content/products';

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


export const SIMI_BASE_URL = 'https://simi.vn';
export const SIMI_PRIVACY_POLICY_URL = 'https://simi.vn/pages/chinh-sach-bao-mat';

export const simiProductUrls: Readonly<Record<string, string | null>> = Object.fromEntries(
  productContent.map((p) => [p.id, p.simiUrl]),
);

export function getSimiProductUrl(productId: string) {
  return simiProductUrls[productId] || SIMI_BASE_URL;
}

export const legalEntity = {
  name: 'CÔNG TY CỔ PHẦN SIMIGO',
  taxId: '0109843713',
  // TODO: populate these from approved company data; do not guess.
  address: null as string | null,
  hotline: null as string | null,
  email: null as string | null,
} as const;
