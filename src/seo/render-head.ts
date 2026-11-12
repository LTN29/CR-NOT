import { OG_LOCALE } from '../content/lang';
import type { HeadData } from './head';

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The <head> tags for a page, as HTML (used when prerendering). */
export function renderHeadTags(head: HeadData): string {
  const tags = [
    `<title>${escape(head.title)}</title>`,
    `<meta name="description" content="${escape(head.description)}" />`,
    `<link rel="canonical" href="${head.canonical}" />`,
    ...head.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`),
    `<meta property="og:type" content="${head.type === 'article' ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="Crénot" />`,
    `<meta property="og:locale" content="${OG_LOCALE[head.lang]}" />`,
    `<meta property="og:title" content="${escape(head.title)}" />`,
    `<meta property="og:description" content="${escape(head.description)}" />`,
    `<meta property="og:url" content="${head.canonical}" />`,
    `<meta property="og:image" content="${head.image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  if (!head.found) tags.push('<meta name="robots" content="noindex" />');
  if (head.jsonLd.length) {
    const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': head.jsonLd }).replace(/</g, '\\u003c');
    tags.push(`<script type="application/ld+json">${json}</script>`);
  }
  return tags.join('\n    ');
}
