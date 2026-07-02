import React from 'react';

export type BadgeTone =
  | 'neutral' | 'pine' | 'ochre' | 'positive'
  | 'attention' | 'caution' | 'calm' | 'solid';

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: BadgeTone;
  /** Leading status dot. */
  dot?: boolean;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** Small pill status label — domain states, Seed counts, plan tiers. */
export function Badge(props: BadgeProps): JSX.Element;
