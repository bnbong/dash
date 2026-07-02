import React from 'react';

export interface SegmentedOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface SegmentedControlProps {
  options: SegmentedOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

/** Segmented control for 2–4 exclusive options (record mode, report period). */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
