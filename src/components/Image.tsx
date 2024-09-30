import React from 'react';

interface ImageProps {
  asset?: string;
  placeholder?: string;
}

export const Image: React.FC<ImageProps> = ({ asset, placeholder }) => (
  <div className="image">
    {placeholder && (
      <div
        className="placeholder"
        style={{
          width: '100%',
          height: `${placeholder}px`,
          backgroundColor: '#e0e0e0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#666',
          fontSize: '1rem',
        }}
      >
        {`${placeholder}px`}
      </div>
    )}
    {asset && <img src={`/images/${asset}`} alt={asset} />}
  </div>
);