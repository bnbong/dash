import React from 'react';

export interface EvidenceItemProps {
  date: string;
  evidence: React.ReactNode;
  interpretation?: string;
  domainColor?: string;
  domainLabel?: string;
  seed?: React.ReactNode;
  /** How the record was captured. Adds a source badge (and photo thumbnail). */
  source?: 'text' | 'voice' | 'photo';
  /** For voice records, the clip length, e.g. "0:24". */
  voiceLength?: string;
  /** Optional photo thumbnail URL; a domain-tinted placeholder is shown if absent. */
  photoSrc?: string;
  style?: React.CSSProperties;
}

/** Timeline row for the Evidence Log ("오늘의 증거"): evidence + Dash's read + Seed. */
export function EvidenceItem(props: EvidenceItemProps): JSX.Element;
