import { useState, useEffect } from 'react';

export const useScrollSpy = (layoutRef: React.RefObject<HTMLDivElement>) => {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!layoutRef.current) return;

      const poems = layoutRef.current.querySelectorAll('[data-poem-slug]');
      let closestPoem: Element = poems[0];
      let closestDistance = Infinity;

      poems.forEach((poem) => {
        const rect = poem.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance) {
          closestPoem = poem;
          closestDistance = distance;
        }
      });

      const slug = closestPoem.getAttribute('data-poem-slug');
      if (slug && slug !== activeSlug) {
        setActiveSlug(slug);
        history.replaceState(null, '', `#${slug}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [layoutRef, activeSlug]);

  return activeSlug;
};