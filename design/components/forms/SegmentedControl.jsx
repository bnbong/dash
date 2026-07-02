import React from 'react';

/**
 * Segmented control for 2–4 mutually exclusive options.
 * Used for quick-record mode, report period, etc.
 */
export function SegmentedControl({
  options = [],
  value,
  defaultValue,
  onChange,
  size = 'md',
  fullWidth = false,
  style = {},
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const current = isControlled ? value : internal;
  const h = size === 'sm' ? 34 : 40;

  const select = (val) => {
    if (!isControlled) setInternal(val);
    onChange && onChange(val);
  };

  return (
    <div style={{
      display: 'inline-flex', width: fullWidth ? '100%' : 'auto',
      padding: 3, gap: 2, background: 'var(--surface-sunken)',
      border: '1px solid var(--line)', borderRadius: 'var(--radius-md)', ...style,
    }}>
      {options.map((opt) => {
        const active = opt.value === current;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => select(opt.value)}
            style={{
              flex: fullWidth ? 1 : 'initial',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              height: h, padding: '0 16px', border: 'none', borderRadius: 'var(--radius-sm)',
              background: active ? 'var(--surface)' : 'transparent',
              color: active ? 'var(--text-strong)' : 'var(--text-muted)',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)',
              fontWeight: active ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              boxShadow: active ? 'var(--shadow-xs)' : 'none',
              cursor: 'pointer', whiteSpace: 'nowrap',
              transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard)',
            }}
          >
            {opt.icon && <span style={{ display: 'inline-flex', width: 16, height: 16 }}>{opt.icon}</span>}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
