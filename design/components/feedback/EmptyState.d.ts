import React from 'react';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Calm empty state — never frames an empty log as failure. */
export function EmptyState(props: EmptyStateProps): JSX.Element;
