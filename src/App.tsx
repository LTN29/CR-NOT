import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import { DocumentHead } from './seo/DocumentHead';

import { LanguageProvider } from './contexts/LanguageContext';
import type { Lang } from './content/lang';
import './index.css';

const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));

/** English has no prefix; Vietnamese and Japanese live under /vi and /ja. */
const PREFIXES = ['', '/vi', '/ja'];

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

/** Everything inside the router; the browser wraps it in BrowserRouter, the prerender in StaticRouter. */
export function AppShell({ initialLanguage }: { initialLanguage?: Lang }) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <DocumentHead />
      <ScrollToTop />
      <Header />
      <Routes>
        {PREFIXES.map((prefix) => [
          <Route key={`${prefix}home`} path={`${prefix}/`} element={<HomePage />} />,
          <Route key={`${prefix}product`} path={`${prefix}/product/:id`} element={<Suspense fallback={null}><ProductDetailPage /></Suspense>} />,
          <Route key={`${prefix}blog`} path={`${prefix}/blog`} element={<Suspense fallback={null}><BlogIndexPage /></Suspense>} />,
          <Route key={`${prefix}post`} path={`${prefix}/blog/:id`} element={<Suspense fallback={null}><BlogDetailPage /></Suspense>} />,
        ])}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
