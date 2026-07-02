import React from 'react';

/**
 * The Dash voice — an AI day-interpretation set in the editorial serif.
 * @startingPoint section="Dash" subtitle="AI interpretation in the editorial serif voice" viewport="700x220"
 */
export interface InterpretationCardProps {
  eyebrow?: string;
  children?: React.ReactNode;
  /** If set, appends the Impact Seed reflection line. */
  seed?: number;
  /** Optional 행복의 세 축 tags shown below, e.g. ['growth','meaning']. */
  axes?: Array<'growth' | 'enjoyment' | 'meaning'>;
  tone?: 'tint' | 'paper' | 'inverse';
  style?: React.CSSProperties;
}

/**
 * The Dash voice — an AI day-interpretation set in the editorial serif.
 * @startingPoint section="Dash" subtitle="AI interpretation in the editorial serif voice" viewport="700x220"
 */
export function InterpretationCard(props: InterpretationCardProps): JSX.Element;
