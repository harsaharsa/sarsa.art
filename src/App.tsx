import { Layout } from './components/Layout';
import { layoutStructure } from './layoutStructure';
import { FloatingMenu } from './components/FloatingMenu';
import { useRef, useEffect } from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';

const App = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const activeSlug = useScrollSpy(layoutRef);

  const scrollToPoem = (slug: string) => {
    const poemElement = layoutRef.current?.querySelector(`[data-poem-slug="${slug}"]`);
    if (poemElement) {
      poemElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollToPoem(hash);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <FloatingMenu onPoemSelect={scrollToPoem} activeSlug={activeSlug} />
      <div ref={layoutRef} className="pt-24">
        <Layout structure={layoutStructure} />
      </div>
    </div>
  );
};

export default App;