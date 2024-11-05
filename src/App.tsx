import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { PoetryGrid } from './components/PoetryGrid';
import { poetryGridStructure } from './poetryGridStructure';
import { FloatingMenu } from './components/FloatingMenu';
import { Logo } from './components/Logo';
import { useRef, useEffect } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useWindowSize } from './hooks/useWindowSize';

const PoetryGridPage = () => {
  const poetryGridRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const activeSlug = useScrollSpy(poetryGridRef);
  const { width } = useWindowSize();
  const isMobile = width < 1680;
  const MENU_OFFSET = 47;

  const scrollToPoem = (slug: string) => {
    const poemElement = poetryGridRef.current?.querySelector(`[data-poem-slug="${slug}"]`);
    if (poemElement) {
      const elementPosition = poemElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - MENU_OFFSET;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const hash = window.location.hash.slice(1);
      const pathParts = window.location.pathname.split('/');
      const pathSlug = pathParts[pathParts.length - 1];
      
      const slugToScrollTo = hash || pathSlug;
      
      if (slugToScrollTo) {
        scrollToPoem(slugToScrollTo);
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleLogoScroll = () => {
      if (poetryGridRef.current) {
        poetryGridRef.current.scrollBy({ top: 100, behavior: 'smooth' });
      }
    };

    const logoElement = logoRef.current;
    if (logoElement) {
      logoElement.addEventListener('click', handleLogoScroll);
    }

    return () => {
      if (logoElement) {
        logoElement.removeEventListener('click', handleLogoScroll);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <FloatingMenu onPoemSelect={scrollToPoem} activeSlug={activeSlug} />
      {!isMobile && <Logo ref={logoRef} className="fixed-logo" />}
      <div ref={poetryGridRef} className="scrollable-poetry-grid">
        <PoetryGrid structure={poetryGridStructure} isMobile={isMobile} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PoetryGridPage />} />
        <Route path="/:slug" element={<PoetryGridPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
