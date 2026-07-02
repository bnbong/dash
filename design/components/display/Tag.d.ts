import React from 'react';

export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  /** Leading color dot (e.g. a domain color). */
  swatch?: string;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Chip for filters and domain labels. Pine fill when selected. */
export function Tag(props: TagProps): JSX.Element;
