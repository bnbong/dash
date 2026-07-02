import React from 'react';

export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  iconLeft?: React.ReactNode;
  suffix?: React.ReactNode;
  size?: 'md' | 'lg';
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}

/** Single-line text field with label, hint, error, and optional leading icon. */
export function Input(props: InputProps): JSX.Element;
