import type { Lang } from './lang';
import { productContent, type ProductText } from './products';

/** products_data.<id>.* for the t() dictionary of one language. */
export function productsDictionary(lang: Lang): Record<string, ProductText> {
  return Object.fromEntries(productContent.map((p) => [p.id, p.text[lang]]));
}
