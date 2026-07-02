import React from 'react';

export interface ProgressBarProps {
  value?: number;
  max?: number;
  color?: string;
  track?: string;
  height?: number;
  showLabel?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Calm progress meter — no stripes, no loops. Used for Grove conversion progress. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
