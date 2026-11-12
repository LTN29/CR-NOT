import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OG_LOCALE } from '../content/lang';
import { buildHead } from './head';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/** Keeps title, description, canonical, hreflang and JSON-LD in sync while navigating in the browser. */
export function DocumentHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = buildHead(pathname);
    document.title = head.title;
    setMeta('name', 'description', head.description);
    setMeta('property', 'og:title', head.title);
    setMeta('property', 'og:description', head.description);
    setMeta('property', 'og:url', head.canonical);
    setMeta('property', 'og:image', head.image);
    setMeta('property', 'og:locale', OG_LOCALE[head.lang]);

    document.head.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang], script[data-head="jsonld"]').forEach((el) => el.remove());
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = head.canonical;
    document.head.appendChild(canonical);
    head.alternates.forEach((a) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = a.hreflang;
      link.href = a.href;
      document.head.appendChild(link);
    });
    if (head.jsonLd.length) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.head = 'jsonld';
      script.text = JSON.stringify({ '@context': 'https://schema.org', '@graph': head.jsonLd });
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
