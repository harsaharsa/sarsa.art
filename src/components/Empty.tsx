import React from 'react';

interface EmptyProps {
  backgroundColor?: string;
}

export const Empty: React.FC<EmptyProps> = ({ backgroundColor }) => (
  <div className="empty" style={{ backgroundColor: backgroundColor || "transparent" }} />
);