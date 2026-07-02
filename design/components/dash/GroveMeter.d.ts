import React from 'react';

/**
 * Dash Grove visualization — a grove that fills as Impact Seeds accrue.
 * @startingPoint section="Dash" subtitle="Grove progress visualization" viewport="700x220"
 */
export interface GroveMeterProps {
  /** Trees already grown. */
  grown?: number;
  /** Total trees shown in the grove row. */
  total?: number;
  seedCount?: React.ReactNode;
  /** Progress toward next planting batch, 0–100. */
  pct?: number;
  caption?: string;
  style?: React.CSSProperties;
}

/**
 * Dash Grove visualization — a grove that fills as Impact Seeds accrue.
 * @startingPoint section="Dash" subtitle="Grove progress visualization" viewport="700x220"
 */
export function GroveMeter(props: GroveMeterProps): JSX.Element;
