import React from 'react';

export type ButtonVariant = 'primary' | 'accent' | 'secondary' | 'ghost' | 'quiet';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Core action button for Dash.
 * @startingPoint section="Forms" subtitle="Core action button — 5 variants, 3 sizes" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual weight. `primary` = pine, `accent` = ochre momentum, `quiet` = soft pine tint. */
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

/**
 * Primary action button for Dash.
 * @startingPoint section="Forms" subtitle="Core action button — 5 variants, 3 sizes" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
