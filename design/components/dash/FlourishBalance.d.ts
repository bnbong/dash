import React from 'react';

export type FlourishAxis = 'growth' | 'enjoyment' | 'meaning';

export interface AxisInfo { ko: string; en: string; color: string; soft: string; }

/** The three axes of happiness ("행복의 세 축") registry. */
export const AXES: Record<FlourishAxis, AxisInfo>;

export interface FlourishBalanceProps {
  /** Counts (or weights) per axis, e.g. { growth: 6, enjoyment: 3, meaning: 4 }. */
  values: Partial<Record<FlourishAxis, number>>;
  showLegend?: boolean;
  barHeight?: number;
  style?: React.CSSProperties;
}

/**
 * Flourish Balance — the Growth / Enjoyment / Meaning mix over a period.
 * @startingPoint section="Dash" subtitle="Three-axes-of-happiness balance meter" viewport="700x180"
 */
export function FlourishBalance(props: FlourishBalanceProps): JSX.Element;
