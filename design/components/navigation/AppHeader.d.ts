import React from 'react';

export interface AppHeaderProps {
  title: React.ReactNode;
  eyebrow?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  /** Large editorial title variant for top-of-screen. */
  large?: boolean;
  style?: React.CSSProperties;
}

/** Screen header with eyebrow, title, and leading/trailing slots. */
export function AppHeader(props: AppHeaderProps): JSX.Element;
