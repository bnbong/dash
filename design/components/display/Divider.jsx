import React from 'react';

/**
 * Hairline divider. Horizontal or vertical. Optional centered label.
 */
export function Divider({ orientation = 'horizontal', label = null, spacing = 16, style = {} }) {
  if (orientation === 'vertical') {
    return <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--line)', margin: `0 ${spacing}px`, ...style }} />;
  }
  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: `${spacing}px 0`, ...style }}>
        <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>{label}</span>
        <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </div>
    );
  }
  return <div style={{ height: 1, width: '100%', background: 'var(--line)', margin: `${spacing}px 0`, ...style }} />;
}
