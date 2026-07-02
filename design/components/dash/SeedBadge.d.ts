import React from 'react';

export interface SeedBadgeProps {
  count: React.ReactNode;
  label?: string;
  size?: 'sm' | 'md';
  variant?: 'soft' | 'solid' | 'outline';
  style?: React.CSSProperties;
}

/** Impact Seed counter with sprout glyph. The Dash Grove progress token (never currency). */
export function SeedBadge(props: SeedBadgeProps): JSX.Element;
