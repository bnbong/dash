import React from 'react';

export interface AvatarProps {
  name?: string;
  src?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/** User avatar — image or initials on pine tint. */
export function Avatar(props: AvatarProps): JSX.Element;
