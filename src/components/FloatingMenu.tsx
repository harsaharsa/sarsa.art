import React, { useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { poetryGridStructure } from '../poetryGridStructure';
import { poems } from '../poems/poems';

interface FloatingMenuProps {
  onPoemSelect: (slug: string) => void;
  activeSlug: string | null;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({ onPoemSelect, activeSlug }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const isSingleColumn = width < 840;

  // Extract poems in order from grid structure
  const orderedPoemSlugs = poetryGridStructure.rows
    .flatMap(row => row.columns)
    .filter(column => column.type === 'poem')
    .map(column => (column as { poem: string }).poem);

  // Filter and sort the poems array based on the grid structure order
  const orderedPoems = orderedPoemSlugs
    .map(slug => poems.find(poem => poem.slug === slug))
    .filter((poem): poem is NonNullable<typeof poem> => poem !== undefined);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      {/* White background */}
      <div 
        className="absolute top-0 left-0 w-full h-12"
        style={{
          backgroundColor: 'white',
          pointerEvents: 'none'
        }}
      />
      
      {/* Menu content */}
      <div className="relative pt-3">
        <button
          onClick={toggleMenu}
          style={{ paddingLeft: "16px", fontFamily: "Georgia", fontSize: "16px", lineHeight: "20px", color: "black" }}
          className="text-gray-800"
        >
          POEMS
        </button>
        {isOpen && (
          <ul className={`bg-white absolute p-4 overflow-y-auto ${
            isSingleColumn ? 'left-0 right-0 min-h-screen' : 'min-w-[200px]'
          }`}>
            {orderedPoems.map((poem) => (
              <li
                key={poem.slug}
                onClick={() => {
                  onPoemSelect(poem.slug);
                  setIsOpen(false);
                }}
                className={`p-2 cursor-pointer transition-colors duration-200 hover:bg-gray-100 ${
                  activeSlug === poem.slug ? 'font-bold' : ''
                }`}
                style={{ fontFamily: "Georgia", fontSize: "16px", lineHeight: "20px", color: "black" }}
              >
                {poem.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};