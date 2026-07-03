import React from 'react';
import { DomainKey } from './DomainCard';
import { FlourishAxis } from './FlourishBalance';

export interface RecordReviewChange {
  primary: DomainKey;
  secondary: DomainKey[];
  axes: FlourishAxis[];
}

export interface RecordReviewProps {
  /** The user's raw record text. */
  raw: string;
  /** Dash's classified primary domain. */
  primary: DomainKey;
  /** Secondary domains (0–2). */
  secondary?: DomainKey[];
  /** Three-axes tags (0–2): growth | enjoyment | meaning. */
  axes?: FlourishAxis[];
  interpretation?: string;
  /** 0..1 — below 0.55 flips copy to ask the user first. */
  confidence?: number;
  /** How the record was captured — shows a source badge + provenance note. */
  source?: 'text' | 'voice' | 'photo';
  /** For voice records, the clip length, e.g. "0:22". */
  voiceLength?: string;
  onConfirm?: (result: RecordReviewChange) => void;
  onChange?: (result: RecordReviewChange) => void;
  style?: React.CSSProperties;
}

/**
 * Post-record classification review — editable primary/secondary domain + axes.
 * @startingPoint section="Dash" subtitle="Editable record classification review" viewport="700x300"
 */
export function RecordReview(props: RecordReviewProps): JSX.Element;
