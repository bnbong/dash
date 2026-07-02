import React from 'react';

export interface RingGaugeProps {
  value?: number;
  max?: number;
  size?: number;
  thickness?: number;
  color?: string;
  track?: string;
  centerValue?: React.ReactNode;
  centerUnit?: string;
  centerColor?: string;
  label?: string;
  style?: React.CSSProperties;
}

/**
 * Calm circular progress gauge — used for the weekly operating-balance score.
 * @startingPoint section="Dash" subtitle="Circular progress gauge" viewport="700x220"
 */
export function RingGauge(props: RingGaugeProps): JSX.Element;
