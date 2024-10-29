import React from 'react';
import { Column, ColumnProps } from './Column';

interface RowProps {
  columns: ColumnProps[];
  isMobile: boolean;
  isSingleColumn?: boolean;
}


export const Row: React.FC<RowProps> = ({ columns, isMobile, isSingleColumn }) => {
  // Adjust column fractions for mobile if necessary
  const adjustedColumns = columns.map((column) => ({
    ...column,
    fraction: isMobile ? Math.min(column.fraction, 2) : column.fraction,
  }));

  return (
    <div
      className="row"
      style={{
        display: 'contents',
        maxWidth: '100%',
      }}
    >
      {adjustedColumns.map((column, index) => (
        <Column key={index} {...column} isSingleColumn={isSingleColumn} />
      ))}
    </div>
  );
};
