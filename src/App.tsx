import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';


import { LanguageProvider } from './contexts/LanguageContext';
import './index.css';

const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Suspense fallback={null}><ProductDetailPage /></Suspense>} />
          <Route path="/blog/:id" element={<Suspense fallback={null}><BlogDetailPage /></Suspense>} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
