import React from 'react';

const TONES = {
  default: { bg: 'var(--surface-inverse)', fg: '#F4F9F5', icon: 'var(--pine-200)' },
  positive: { bg: 'var(--pine-700)', fg: '#F4F9F5', icon: 'var(--pine-200)' },
  seed: { bg: 'var(--ochre-600)', fg: '#fff', icon: '#fff' },
};

/**
 * Toast notification. Low, dark, calm. Optional leading icon.
 * Render inside a fixed container near the bottom of the screen.
 */
export function Toast({ children, tone = 'default', icon = null, style = {} }) {
  const t = TONES[tone] || TONES.default;
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      maxWidth: 360, padding: '12px 16px',
      background: t.bg, color: t.fg, borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)', fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)', lineHeight: 'var(--leading-snug)',
      animation: 'dashToast var(--dur-base) var(--ease-out)', ...style,
    }}>
      {icon && <span style={{ display: 'inline-flex', color: t.icon, width: 18, height: 18, flexShrink: 0 }}>{icon}</span>}
      {children}
      <style>{`@keyframes dashToast { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }`}</style>
    </div>
  );
}
