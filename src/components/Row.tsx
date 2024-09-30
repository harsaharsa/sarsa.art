import React from 'react';
import { Column, ColumnProps } from './Column';

interface RowProps {
  columns: ColumnProps[];
}

export const Row: React.FC<RowProps> = ({ columns }) => {
  return (
    <div className="row" style={{
      display: 'contents', // This allows the Row's children to be placed directly in the grid
    }}>
      {columns.map((column, index) => (
        <Column key={index} {...column} />
      ))}
    </div>
  );
};