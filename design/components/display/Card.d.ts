import React from 'react';

/**
 * Base surface container — warm paper, soft shadow, 14px radius.
 * @startingPoint section="Display" subtitle="Surface container with 5 tones" viewport="700x220"
 */
export interface CardProps {
  children?: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift on hover + pointer cursor. */
  interactive?: boolean;
  tone?: 'default' | 'sunken' | 'tint' | 'inverse' | 'accent';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Base surface container — warm paper, soft shadow, 14px radius.
 * @startingPoint section="Display" subtitle="Surface container with 5 tones" viewport="700x220"
 */
export function Card(props: CardProps): JSX.Element;
