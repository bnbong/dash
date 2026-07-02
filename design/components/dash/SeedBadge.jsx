import React from 'react';

const SproutGlyph = ({ size = 14, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M8 14V7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 7.5C8 5.6 6.4 4 4.4 4H3v.9C3 6.7 4.6 8 6.5 8H8z" fill={color} opacity="0.55" />
    <path d="M8 7C8 5 9.6 3.4 11.6 3.4H13v.9C13 6.1 11.4 7.5 9.5 7.5H8z" fill={color} />
  </svg>
);

/**
 * Impact Seed counter. The core gamification token of Dash Grove.
 * Never framed as currency.
 */
export function SeedBadge({ count, label = null, size = 'md', variant = 'soft', style = {} }) {
  const sm = size === 'sm';
  const variants = {
    soft: { bg: 'var(--ochre-100)', fg: 'var(--ochre-700)', glyph: 'var(--ochre-600)' },
    solid: { bg: 'var(--ochre-500)', fg: '#fff', glyph: '#fff' },
    outline: { bg: 'var(--surface)', fg: 'var(--ochre-700)', glyph: 'var(--ochre-600)' },
  };
  const v = variants[variant] || variants.soft;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: sm ? 5 : 7,
      height: sm ? 24 : 30, padding: sm ? '0 9px' : '0 12px',
      background: v.bg, color: v.fg, borderRadius: 'var(--radius-pill)',
      border: variant === 'outline' ? '1px solid var(--ochre-200)' : '1px solid transparent',
      fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
      fontSize: sm ? 'var(--text-xs)' : 'var(--text-sm)', whiteSpace: 'nowrap', ...style,
    }}>
      <SproutGlyph size={sm ? 13 : 15} color={v.glyph} />
      <span style={{ fontFamily: 'var(--font-mono)', fontFeatureSettings: "'tnum' 1", letterSpacing: '-0.01em' }}>{count}</span>
      {label && <span style={{ fontWeight: 'var(--weight-medium)', opacity: 0.9 }}>{label}</span>}
    </span>
  );
}
