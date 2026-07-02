import React from 'react';

/**
 * Calm progress meter. No stripes, no animation loops. Pine fill by default.
 */
export function ProgressBar({
  value = 0,
  max = 100,
  color = 'var(--brand)',
  track = 'var(--surface-sunken)',
  height = 8,
  showLabel = false,
  label = null,
  style = {},
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {(showLabel || label) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{label}</span>
          {showLabel && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-body)', fontFeatureSettings: "'tnum' 1" }}>{Math.round(pct)}%</span>}
        </div>
      )}
      <div style={{ width: '100%', height, background: track, borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: color, borderRadius: 'var(--radius-pill)',
          transition: 'width var(--dur-slow) var(--ease-out)',
        }} />
      </div>
    </div>
  );
}
