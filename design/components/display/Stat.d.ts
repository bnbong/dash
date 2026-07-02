import React from 'react';

export interface StatProps {
  value: React.ReactNode;
  label?: string;
  unit?: string;
  caption?: string;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  style?: React.CSSProperties;
}

/** Metric display — tabular mono number with mono label. The data voice of Dash. */
export function Stat(props: StatProps): JSX.Element;
