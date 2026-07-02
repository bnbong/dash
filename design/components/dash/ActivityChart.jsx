import React from 'react';
import { DOMAINS } from './DomainCard.jsx';

/**
 * Horizontal activity chart across life domains. Each row is a labeled,
 * color-coded bar (0..max) — the at-a-glance shape of a week's operation.
 */
export function ActivityChart({ items = [], max = 5, showValue = true, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 11, ...style }}>
      {items.map((it) => {
        const info = DOMAINS[it.domain] || {};
        const color = it.color || info.color || 'var(--brand)';
        const pct = Math.max(0, Math.min(100, (it.value / max) * 100));
        const label = it.label || info.en || it.domain;
        return (
          <div key={it.domain || label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 74, flexShrink: 0, fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: 'var(--text-body)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
            <div style={{ flex: 1, height: 9, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 'var(--radius-pill)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
            </div>
            {showValue && (
              <span style={{ width: 16, flexShrink: 0, textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', color: 'var(--text-muted)', fontFeatureSettings: "'tnum' 1" }}>{it.value}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
