import React from 'react';
import { Row } from './Row';
import { ColumnProps } from './Column';

export interface LayoutStructure {
  rows: { columns: ColumnProps[] }[];
}

interface LayoutProps {
  structure: LayoutStructure;
}

export const Layout: React.FC<LayoutProps> = ({ structure }) => {
  return (
    <div className="layout" style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 420px)', // 4 columns of 400px each
      justifyContent: 'end', // Align grid to the right
      width: '100%',
      overflowX: 'hidden', // Hide horizontal overflow
    }}>
      {structure.rows.map((row, index) => (
        <Row key={index} columns={row.columns} />
      ))}
    </div>
  );
};