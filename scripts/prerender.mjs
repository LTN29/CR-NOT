/**
 * Writes a static HTML file for every page in every language, so search engines and AI
 * crawlers read the full content without running JavaScript. Also writes sitemap.xml,
 * robots.txt and llms.txt. Runs after `vite build` and `vite build --ssr`.
 */
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const server = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const { render, buildHead, allPaths, renderHeadTags, LANGS, localizePath, absoluteUrl, SITE_URL, HTML_LANG, productContent, postContent, postText } = server;

const template = readFileSync(join(dist, 'index.html'), 'utf8').replace(/\s*<title>[\s\S]*?<\/title>/, '');
const today = new Date().toISOString().slice(0, 10);

let pages = 0;
for (const lang of LANGS) {
  for (const path of allPaths()) {
    const url = localizePath(path, lang);
    const head = buildHead(url);
    const app = await render(url);
    const html = template
      .replace(/<html lang="[^"]*"/, `<html lang="${HTML_LANG[lang]}"`)
      .replace('</head>', `    ${renderHeadTags(head)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${app}</div>`);
    const file = url.endsWith('/') ? join(dist, url, 'index.html') : join(dist, url, 'index.html');
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    pages++;
  }
}

// sitemap.xml with every language version of every page
const lastmod = (path) => {
  const post = postContent.find((p) => path === `/blog/${p.id}`);
  return post ? post.updated : today;
};
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...allPaths().flatMap((path) =>
    LANGS.map((lang) =>
      [
        '  <url>',
        `    <loc>${absoluteUrl(path, lang)}</loc>`,
        `    <lastmod>${lastmod(path)}</lastmod>`,
        ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${absoluteUrl(path, l)}" />`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(path, 'en')}" />`,
        '  </url>',
      ].join('\n'),
    ),
  ),
  '</urlset>',
  '',
].join('\n');
writeFileSync(join(dist, 'sitemap.xml'), sitemap);

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

// llms.txt: a plain summary for AI assistants (https://llmstxt.org)
const llms = [
  '# Crénot',
  '',
  '> Crénot is a health and beauty device brand: smart body composition scales, an IPL hair removal device, a massage gun and a foldable pedal exerciser. This website introduces the brand; products are sold officially at SIMI.vn (operated by SIMIGO JSC, Vietnam). Pages exist in English (/), Vietnamese (/vi/) and Japanese (/ja/).',
  '',
  '## Products',
  ...productContent.map((p) => `- [${p.text.en.name}](${absoluteUrl(`/product/${p.id}`, 'en')}): ${p.text.en.short} Vietnamese: ${absoluteUrl(`/product/${p.id}`, 'vi')}. Buy: ${p.simiUrl}`),
  '',
  '## Articles',
  ...postContent.map((p) => `- [${postText(p, 'en').title}](${absoluteUrl(`/blog/${p.id}`, 'en')}): ${postText(p, 'en').excerpt}`),
  '',
  '## Optional',
  '- [Warranty (SIMI)](https://baohanh.simi.vn): electronic warranty activation and lookup for Crénot products.',
  '',
].join('\n');
writeFileSync(join(dist, 'llms.txt'), llms);

rmSync(ssrDir, { recursive: true, force: true });
console.log(`prerendered ${pages} pages, sitemap.xml, robots.txt, llms.txt`);
