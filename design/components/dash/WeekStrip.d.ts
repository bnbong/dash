import React from 'react';

export interface WeekDay {
  label: string;
  level: number;
  today?: boolean;
}

export interface WeekStripProps {
  days: WeekDay[];
  max?: number;
  color?: string;
  height?: number;
  style?: React.CSSProperties;
}

/**
 * Seven-day activity strip — daily recording intensity as calm columns.
 * @startingPoint section="Dash" subtitle="7-day activity strip" viewport="700x160"
 */
export function WeekStrip(props: WeekStripProps): JSX.Element;
