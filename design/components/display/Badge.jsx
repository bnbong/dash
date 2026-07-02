import React from 'react';

const TONES = {
  neutral: { bg: 'var(--surface-sunken)', fg: 'var(--text-body)', bd: 'var(--line)' },
  pine: { bg: 'var(--pine-100)', fg: 'var(--pine-800)', bd: 'var(--pine-200)' },
  ochre: { bg: 'var(--ochre-100)', fg: 'var(--ochre-700)', bd: 'var(--ochre-200)' },
  positive: { bg: 'var(--positive-100)', fg: 'var(--positive-600)', bd: 'var(--pine-200)' },
  attention: { bg: 'var(--attention-100)', fg: 'var(--attention-600)', bd: 'var(--ochre-200)' },
  caution: { bg: 'var(--caution-100)', fg: 'var(--caution-600)', bd: '#E4C3B8' },
  calm: { bg: 'var(--calm-100)', fg: 'var(--calm-600)', bd: '#C4D5D8' },
  solid: { bg: 'var(--brand)', fg: 'var(--text-on-brand)', bd: 'transparent' },
};

/**
 * Small status label. With optional leading dot.
 */
export function Badge({ children, tone = 'neutral', dot = false, size = 'md', style = {} }) {
  const t = TONES[tone] || TONES.neutral;
  const sm = size === 'sm';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      height: sm ? 20 : 24, padding: sm ? '0 8px' : '0 10px',
      background: t.bg, color: t.fg, border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)', fontSize: sm ? 'var(--text-2xs)' : 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-snug)',
      whiteSpace: 'nowrap', ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor', opacity: 0.85 }} />}
      {children}
    </span>
  );
}
