import React from 'react';

/**
 * Tag / chip. Selectable filter or static label. Optional color swatch.
 */
export function Tag({
  children,
  selected = false,
  swatch = null,
  removable = false,
  onRemove,
  onClick,
  style = {},
}) {
  const clickable = !!onClick;
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        height: 30, padding: '0 12px',
        background: selected ? 'var(--brand)' : 'var(--surface)',
        color: selected ? 'var(--text-on-brand)' : 'var(--text-body)',
        border: `1px solid ${selected ? 'transparent' : 'var(--line-strong)'}`,
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)', whiteSpace: 'nowrap',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
        ...style,
      }}
    >
      {swatch && <span style={{ width: 9, height: 9, borderRadius: '50%', background: swatch, flexShrink: 0 }} />}
      {children}
      {removable && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
          aria-label="제거"
          style={{
            display: 'inline-flex', border: 'none', background: 'transparent',
            color: 'currentColor', opacity: 0.6, cursor: 'pointer', padding: 0, marginRight: -2,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        </button>
      )}
    </span>
  );
}
