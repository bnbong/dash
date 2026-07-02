import React from 'react';

/**
 * App screen header. Title (+ optional eyebrow), with leading and trailing slots.
 */
export function AppHeader({
  title,
  eyebrow = null,
  leading = null,
  trailing = null,
  large = false,
  style = {},
}) {
  return (
    <header style={{
      display: 'flex', alignItems: large ? 'flex-end' : 'center',
      justifyContent: 'space-between', gap: 12,
      minHeight: 'var(--header-height)', padding: large ? '8px 4px 4px' : '0 4px', ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0, flex: 1 }}>
        {leading}
        <div style={{ minWidth: 0 }}>
          {eyebrow && (
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)',
              letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: 3, whiteSpace: 'nowrap',
            }}>{eyebrow}</div>
          )}
          <h1 style={{
            fontSize: large ? 'var(--text-title-1)' : 'var(--text-title-3)',
            letterSpacing: 'var(--tracking-tight)', whiteSpace: large ? 'normal' : 'nowrap',
            overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{title}</h1>
        </div>
      </div>
      {trailing && <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>{trailing}</div>}
    </header>
  );
}
