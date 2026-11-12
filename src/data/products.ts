import { getImageUrl } from '../config';
import { productContent } from '../content/products';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  simiUrl: string;
  video?: string;
}

/** Product list used by the pages; translated copy comes from t(`products_data.<id>.*`). */
export const products: Product[] = productContent.map((p) => ({
  id: p.id,
  name: p.text.vi.name,
  category: p.text.vi.category,
  description: p.text.vi.desc,
  features: p.text.vi.features,
  specs: p.text.vi.specs,
  simiUrl: p.simiUrl,
  video: p.video,
  image: getImageUrl(p.image),
  images: p.images.map((img) => getImageUrl(img)),
}));
