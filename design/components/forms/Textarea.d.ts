import React from 'react';

export interface TextareaProps {
  label?: string;
  hint?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  style?: React.CSSProperties;
}

/** Multi-line text field, used for the Today Dash one-line record entry. */
export function Textarea(props: TextareaProps): JSX.Element;
