/* eslint-disable react-refresh/only-export-components -- server entry, not hot-reloaded */
import { StrictMode } from 'react';
import { prerender } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App';
import { splitLangPath } from './content/lang';

export { buildHead, allPaths } from './seo/head';
export { renderHeadTags } from './seo/render-head';
export { productContent } from './content/products';
export { postContent, postText } from './content/posts';
export { LANGS, localizePath, absoluteUrl, SITE_URL, HTML_LANG } from './content/lang';

/** Renders one URL to HTML, waiting for lazy pages to load. */
export async function render(url: string): Promise<string> {
  const lang = splitLangPath(url).lang ?? 'en';
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell initialLanguage={lang} />
      </StaticRouter>
    </StrictMode>,
    {
      onError(error) {
        // Fail the build instead of shipping a page that only renders in the browser.
        throw error;
      },
    },
  );
  return new Response(prelude).text();
}
