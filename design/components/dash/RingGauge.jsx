import React from 'react';

/**
 * Circular progress gauge (SVG). Calm single-arc meter for a headline ratio
 * like the weekly "operating balance" score. No ticks, no needle.
 */
export function RingGauge({
  value = 0,
  max = 100,
  size = 132,
  thickness = 12,
  color = 'var(--brand)',
  track = 'var(--surface-sunken)',
  centerValue = null,
  centerUnit = null,
  centerColor = 'var(--text-strong)',
  label = null,
  style = {},
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * pct;
  const center = size / 2;

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, ...style }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={center} cy={center} r={r} fill="none" stroke={track} strokeWidth={thickness} />
          <circle
            cx={center} cy={center} r={r} fill="none" stroke={color} strokeWidth={thickness}
            strokeLinecap="round" strokeDasharray={`${dash} ${c - dash}`}
            style={{ transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)' }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          {centerValue != null && (
            <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 2 }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: "'tnum' 1", fontSize: size * 0.26, fontWeight: 'var(--weight-medium)', letterSpacing: '-0.02em', color: centerColor, lineHeight: 1 }}>{centerValue}</span>
              {centerUnit && <span style={{ fontFamily: 'var(--font-sans)', fontSize: size * 0.11, color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>{centerUnit}</span>}
            </span>
          )}
          {label && <span style={{ fontFamily: 'var(--font-mono)', fontSize: size * 0.082, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>}
        </div>
      </div>
    </div>
  );
}
