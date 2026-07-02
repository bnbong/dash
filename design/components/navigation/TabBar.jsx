import React from 'react';

/**
 * Bottom tab bar for the Dash app. Pine active state, mono-free labels.
 * Items: { key, label, icon }. `icon` is a render-prop receiving { active }.
 */
export function TabBar({ items = [], active, onChange, style = {} }) {
  return (
    <nav style={{
      display: 'flex', alignItems: 'stretch',
      height: 'var(--tabbar-height)', width: '100%',
      background: 'var(--surface)', borderTop: '1px solid var(--line)',
      paddingBottom: 'env(safe-area-inset-bottom, 0)', ...style,
    }}>
      {items.map((it) => {
        const on = it.key === active;
        return (
          <button
            key={it.key}
            type="button"
            onClick={() => onChange && onChange(it.key)}
            style={{
              flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 3, border: 'none', background: 'transparent',
              color: on ? 'var(--brand)' : 'var(--text-faint)', cursor: 'pointer',
              padding: '6px 0', transition: 'color var(--dur-fast) var(--ease-standard)',
            }}
          >
            <span style={{ display: 'inline-flex', width: 22, height: 22 }}>
              {typeof it.icon === 'function' ? it.icon({ active: on }) : it.icon}
            </span>
            <span style={{
              fontSize: 'var(--text-2xs)', fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              letterSpacing: 'var(--tracking-snug)',
            }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
