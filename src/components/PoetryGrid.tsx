import React from 'react';
import { Row } from './Row';
import { ColumnProps } from './Column';
import { useWindowSize } from '../hooks/useWindowSize';
import { Logo } from './Logo';

export interface PoetryGridStructure {
  rows: { 
    columns: ColumnProps[],
  }[];
}

interface PoetryGridProps {
  structure: PoetryGridStructure;
  isMobile: boolean;
}

export const PoetryGrid: React.FC<PoetryGridProps> = ({ structure, isMobile }) => {
  const { width } = useWindowSize();

  // Determine the number of columns based on the viewport width
  const getColumnCount = () => {
    if (width >= 1680) return 4; // Assuming each column is 420px wide
    if (width >= 840) return 2;
    return 1;
  };

  const columnCount = getColumnCount();

  // Process the structure based on the column count
  const processStructure = (): PoetryGridStructure => {
    // Step 1: Remove columns that are tagged with 'hideOnMobile' or 'hideFirst' when necessary
    const filteredRows = structure.rows.map(row => {
      let columns = row.columns;

      // Remove 'hideFirst' tagged columns when going to two columns
      if (columnCount < 4) {
        columns = columns.filter(column => !column.hideFirst);
      }

      return { ...row, columns };
    });

    // Step 2: Adjust columns based on the column count
    let adjustedRows: PoetryGridStructure['rows'] = [];

    filteredRows.forEach(row => {
      const { columns } = row;

      if (columnCount === 4) {
        // In four-column layout, keep the columns as is
        adjustedRows.push(row);
      } else if (columnCount === 2) {
        // In two-column layout, adjust the columns
        let newColumns = [];
        
        // Filter out hideFirst columns first
        const filteredColumns = columns.filter(col => !col.hideFirst);

        // If there are exactly two columns with fraction 1, keep them as is
        const fractionOneColumns = filteredColumns.filter(col => col.fraction === 1);

        if (filteredColumns.length === 2 && fractionOneColumns.length === 2) {
          newColumns = filteredColumns;
        } else if (filteredColumns.length === 1) {
          newColumns = filteredColumns;
        } else {
          // Split the row into multiple rows each with two columns
          for (let i = 0; i < filteredColumns.length; i += 2) {
            const col1 = filteredColumns[i];
            const col2 = filteredColumns[i + 1];

            const adjustedCol1 = {
              ...col1,
              fraction: col1.fraction === 1 ? 1 : 2, // Do not grow fraction 1 columns
              type: col1.type as 'logo' | 'image' | 'poem' | 'empty',
            };

            const adjustedCol2 = col2
              ? {
                  ...col2,
                  fraction: col2.fraction === 1 ? 1 : 2,
                  type: col2.type as 'logo' | 'image' | 'poem' | 'empty',
                }
              : {
                  fraction: 1,
                  type: 'empty',
                };

            adjustedRows.push({
              columns: [adjustedCol1, adjustedCol2] as ColumnProps[],
            });
          }
          return;
        }

        adjustedRows.push({ ...row, columns: newColumns });
      } else {
        // In single-column layout
        columns.forEach(col => {
          adjustedRows.push({
            columns: [
              {
                ...col,
                fraction: 1,
              },
            ],
          });
        });
      }
    });

    return { rows: adjustedRows };
  };

  const processedStructure = processStructure();

  return (
    <div style={{ marginTop: '48px' }}>
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: 400,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          <Logo height={400} isInline={true} />
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            columnCount === 1
              ? '1fr'
              : `repeat(${columnCount}, 420px)`,
          justifyContent:
            columnCount === 1 ? 'stretch' : 'end',
          width: '100%',
          overflowX: 'hidden',
          position: 'relative',
          maxWidth: '100%', // Always limit to screen width
          gap: columnCount === 1 ? '200px' : '0px',
        }}
      >
        {processedStructure.rows.map((row, index) => (
          <Row 
            key={index} 
            columns={row.columns} 
            isMobile={isMobile} 
            isSingleColumn={columnCount === 1} 
          />
        ))}
      </div>
    </div>
  );
};
