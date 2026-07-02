import React from 'react';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  spacing?: number;
  style?: React.CSSProperties;
}

/** Hairline divider with optional centered mono label. */
export function Divider(props: DividerProps): JSX.Element;
