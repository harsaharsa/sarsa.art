import React, { useState } from 'react';
import { poems } from '../poems/poems';

interface FloatingMenuProps {
  onPoemSelect: (slug: string) => void;
  activeSlug: string | null;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({ onPoemSelect, activeSlug }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-5 left-5 z-50">
      <button
        onClick={toggleMenu}
        style={{ fontFamily: "Georgia", fontSize: "16px", lineHeight: "20px", color: "black" }}
        className="text-gray-800"
      >
        POEMS
      </button>
      {isOpen && (
        <ul className="mt-2">
          {poems.map((poem) => (
            <li
              key={poem.slug}
              onClick={() => {
                onPoemSelect(poem.slug);
                setIsOpen(false);
              }}
              className={`p-2 cursor-pointer hover:underline ${activeSlug === poem.slug ? 'font-bold' : ''}`}
              style={{ fontFamily: "Georgia", fontSize: "16px", lineHeight: "20px", color: "black" }}
            >
              {poem.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};