import React from 'react';
import { AXES } from './FlourishBalance.jsx';

/**
 * The Dash "voice" — an AI interpretation of the day in a calm, generous sans.
 * The signature moment of the product: translates actions into operating meaning.
 */
export function InterpretationCard({
  eyebrow = '오늘의 해석',
  children,
  seed = null,
  axes = null,
  tone = 'tint',
  style = {},
}) {
  const tones = {
    tint: { bg: 'var(--brand-tint)', border: '1px solid var(--pine-100)', fg: 'var(--pine-900)', eye: 'var(--pine-600)' },
    paper: { bg: 'var(--surface)', border: '1px solid var(--line)', fg: 'var(--text-strong)', eye: 'var(--text-muted)' },
    inverse: { bg: 'var(--surface-inverse)', border: '1px solid var(--pine-800)', fg: '#EFF5F0', eye: 'var(--pine-300)' },
  };
  const t = tones[tone] || tones.tint;
  return (
    <div style={{
      position: 'relative', padding: 20, background: t.bg, border: t.border,
      borderRadius: 'var(--radius-lg)', overflow: 'hidden', ...style,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
        letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
        color: t.eye, marginBottom: 10,
      }}>{eyebrow}</div>
      <p style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-lg)',
        fontWeight: 'var(--weight-regular)',
        lineHeight: 'var(--leading-relaxed)', letterSpacing: 'var(--tracking-snug)',
        color: t.fg, margin: 0,
      }}>{children}</p>
      {axes && axes.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 14 }}>
          {axes.map((k) => {
            const a = AXES[k];
            if (!a) return null;
            return (
              <span key={k} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, height: 24, padding: '0 10px',
                borderRadius: 'var(--radius-pill)', background: tone === 'inverse' ? 'rgba(255,255,255,0.08)' : a.soft,
                border: `1px solid ${tone === 'inverse' ? 'transparent' : 'color-mix(in oklch, ' + a.color + ' 30%, transparent)'}`,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: a.color }} />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: tone === 'inverse' ? '#EFF5F0' : a.color }}>{a.ko}</span>
              </span>
            );
          })}
        </div>
      )}
      {seed != null && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 14 }}>
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 14V7" stroke="var(--ochre-600)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 7.5C8 5.6 6.4 4 4.4 4H3v.9C3 6.7 4.6 8 6.5 8H8z" fill="var(--ochre-600)" opacity="0.55" />
            <path d="M8 7C8 5 9.6 3.4 11.6 3.4H13v.9C13 6.1 11.4 7.5 9.5 7.5H8z" fill="var(--ochre-600)" />
          </svg>
          <span style={{ fontSize: 'var(--text-xs)', color: t.tone === 'inverse' ? 'var(--ochre-300)' : 'var(--ochre-700)', fontWeight: 'var(--weight-medium)' }}>
            이 기록은 Dash Grove에 Impact Seed {seed}개로 반영되었어요
          </span>
        </div>
      )}
    </div>
  );
}
