import React from 'react';
import { Logo } from './Logo';
import { Image } from './Image';
import { Poem } from './Poem';
import { Empty } from './Empty';

export interface ColumnProps {
  fraction: number;
  type: 'logo' | 'image' | 'poem' | 'empty';
  asset?: string;
  poem?: string;
  backgroundColor?: string;
  placeholder?: string;
  textColor?: string;
  hideFirst?: boolean;
  slug?: string;
}

export const Column: React.FC<ColumnProps> = ({ fraction, type, asset, poem, backgroundColor, placeholder, textColor, slug }) => {
  textColor = textColor || "black"; // Default to black text color
  const renderContent = () => {
    switch (type) {
      case "logo":
        return <Logo isInline={true} />;
      case "image":
        return <Image asset={asset} placeholder={placeholder} slug={slug} />;
      case "poem":
        return <Poem slug={poem} textColor={textColor} />;
      case "empty":
      default:
        return <Empty backgroundColor={backgroundColor} />;
    }
  };

  return (
    <div 
      className="column" 
      style={{
        gridColumn: `span ${fraction}`,
        backgroundColor: backgroundColor || "transparent",
        minHeight: '400px',
        position: 'relative',
        zIndex: type === "poem" || type === "image" ? 2 : 0,
      }}
    >
      {renderContent()}
    </div>
  );
};
