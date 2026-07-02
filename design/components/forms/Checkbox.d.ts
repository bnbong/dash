import React from 'react';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Checkbox with optional label — pine fill, cream check, when on. */
export function Checkbox(props: CheckboxProps): JSX.Element;
