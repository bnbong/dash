import React from 'react';

/**
 * Underline section tabs for in-screen switching (e.g. My Grove / Community Grove).
 */
export function SectionTabs({ items = [], active, onChange, style = {} }) {
  return (
    <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--line)', ...style }}>
      {items.map((it) => {
        const on = it.key === active;
        return (
          <button
            key={it.key}
            type="button"
            onClick={() => onChange && onChange(it.key)}
            style={{
              position: 'relative', border: 'none', background: 'transparent',
              padding: '10px 6px', marginBottom: -1, cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)',
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: on ? 'var(--text-strong)' : 'var(--text-muted)',
              letterSpacing: 'var(--tracking-snug)',
              transition: 'color var(--dur-fast) var(--ease-standard)',
            }}
          >
            {it.label}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: 0, height: 2,
              borderRadius: '2px 2px 0 0',
              background: on ? 'var(--brand)' : 'transparent',
            }} />
          </button>
        );
      })}
    </div>
  );
}
