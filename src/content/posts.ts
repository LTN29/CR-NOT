/**
 * Crénot articles in Vietnamese, English and Japanese.
 *
 * Every number about a product comes from its page on SIMI.vn (see products.ts). Articles answer
 * the question in the first lines ("summary"), then explain, then close with an FAQ, so that search
 * engines and AI assistants can quote them accurately.
 */
import type { Lang } from './lang';
import type { QA } from './products';
import { postsVi } from './posts.vi';
import { postsEn } from './posts.en';
import { postsJp } from './posts.jp';

export interface PostText {
  category: string;
  title: string;
  excerpt: string;
  /** Short answer shown first, 2–4 bullet points (plain text, may contain <strong>). */
  summary: string[];
  /** Article body (HTML: h2, h3, p, ul, ol, table). */
  body: string;
  faq: QA[];
}

export interface PostContent {
  id: string;
  /** Hero image, served from public/media/blog. */
  image: string;
  imageAlt: Record<Lang, string>;
  published: string;
  updated: string;
  /** Products the article is about, linked at the end. */
  products: string[];
  text: Partial<Record<Lang, PostText>> & { vi: PostText };
}

export const AUTHOR = 'Crénot';

type PostMeta = Omit<PostContent, 'text'>;

const meta: PostMeta[] = [
  {
    id: 'chon-can-suc-khoe-thong-minh',
    image: '/media/blog/chon-can-suc-khoe-thong-minh.webp',
    imageAlt: {
      vi: 'Ba mẫu cân sức khỏe Crenot Gofit S2, Gofit X6 Pro và inBody i8',
      en: 'Crenot Gofit S2, Gofit X6 Pro and inBody i8 smart scales',
      jp: 'Crenot Gofit S2、Gofit X6 Pro、inBody i8 の3機種',
    },
    published: '2026-11-12',
    updated: '2026-11-12',
    products: ['s2', 'x6', 'i8'],
  },
  {
    id: 'do-chi-so-co-the-dung-cach',
    image: '/media/blog/do-chi-so-co-the-dung-cach.webp',
    imageAlt: {
      vi: 'Cân sức khỏe Crenot Gofit S2 và inBody i8',
      en: 'Crenot Gofit S2 and inBody i8 smart scales',
      jp: 'Crenot Gofit S2 と inBody i8',
    },
    published: '2026-11-09',
    updated: '2026-11-12',
    products: ['s2', 'x6', 'i8'],
  },
  {
    id: 'triet-long-ipl-tai-nha',
    image: '/media/blog/triet-long-ipl-tai-nha.webp',
    imageAlt: {
      vi: 'Máy triệt lông IPL Crenot Graci X3',
      en: 'Crenot Graci X3 IPL hair removal device',
      jp: 'Crenot Graci X3 IPL光美容脱毛器',
    },
    published: '2026-11-06',
    updated: '2026-11-12',
    products: ['x3'],
  },
  {
    id: 'dung-may-massage-cam-tay-dung-cach',
    image: '/media/blog/dung-may-massage-cam-tay-dung-cach.webp',
    imageAlt: {
      vi: 'Máy massage cầm tay Crenot Thunder Z6',
      en: 'Crenot Thunder Z6 massage gun',
      jp: 'Crenot Thunder Z6 マッサージガン',
    },
    published: '2026-11-03',
    updated: '2026-11-12',
    products: ['z6'],
  },
  {
    id: 'tap-luyen-tai-nha-voi-spin-x8',
    image: '/media/blog/tap-luyen-tai-nha-voi-spin-x8.webp',
    imageAlt: {
      vi: 'Xe đạp tập gấp gọn Crenot Spin X8',
      en: 'Crenot Spin X8 foldable pedal exerciser',
      jp: 'Crenot Spin X8 折りたたみペダル運動器',
    },
    published: '2026-10-30',
    updated: '2026-11-12',
    products: ['x8'],
  },
  {
    id: 'bao-hanh-san-pham-crenot',
    image: '/media/blog/bao-hanh-san-pham-crenot.webp',
    imageAlt: {
      vi: 'Các sản phẩm Crénot: cân Gofit X6 Pro, máy triệt lông Graci X3 và máy massage Thunder Z6',
      en: 'Crénot products: Gofit X6 Pro scale, Graci X3 and Thunder Z6',
      jp: 'Crénot製品：Gofit X6 Pro、Graci X3、Thunder Z6',
    },
    published: '2026-10-27',
    updated: '2026-11-12',
    products: ['x6', 'x3', 'z6'],
  },
];

export const postContent: PostContent[] = meta.map((m) => ({
  ...m,
  text: { vi: postsVi[m.id], en: postsEn[m.id], jp: postsJp[m.id] },
}));

/** Old article addresses that moved to a rewritten article. */
export const POST_REDIRECTS: Record<string, string> = {
  'hieu-dung-ve-14-chi-so': 'do-chi-so-co-the-dung-cach',
  'triet-long-bang-lanh': 'triet-long-ipl-tai-nha',
};

export function getPostContent(id: string) {
  return postContent.find((p) => p.id === id);
}

/** The copy of a post in a language, falling back to Vietnamese until it is translated. */
export function postText(post: PostContent, lang: Lang): PostText {
  return post.text[lang] ?? post.text.vi;
}

const DATE_FORMAT: Record<Lang, string> = { vi: 'vi-VN', en: 'en-GB', jp: 'ja-JP' };

export function formatDate(iso: string, lang: Lang): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(DATE_FORMAT[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** blogs_data.<id>.* for the t() dictionary of one language. */
export function postsDictionary(lang: Lang) {
  return Object.fromEntries(
    postContent.map((p) => {
      const text = postText(p, lang);
      return [p.id, { ...text, date: formatDate(p.published, lang), content: text.body }];
    }),
  );
}
