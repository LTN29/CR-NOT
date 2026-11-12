/**
 * Title, description, canonical/hreflang links and JSON-LD for every page, in every language.
 * Used by the prerender script (static HTML for search engines and AI crawlers) and by
 * <DocumentHead> in the browser, so both always agree.
 */
import { translate } from '../contexts/LanguageContext';
import { getImageUrl, legalEntity } from '../config';
import { absoluteUrl, HTML_LANG, LANGS, SITE_URL, splitLangPath, type Lang } from '../content/lang';
import { productContent, getProductContent } from '../content/products';
import { AUTHOR, getPostContent, postContent, postText } from '../content/posts';

export interface HeadData {
  lang: Lang;
  title: string;
  description: string;
  canonical: string;
  alternates: { hreflang: string; href: string }[];
  image: string;
  type: 'website' | 'article' | 'product';
  jsonLd: object[];
  /** false for unknown URLs (served as 404 by the prerender). */
  found: boolean;
}

const BRAND = 'Crénot';
const LOGO = 'https://pmcewuonkfurdnkzptsg.supabase.co/storage/v1/object/public/images/crenot/Crenot-Logo.png';
const DEFAULT_IMAGE = getImageUrl('/banner.webp');

const HOME: Record<Lang, { title: string; description: string }> = {
  vi: {
    title: 'Crénot – Thiết bị chăm sóc sức khỏe và sắc đẹp thông minh',
    description:
      'Crénot là thương hiệu thiết bị chăm sóc sức khỏe và sắc đẹp: cân sức khỏe thông minh Gofit S2, Gofit X6 Pro, inBody i8, máy triệt lông IPL Graci X3, máy massage Thunder Z6 và xe đạp tập Spin X8. Mua chính hãng tại SIMI.vn.',
  },
  en: {
    title: 'Crénot – Smart health and beauty devices',
    description:
      'Crénot makes health and beauty devices: the Gofit S2, Gofit X6 Pro and inBody i8 smart body scales, the Graci X3 IPL hair removal device, the Thunder Z6 massage gun and the Spin X8 pedal exerciser. Sold officially at SIMI.vn.',
  },
  jp: {
    title: 'Crénot – スマートなヘルスケア・ビューティー機器',
    description:
      'Crénotはヘルスケアとビューティーの機器ブランドです。体組成計Gofit S2・Gofit X6 Pro・inBody i8、IPL脱毛器Graci X3、マッサージガンThunder Z6、ペダル運動器Spin X8を展開。正規販売はSIMI.vnです。',
  },
};

const organization = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: BRAND,
  url: SITE_URL,
  logo: LOGO,
  description: HOME.en.description,
  parentOrganization: { '@type': 'Organization', name: legalEntity.name, taxID: legalEntity.taxId },
};

function breadcrumb(lang: Lang, items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path, lang),
    })),
  };
}

