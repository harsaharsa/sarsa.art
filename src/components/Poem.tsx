import React from 'react';
import { poems } from '../poems/poems';

interface PoemProps {
  slug?: string;
  textColor?: string;
}

export const Poem: React.FC<PoemProps> = ({ slug, textColor }) => {
  const poem = poems.find((poem) => poem.slug === slug);
  return (
    <div className="p-16 poem" data-poem-slug={slug}>
      <h2 className="mb-4" style={{ fontFamily: "Georgia", fontSize: "40px", lineHeight: "48px", color: textColor }}>{poem?.title}</h2>
      {poem?.poem.map((stanza, stanzaIndex) => (
        <div key={stanzaIndex} className="mb-4">
          {stanza.map((line, lineIndex) => (
            <p key={lineIndex} style={{ fontFamily: "Georgia", fontSize: "16px", lineHeight: "20px", color: textColor }}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
};