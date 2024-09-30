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
}

export const Column: React.FC<ColumnProps> = ({ fraction, type, asset, poem, backgroundColor, placeholder, textColor }) => {
  textColor = textColor || "black"; // Default to black text color
  const renderContent = () => {
    switch (type) {
      case "logo":
        return <Logo />;
      case "image":
        return <Image asset={asset} placeholder={placeholder}/>;
      case "poem":
        return <Poem slug={poem} textColor={textColor} />;
      case "empty":
      default:
        return <Empty backgroundColor={backgroundColor} />;
    }
  };

  return (
    <div className="column" style={{
      gridColumn: `span ${fraction}`, // This will make the column span the correct number of grid cells
      backgroundColor: backgroundColor || "transparent",
      minHeight: '400px', // Set a minimum height to ensure visibility
    }}>
      {renderContent()}
    </div>
  );
};