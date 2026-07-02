import React from 'react';

const Tree = ({ grown, size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transition: 'opacity var(--dur-base)' }}>
    <rect x="11" y="14" width="2" height="6" rx="1" fill={grown ? 'var(--pine-700)' : 'var(--ink-200)'} />
    <path d="M12 3C8.5 5 6.5 8 6.5 11C6.5 14 9 16 12 16C15 16 17.5 14 17.5 11C17.5 8 15.5 5 12 3Z"
      fill={grown ? 'var(--pine-500)' : 'var(--paper-200)'} />
    <path d="M12 6.5C10 8 9 9.6 9 11.4" stroke={grown ? 'var(--pine-200)' : 'transparent'} strokeWidth="1" strokeLinecap="round" />
  </svg>
);

/**
 * Dash Grove visualization. A small grove of trees fills as Seeds accrue
 * toward the next planting batch. Calm, never competitive.
 */
export function GroveMeter({
  grown = 0,
  total = 8,
  seedCount = null,
  pct = null,
  caption = null,
  style = {},
}) {
  const trees = Array.from({ length: total });
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'flex-end' }}>
        {trees.map((_, i) => <Tree key={i} grown={i < grown} />)}
      </div>
      {pct != null && (
        <div style={{ width: '100%', height: 8, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
          <div style={{ width: `${Math.min(100, pct)}%`, height: '100%', background: 'var(--pine-500)', borderRadius: 'var(--radius-pill)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
        </div>
      )}
      {(seedCount != null || caption) && (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
          {caption && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{caption}</span>}
          {seedCount != null && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--ochre-600)', fontWeight: 'var(--weight-semibold)', whiteSpace: 'nowrap' }}>{seedCount} Seed</span>
          )}
        </div>
      )}
    </div>
  );
}
