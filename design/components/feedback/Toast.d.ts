import React from 'react';

export interface ToastProps {
  children?: React.ReactNode;
  tone?: 'default' | 'positive' | 'seed';
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Low, dark, calm toast. `seed` tone (ochre) for Impact Seed confirmations. */
export function Toast(props: ToastProps): JSX.Element;