function faqPage(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');

/** Every page path (without language prefix) that exists on the site. */
export function allPaths(): string[] {
  return [
    '/',
    '/blog',
    ...productContent.map((p) => `/product/${p.id}`),
    ...postContent.map((p) => `/blog/${p.id}`),
  ];
}

export function buildHead(pathname: string): HeadData {
  const split = splitLangPath(pathname);
  const lang: Lang = split.lang ?? 'en';
  const path = split.path.replace(/\/+$/, '') || '/';
  const alternates = [
    ...LANGS.map((l) => ({ hreflang: HTML_LANG[l], href: absoluteUrl(path, l) })),
    { hreflang: 'x-default', href: absoluteUrl(path, 'en') },
  ];
  const base = { lang, canonical: absoluteUrl(path, lang), alternates, found: true };
  const home = { name: BRAND, path: '/' };

  const productMatch = path.match(/^\/product\/([^/]+)$/);
  const postMatch = path.match(/^\/blog\/([^/]+)$/);

  if (path === '/') {
    return {
      ...base,
      ...HOME[lang],
      image: DEFAULT_IMAGE,
      type: 'website',
      jsonLd: [
        organization,
        { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: BRAND, url: SITE_URL, inLanguage: HTML_LANG[lang], publisher: { '@id': organization['@id'] } },
        {
          '@type': 'ItemList',
          name: translate(lang, 'products.headline'),
          itemListElement: productContent.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: absoluteUrl(`/product/${p.id}`, lang),
            name: p.text[lang].name,
          })),
        },
      ],
    };
  }

  if (productMatch) {
    const product = getProductContent(productMatch[1]);
    if (product) {
      const text = product.text[lang];
      return {
        ...base,
        title: `${text.name} | ${BRAND}`,
        description: `${text.short} ${text.desc}`.slice(0, 300),
        image: getImageUrl(product.image),
        type: 'product',
        jsonLd: [
          {
            '@type': 'Product',
            name: text.name,
            description: text.desc,
            image: product.images.slice(0, 5).map((img) => getImageUrl(img)),
            brand: { '@type': 'Brand', name: BRAND },
            category: text.category,
            model: text.specs.Model ?? text.specs['モデル'],
            url: absoluteUrl(path, lang),
            additionalProperty: Object.entries(text.specs).map(([name, value]) => ({ '@type': 'PropertyValue', name, value })),
            subjectOf: product.video ? { '@type': 'VideoObject', name: translate(lang, 'product_detail.video'), embedUrl: `https://www.youtube.com/embed/${product.video}`, thumbnailUrl: `https://i.ytimg.com/vi/${product.video}/hqdefault.jpg` } : undefined,
            isRelatedTo: { '@type': 'WebPage', name: 'SIMI.vn', url: product.simiUrl },
          },
          faqPage(text.faq),
          breadcrumb(lang, [home, { name: text.name, path }]),
        ],
      };
    }
  }

  if (path === '/blog') {
    return {
      ...base,
      title: `${translate(lang, 'blog.headline')} | ${BRAND}`,
      description: translate(lang, 'blog.subtitle'),
      image: `${SITE_URL}${postContent[0]?.image ?? ''}`,
      type: 'website',
      jsonLd: [
        {
          '@type': 'Blog',
          name: translate(lang, 'blog.headline'),
          url: absoluteUrl('/blog', lang),
          inLanguage: HTML_LANG[lang],
          publisher: organization,
          blogPost: postContent.map((p) => ({
            '@type': 'BlogPosting',
            headline: postText(p, lang).title,
            url: absoluteUrl(`/blog/${p.id}`, lang),
            datePublished: p.published,
          })),
        },
        breadcrumb(lang, [home, { name: translate(lang, 'blog.headline'), path: '/blog' }]),
      ],
    };
  }

  if (postMatch) {
    const post = getPostContent(postMatch[1]);
    if (post) {
      const text = postText(post, lang);
      return {
        ...base,
        title: `${text.title} | ${BRAND}`,
        description: text.excerpt,
        image: `${SITE_URL}${post.image}`,
        type: 'article',
        jsonLd: [
          {
            '@type': 'BlogPosting',
            headline: text.title,
            description: text.excerpt,
            abstract: text.summary.map(stripTags).join(' '),
            image: `${SITE_URL}${post.image}`,
            datePublished: post.published,
            dateModified: post.updated,
            inLanguage: HTML_LANG[lang],
            author: { '@type': 'Organization', name: AUTHOR, url: SITE_URL },
            publisher: organization,
            mainEntityOfPage: absoluteUrl(path, lang),
            about: post.products.map((id) => ({ '@type': 'Product', name: getProductContent(id)?.text[lang].name, url: absoluteUrl(`/product/${id}`, lang) })),
          },
          faqPage(text.faq),
          breadcrumb(lang, [home, { name: translate(lang, 'blog.headline'), path: '/blog' }, { name: text.title, path }]),
        ],
      };
    }
  }

  return { ...base, ...HOME[lang], image: DEFAULT_IMAGE, type: 'website', jsonLd: [], found: false };
}
