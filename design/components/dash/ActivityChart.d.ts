import React from 'react';
import { DomainKey } from './DomainCard';

export interface ActivityItem {
  domain?: DomainKey;
  label?: string;
  value: number;
  color?: string;
}

export interface ActivityChartProps {
  items: ActivityItem[];
  max?: number;
  showValue?: boolean;
  style?: React.CSSProperties;
}

/**
 * Horizontal per-domain activity bars — the shape of a week's operation.
 * @startingPoint section="Dash" subtitle="Per-domain activity bar chart" viewport="700x240"
 */
export function ActivityChart(props: ActivityChartProps): JSX.Element;
