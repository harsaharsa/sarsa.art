import React from 'react';
import { poems } from '../poems/poems';

interface PoemProps {
  slug?: string;
  textColor?: string;
  isSingleColumn?: boolean;
}

export const Poem: React.FC<PoemProps> = ({ slug, textColor, isSingleColumn }) => {
  const poem = poems.find((poem) => poem.slug === slug);
  return (
    <div className={`poem ${isSingleColumn ? 'p-14' : 'p-16'}`} data-poem-slug={slug}>
      <h2 className="mb-4" style={{ 
        fontFamily: "Georgia", 
        fontSize: isSingleColumn ? "32px" : "40px", 
        lineHeight: isSingleColumn ? "40px" : "48px", 
        color: textColor 
      }}>{poem?.title}</h2>
      {poem?.poem.map((stanza, stanzaIndex) => (
        <div key={stanzaIndex} className="mb-8">
          {stanza.map((line, lineIndex) => (
            <p key={lineIndex} style={{ fontFamily: "Georgia", fontSize: "16px", lineHeight: "20px", color: textColor, marginBottom: "4px" }}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};