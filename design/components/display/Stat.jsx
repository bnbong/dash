import React from 'react';

/**
 * Metric display — mono number, label, optional unit and trend note.
 * The data voice of Dash. Numbers always tabular mono.
 */
export function Stat({
  value,
  label,
  unit = null,
  caption = null,
  align = 'left',
  size = 'md',
  color = 'var(--text-strong)',
  style = {},
}) {
  const sizes = { sm: 22, md: 30, lg: 40 };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
          letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>{label}</span>
      )}
      <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontWeight: 'var(--weight-medium)',
          fontSize: sizes[size] || sizes.md, lineHeight: 1, color,
          letterSpacing: 'var(--tracking-snug)', fontFeatureSettings: "'tnum' 1",
        }}>{value}</span>
        {unit && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>{unit}</span>}
      </span>
      {caption && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{caption}</span>}
    </div>
  );
}
