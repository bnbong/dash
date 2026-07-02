import React from 'react';

export type DomainKey =
  | 'body' | 'space' | 'relation' | 'work'
  | 'hobby' | 'mind' | 'admin' | 'impact';

export type DomainStatus =
  | 'stable' | 'growing' | 'active' | 'holding'
  | 'recover' | 'overload' | 'tidy';

export interface DomainInfo { en: string; ko: string; color: string; soft: string; }

/** Canonical domain registry (color + bilingual label). */
export const DOMAINS: Record<DomainKey, DomainInfo>;

/**
 * Life-domain status card for the Life Dashboard.
 * @startingPoint section="Dash" subtitle="Color-coded life-domain status card" viewport="700x200"
 */
export interface DomainCardProps {
  domain?: DomainKey;
  status?: DomainStatus;
  note?: string;
  /** Optional mono count, e.g. records this week. */
  count?: React.ReactNode;
  icon?: React.ReactNode;
  compact?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * Life-domain status card for the Life Dashboard.
 * @startingPoint section="Dash" subtitle="Color-coded life-domain status card" viewport="700x200"
 */
export function DomainCard(props: DomainCardProps): JSX.Element;
