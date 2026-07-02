import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: string;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** On/off toggle — pine when on. Controlled or uncontrolled. */
export function Switch(props: SwitchProps): JSX.Element;
