export type Lang = 'vi' | 'en' | 'jp';

export const LANGS: Lang[] = ['en', 'vi', 'jp'];

/** Unprefixed URLs are English; Vietnamese lives under /vi and Japanese under /ja. */
export const DEFAULT_LANG: Lang = 'en';

export const SITE_URL = 'https://crenot.net';

const PREFIX: Record<Lang, string> = { en: '', vi: '/vi', jp: '/ja' };

/** BCP-47 code for <html lang>, hreflang and og:locale. */
export const HTML_LANG: Record<Lang, string> = { en: 'en', vi: 'vi', jp: 'ja' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', vi: 'vi_VN', jp: 'ja_JP' };

export function isLang(value: unknown): value is Lang {
  return value === 'vi' || value === 'en' || value === 'jp';
}

/** Splits "/vi/product/s2" into { lang: 'vi', path: '/product/s2' }; lang is null when unprefixed. */
export function splitLangPath(pathname: string): { lang: Lang | null; path: string } {
  const match = pathname.match(/^\/(vi|ja)(?=\/|$)/);
  if (!match) return { lang: null, path: pathname || '/' };
  const lang: Lang = match[1] === 'ja' ? 'jp' : 'vi';
  return { lang, path: pathname.slice(match[0].length) || '/' };
}

/** "/product/s2" in Vietnamese → "/vi/product/s2"; home in English stays "/". */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const prefix = PREFIX[lang];
  if (!prefix) return clean;
  return clean === '/' ? `${prefix}/` : `${prefix}${clean}`;
}

export function absoluteUrl(path: string, lang: Lang): string {
  return `${SITE_URL}${localizePath(path, lang)}`;
}
