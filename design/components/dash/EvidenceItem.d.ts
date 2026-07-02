import React from 'react';

export interface EvidenceItemProps {
  date: string;
  evidence: React.ReactNode;
  interpretation?: string;
  domainColor?: string;
  domainLabel?: string;
  seed?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Timeline row for the Evidence Log ("오늘의 증거"): evidence + Dash's read + Seed. */
export function EvidenceItem(props: EvidenceItemProps): JSX.Element;
