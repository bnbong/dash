import React from 'react';

export interface IconButtonProps {
  /** Icon node, e.g. <i data-lucide="settings" /> or an inline SVG. */
  icon: React.ReactNode;
  /** Accessible label (also the tooltip). */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'soft' | 'solid' | 'outline';
  round?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/** Icon-only button for toolbars, headers, and list affordances. */
export function IconButton(props: IconButtonProps): JSX.Element;
